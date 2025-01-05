import { StyledTitle, StyledTitleImg, StyledTitleImgWapper } from "../styles";
import ImgTitle from "../../../shared/assets/icons/title_foo.png";

type THeadingPage = {
  title: string;
  style?: any;
};

export const HeadingPage = ({ title, style }: THeadingPage) => (
  <>
    <StyledTitle style={style}>{title}</StyledTitle>
    <StyledTitleImgWapper>
      <StyledTitleImg src={ImgTitle} alt="" />
    </StyledTitleImgWapper>
  </>
);
