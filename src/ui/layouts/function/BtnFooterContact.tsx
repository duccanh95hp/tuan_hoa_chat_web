import React from "react";
import { createStitches } from "@stitches/react";
import ImgMess from "../../../shared/assets/icons/mess.png";
import ImgZalo from "../../../shared/assets/icons/zalo-img.png";
import ImgPhone from "../../../shared/assets/icons/phone.png";

// Create styles and keyframes using Stitches
const { styled, keyframes } = createStitches({
  theme: {
    colors: {
      messRing: "#0084ffe5",
      zaloRing: "#02abd3cc",
      hotlineRing: "#ff0000e0",
    },
  },
});

// Keyframe animations
const phoneringAloCircleAnim = keyframes({
  "0%": { transform: "rotate(0) scale(0.5) skew(1deg)", opacity: 0.1 },
  "30%": { transform: "rotate(0) scale(0.7) skew(1deg)", opacity: 0.5 },
  "100%": { transform: "rotate(0) scale(1) skew(1deg)", opacity: 0.1 },
});

const phoneringAloCircleFillAnim = keyframes({
  "0%": { transform: "rotate(0) scale(0.7) skew(1deg)", opacity: 0.6 },
  "50%": { transform: "rotate(0) scale(1) skew(1deg)", opacity: 0.6 },
  "100%": { transform: "rotate(0) scale(0.7) skew(1deg)", opacity: 0.6 },
});

const phoneringAloCircleImgAnim = keyframes({
  "0%": { transform: "rotate(0) scale(1) skew(1deg)" },
  "10%": { transform: "rotate(-25deg) scale(1) skew(1deg)" },
  "20%": { transform: "rotate(25deg) scale(1) skew(1deg)" },
  "30%": { transform: "rotate(-25deg) scale(1) skew(1deg)" },
  "40%": { transform: "rotate(25deg) scale(1) skew(1deg)" },
  "50%": { transform: "rotate(0) scale(1) skew(1deg)" },
  "100%": { transform: "rotate(0) scale(1) skew(1deg)" },
});

const RingWrap = styled("div", {
  zIndex: 9999,
});

const BaseRing = styled("div", {
  position: "relative",
  visibility: "visible",
  backgroundColor: "transparent",
  width: "110px",
  height: "65px",
  cursor: "pointer",
  zIndex: 9999,
  backfaceVisibility: "hidden",
  transform: "translateZ(0)",
  transition: "visibility 0.5s",
  display: "block",

  variants: {
    type: {
      mess: {
        "& .circle": {
          borderColor: "$messRing",
        },
        "& .circleFill": {
          backgroundColor: "$messRing",
        },
        "& .imgCircle": {
          backgroundColor: "#0084ff",
        },
      },
      zalo: {
        "& .circle": {
          borderColor: "$zaloRing",
        },
        "& .circleFill": {
          backgroundColor: "$zaloRing",
        },
        "& .imgCircle": {
          backgroundColor: "#02abd3",
        },
      },
      hotline: {
        "& .circle": {
          borderColor: "$hotlineRing",
        },
        "& .circleFill": {
          backgroundColor: "$hotlineRing",
        },
        "& .imgCircle": {
          backgroundColor: "#e80000",
        },
      },
    },
  },
});

const Circle = styled("div", {
  width: "90px",
  height: "90px",
  top: "17px",
  left: "17px",
  position: "absolute",
  backgroundColor: "transparent",
  borderRadius: "100%",
  border: "2px solid",
  animation: `${phoneringAloCircleAnim} 1.2s infinite ease-in-out`,
  transition: "all 0.5s",
  transformOrigin: "50% 50%",
  opacity: 0.5,
  "@media (max-width: 765px)": {
    width: "80px",
    height: "80px",
  },
});

const CircleFill = styled("div", {
  width: "70px",
  height: "70px",
  top: "27px",
  left: "27px",
  position: "absolute",
  borderRadius: "100%",
  border: "2px solid transparent",
  animation: `${phoneringAloCircleFillAnim} 2.3s infinite ease-in-out`,
  transition: "all 0.5s",
  transformOrigin: "50% 50%",
  "@media (max-width: 765px)": {
    width: "60px",
    height: "60px",
  },
});

const ImgCircle = styled("div", {
  width: "50px",
  height: "50px",
  top: "37px",
  left: "37px",
  position: "absolute",
  backgroundSize: "20px",
  borderRadius: "100%",
  border: "2px solid transparent",
  animation: `${phoneringAloCircleImgAnim} 1s infinite ease-in-out`,
  transformOrigin: "50% 50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 765px)": {
    width: "40px",
    height: "40px",
  },

  "& .pps-btn-img img": {
    marginTop: '5px',
    width: "45px",
    height: "45px",
    "@media (max-width: 765px)": {
      marginTop: '5px',
      width: "30px",
      height: "30px",
    },
  },
});

const HotlineBar = styled("div", {
  position: "absolute",
  background: "$hotlineRing",
  height: "37px",
  width: "220px",
  // lineHeight: "40px",
  bottom: "-18px",
  left: "46px",
  borderRadius: "50px",
  padding: "0 10px",
  cursor: "pointer",
  transition: "all 0.8s",
  zIndex: 20,
  boxShadow: "0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 10%)",

  "& a": {
    color: "#fff",
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "bold",
    textIndent: "50px",
    display: "block",
    letterSpacing: "1px",
    lineHeight: "38px",
    fontFamily: "Arial",

    "&:hover, &:active": {
      color: "#fff",
    },
  },

  "@media (max-width: 768px)": {
    display: "none",
  },
});

// Props Type
interface PhoneRingProps {
  type: "mess" | "zalo" | "hotline";
}

const PhoneRing: React.FC<PhoneRingProps> = ({ type }) => {
  const renderIcon = () => {
    switch (type) {
      case "mess":
        return ImgMess;
      case "zalo":
        return ImgZalo;
      case "hotline":
        return ImgPhone;
    }
  };

  const goToCircle = () => {
    switch (type) {
      case "mess":
        return window.open("https://www.facebook.com/profile.php?id=100093705414731&mibextid=wwXIfr&rdid=TtYCpXk7szcEmn69&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18G71XZgE2%2F%3Fmibextid%3DwwXIfr#", "_black");
      case "zalo":
        return window.open(
          "https://zalo.me/094.1795.869",
          "_black"
        );
      case "hotline":
        return window.open(
          "https://zalo.me/094.1795.869",
          "_black"
        );
    }
  };

  return (
    <RingWrap>
      <BaseRing type={type} onClick={goToCircle}>
        <Circle className="circle" />
        <CircleFill className="circleFill" />
        <ImgCircle className="imgCircle">
          <div className="pps-btn-img">
            <img src={renderIcon()} alt={`${type} icon`} />
          </div>
        </ImgCircle>
      </BaseRing>
      {type === "hotline" && (
        <HotlineBar>
          <a href="tel:094.1795.869">Call Now</a>
        </HotlineBar>
      )}
    </RingWrap>
  );
};

export default PhoneRing;
