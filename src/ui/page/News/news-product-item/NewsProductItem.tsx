import { StyledProductItem } from "../../../../shared/components/ProductItem";
import { styled } from "../../../../shared/styles";

const StyledNewsItem = styled(StyledProductItem, {
  flex: "0 0 32%",
  // flex: 'unset',
  maxWidth: "32%",
  "@media (max-width: 765px)": {
    flex: "0 0 100%",
    maxWidth: "100%",
    width: "100%",
  },
  padding: "unset",
  borderRadius: "10px",
  height: "300px",
  img: {
    borderRadius: "10px 10px 0 0",
    height: "140px",  
  },
  ".title": {
    fontSize: "14px",
    color: "#003d68",
    padding: "5px",
  },
  ".content": {
    fontSize: "14px",
    color: "#003d68",
    padding: "0 5px",
    lineClamp: 3,
  },
});

type TNewsProductItem = {
  key: number;
  icon: any;
  title: string;
  content: string;
};

export const NewsProductItem = ({
  key,
  icon,
  title,
  content,
}: TNewsProductItem) => {
  return (
    <StyledNewsItem>
      <img src={icon} alt={title} />
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </StyledNewsItem>
  );
};
