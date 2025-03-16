import React from "react";
import { createStitches, keyframes } from "@stitches/react";

// Định nghĩa keyframes cho animation
const drop = keyframes({
  "5%": { opacity: 0.5 },
  "8%": { opacity: 1, top: "0.5em", transform: "rotateX(-360deg)" },
  "60%": { opacity: 1, top: "0.5em", transform: "rotateX(-360deg)" },
  "65%": { opacity: 0, top: "0.5em" },
  "68%": { top: "1em" },
});

// Tạo cấu hình stitches
const { css } = createStitches({
  theme: {
    colors: {
      red: "#ff0000",
    },
  },
});

// Định nghĩa style cho text và animation
const textAnimation = css({
  display: "block",
  overflow: "hidden",
  whiteSpace: "nowrap",
  fontSize: "30px",
  fontWeight: 700,
  fontFamily: "sans-serif",
  width: "700px",
  marginLeft: "10px"
});

const spanStyle = css({
  top: 0,
  display: "inline-block",
  opacity: 0,
  lineHeight: 1.2,
  transform: "rotateX(-90deg)",
  color: "$red", // Áp dụng màu đỏ cho ký tự
});

// Tạo các class động với animation delay
const leftClasses = Array.from({ length: 19 }, (_, i) =>
  css({
    animation: `${drop} 10s ease-in-out infinite`,
    animationDelay: `${1.15 + i * 0.05}s`,
  })()
);

// Component
const AnimatedText: React.FC = () => {
  const textArray = [
    "U",
    "Y",
    " ",
    "T",
    "Í",
    "N",
    " ",
    "-",
    " ",
    "C",
    "H",
    "Ấ",
    "T",
    " ",
    "L",
    "Ư",
    "Ợ",
    "N",
    "G",
  ];

  return (
    <div className={textAnimation()}>
      {textArray.map((text, i) =>
        text === " " ? (
          <span key={i} style={{ display: "inline-block", width: "0.5em" }} />
        ) : (
          <span key={i} className={`${spanStyle()} ${leftClasses[i]}`}>
            {text}
          </span>
        )
      )}
    </div>
  );
};

export default AnimatedText;
