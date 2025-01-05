import React, { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  start?: number;
  end: number;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ start = 0, end, duration = 1 }) => {
  const [count, setCount] = useState<number>(start);
  const ref = useRef<HTMLDivElement | null>(null);

  const runCountUp = () => {
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(start); // Reset count về start mỗi khi vào viewport
          runCountUp();    // Chạy lại hiệu ứng đếm
        }
      },
      { threshold: 0.5 } // Kích hoạt khi phần tử hiển thị 50% trong viewport
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [start, end, duration]);

  return (
    <div ref={ref} className="count-up">
      {count}
    </div>
  );
};

export default CountUp;
