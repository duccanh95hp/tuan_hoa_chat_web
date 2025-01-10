import { PATH } from "../../../../router/path";
import { useRouter } from "../../../../shared/hooks/useRouter";
import { styled } from "../../../../shared/styles";

const StyledProductItemWapper = styled("div", {
  display: "flex",
  gap: "10px",
  flexDirection: "column",
  boxShadow:
    "rgb(60 64 67 / 10%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px",
  padding: "10px",
  maxWidth: "17%",
  width: "17%",
  borderRadius: "10px",
  alignItems: "center",
  textAlign: "center",
  // height: "270px",
  "@media (max-width: 765px)": {
    flex: "0 0 42%", // For smaller screens, show 2 items (each takes 1/2 width)
    maxWidth: "42%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  ".content": {
    fontSize: "14px",
    fontWeight: "400",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    ".title": {
      lineClamp: 2,
      fontWeight: "500",
      fontSize: "14px",
    },
    ".default_pirce": {
      color: "#f50101",
      fontWeight: "bold",
    },
  },
});

type TProductItem = {
  img: any;
  title: string;
  pirce: number;
};

export const ProductItem = ({ img, title, pirce }: TProductItem) => {
  const { navigate } = useRouter();
  return (
    <StyledProductItemWapper
      onClick={() => {
        navigate(`${PATH.product_detail}?${encodeURIComponent(title)}`);
      }}
    >
      <img src={img} alt={title} />
      <div className="content">
        <div className="title">{title}</div>
        {pirce ? "" : <div className="default_pirce">Giá: Liên hệ</div>}
      </div>
    </StyledProductItemWapper>
  );
};
