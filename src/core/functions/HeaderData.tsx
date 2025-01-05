import { IconFaceBook } from "../../shared/assets/icons";
import { IconTwtiter } from "../../shared/assets/icons/IconTwtiter";
import { YoutobeIcon } from "../../shared/assets/icons/YoutobeIcon";
import { styled } from "../../shared/styles";
import IconVn from "../../shared/assets/icons/ic_VN.png";
import IconEng from "../../shared/assets/icons/icon_EN.png";
import IconChina from "../../shared/assets/icons/ic_TQ.png";

const LayoutContactStyled = styled("div", {
  fontSize: "12px",
  display: "flex",
  alignItems: "center",
  width: "100%",
  justifyContent: "space-between",
  "@media (max-width: 765px)": {
    justifyContent: "center",
    gap: "12px",
  },
  ".left": {
    display: "flex",
    gap: "18px",
  },
  ".right": {
    paddingTop: "6px",
    display: "flex",
    gap: "10px",
    img: {
      width: "30px",
    },
  },
});

export const HeaderData = () => {
  return (
    <LayoutContactStyled>
      <div className="left">
        <IconFaceBook />
        <IconTwtiter />
        <YoutobeIcon />
      </div>
      <div className="right">
        <img src={IconVn} alt="icon-vn" />
        <img src={IconEng} alt="icon-eng" />
        <img src={IconChina} alt="icon-china" />
      </div>
    </LayoutContactStyled>
  ) as unknown as React.ReactElement;
};
