import { StyledProductItem } from "../../../../shared/components/ProductItem";
import { useRouter } from "../../../../shared/hooks/useRouter";
import { styled } from "../../../../shared/styles";

const StyledNewsItem = styled(StyledProductItem, {
  flex: "0 0 32%",
  // flex: 'unset',
  maxWidth: "32%",
  cursor: "pointer",
  color: "#0A0A0A",
  "@media (max-width: 765px)": {
    flex: "0 0 100%",
    maxWidth: "100%",
    width: "100%",
  },
  padding: "unset",
  borderRadius: "10px",
  height: "300px",
  "&:hover": {
    ".content": {
      color: "#006db3 !important",
    },
  },
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
    color: "#0A0A0A",
    padding: "0 10px",
    lineClamp: 3,
  },
});

type TNewsProductItem = {
  path: number;
  icon: any;
  title: string;
  content: string;
};

export const NewsProductItem = ({
  path,
  icon,
  title,
  content,
}: TNewsProductItem) => {
  const { navigate, location } = useRouter();
  return (
    <StyledNewsItem
      onClick={() => {
        navigate({
          pathname: `${location?.pathname}`,
          search: `detail=${title}`,
        });
      }}
    >
      <img src={icon} alt={title} />
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </StyledNewsItem>
  );
};
