import { createStitches } from "@stitches/react";

const { styled } = createStitches({
  utils: {
    lineClamp: (value: number) => ({
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
      "-webkit-line-clamp": value,
    }),
  },
});

const StyledProductItemSmall = styled("div", {
  display: "flex",
  borderTop: "1px dotted #979797",
  gap: "10px",
  "&:first-child": {
    border: "none",
  },
  padding: "10px 0",
  img: {
    width: "60px",
    height: "60px",
  },
  ".content": {
    fontSize: "14px",
    fontWeight: "400",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "5px",
    ".default_pirce": {
      color: "#f50101",
      fontWeight: "bold",
    },
  },
});

type TProductItemSmall = {
  img: string;
  title: string;
  pirce: number;
};

export const ProductItemSmall = ({ img, title, pirce }: TProductItemSmall) => {
  return (
    <StyledProductItemSmall>
      <img src={img} alt={title} />
      <div className="content">
        <div>{title}</div>
        {pirce ? "" : <div className="default_pirce">Giá: Liên hệ</div>}
      </div>
    </StyledProductItemSmall>
  );
};

export const StyledProductItem = styled("div", {
  display: "flex",
  gap: "10px",
  flexDirection: "column",
  boxShadow:
    "rgb(60 64 67 / 10%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px",
  padding: "10px",
  maxWidth: "20%",
  width: "23%",
  borderRadius: "10px",
  alignItems: "center",
  textAlign: "center",
  height: "260px",
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

export const ProductItem = ({ img, title, pirce }: TProductItemSmall) => {
  return (
    <StyledProductItem>
      <img src={img} alt={title} />
      <div className="content">
        <div className="title">{title}</div>
        {pirce ? "" : <div className="default_pirce">Giá: Liên hệ</div>}
      </div>
    </StyledProductItem>
  );
};
