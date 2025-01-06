import {
  IconFaceBook,
  IconTwitter,
  YoutobeIcon,
} from "../../shared/assets/icons";
import { styled } from "../../shared/styles";
import IconVn from "../../shared/assets/icons/ic_VN.png";
import IconEng from "../../shared/assets/icons/icon_EN.png";
import IconChina from "../../shared/assets/icons/ic_TQ.png";
import { Button, Tooltip } from "antd";

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

const StyledBtnHover = styled(Button, {
  border: "none",
  padding: "unset",
  "&:focus-visible": {
    outline: "unset !important",
  },
});

export const HeaderData = () => {
  return (
    <LayoutContactStyled>
      <div className="left">
        <Tooltip
          trigger="hover"
          placement="bottomLeft"
          title={"Follow on Facebook"}
        >
          <StyledBtnHover
            onClick={() =>
              window.open("https://www.facebook.com/canh.uc.808320", "_black")
            }
          >
            <IconFaceBook />
          </StyledBtnHover>
        </Tooltip>
        <Tooltip
          trigger="hover"
          placement="bottomLeft"
          title={"Follow on Twitter"}
        >
          <StyledBtnHover>
            <IconTwitter />
          </StyledBtnHover>
        </Tooltip>
        <Tooltip
          trigger="hover"
          placement="bottomLeft"
          title={"Follow on Youtobe"}
        >
          <StyledBtnHover>
            <YoutobeIcon />
          </StyledBtnHover>
        </Tooltip>
      </div>
      <div className="right">
        <img src={IconVn} alt="icon-vn" />
        <img src={IconEng} alt="icon-eng" />
        <img src={IconChina} alt="icon-china" />
      </div>
    </LayoutContactStyled>
  ) as unknown as React.ReactElement;
};
