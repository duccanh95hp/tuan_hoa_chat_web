import { useEffect, useRef } from "react";
import {
  NextButton,
  PrevButton,
  StyledSliderContainer,
  StyledSliderWrapper,
  StyledWapperItem,
} from "../../../../shared/components/Slider";

type TSliderImg = {
  imgs: any[];
  style?: any;
};

export const SliderImg = ({ imgs, style }: TSliderImg) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      if (sliderRef.current.scrollLeft === 0) {
        // If at the start, move to the last item seamlessly
        sliderRef.current.scrollTo({
          left: sliderRef.current.scrollWidth - sliderRef.current.offsetWidth,
          behavior: "smooth",
        });
      } else {
        sliderRef.current.scrollBy({
          left: -sliderRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const isAtEnd =
        sliderRef.current.scrollLeft + sliderRef.current.offsetWidth ===
        sliderRef.current.scrollWidth;

      if (isAtEnd) {
        // If at the end, scroll back to the start seamlessly
        sliderRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        sliderRef.current.scrollBy({
          left: sliderRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <StyledSliderContainer>
      <PrevButton onClick={scrollLeft}>&lt;</PrevButton>
      <StyledSliderWrapper ref={sliderRef}>
        {imgs.map((res, index) => (
          <StyledWapperItem style={style} key={index} oneItem>
            <img src={res.icon} alt={'slide img'}  />
          </StyledWapperItem>
        ))}
      </StyledSliderWrapper>
      <NextButton onClick={scrollRight}>&gt;</NextButton>
    </StyledSliderContainer>
  );
};
