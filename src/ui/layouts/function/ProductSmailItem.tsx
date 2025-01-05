import { styled } from "../../../shared/styles";

type TProductSmailItem = {
  index: number;
  title: string;
  img: string;
  smallImg: string;
  content: string;
};

const StyledProductItem = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "33%",
  minWidth: "165px",
  wordBreak: "break-word",
  color: "Black",
  justifyContent: "space-between",
  cursor: "pointer",
  overflow: "hidden",

  "&:hover img": {
    transform: "scale(1.1)", // Phóng to ảnh 10%
    transition: "transform 0.3s ease", // Thêm hiệu ứng mượt mà
  },
  "@media (max-width: 1050px)": {
    width: "50%",
  },
  "@media (max-width: 765px)": {
    width: "100%",
  },
  ".product_name": {
    fontSize: "14px",
    fontWeight: "700",
    color: "white",
    position: "relative",
    padding: "0 10px",
    width: "fit-content",
    height: "48px",
    display: "flex",
    alignItems: "center",
    background: "#02305e",
    margin: "-47px 0 0 0",
    "&:hover": {
      color: "black",
      background: "#ffc801",
    },

    "&:hover .arrow-right": {
      borderLeftColor: "#ffc801",
    },
  },
  ".arrow-right": {
    borderTop: "24px solid transparent",
    borderBottom: "26px solid transparent",
    borderLeft: "26px solid #02305e",
    position: "absolute",
    left: "101%",
    "&:hover": {
      color: "black !important",
      border: "none",
      fontWeight: "700",
      background: "#ffc801 !important",
    },
  },
});

const StyledBtnDetail = styled("div", {
  color: "#1290e4",
  fontSize: "15px",
  fontWeight: "600",
  padding: "5px",
});

const StyledImg = styled("img", {
  width: "100%",
  cursor: "pointer",
  transition: "transform 0.3s ease", // Smooth transition for zoom effect
  "&:hover": {
    transform: "scale(1.05)", // Scale up by 5%
  },
});

const StyledImgTitle = styled("div", {
  fontSize: "14px",
  fontWeight: "normal",
  textTransform: "uppercase",
  color: "#abb8c3",
  padding: "10px",
});

export const ProductSmailItem = ({
  index,
  title,
  img,
  content,
  smallImg,
}: TProductSmailItem) => {
  const onGoToDetail = () => {};
  return (
    <StyledProductItem>
      <div style={{ padding: "7px" }}>
        <StyledImg src={img} alt={title} />
        <StyledImgTitle>{}</StyledImgTitle>
        <div className="product_name">
          <img src="" alt="" />
          {title}
          <div className="arrow-right" />
        </div>
        <div className="product_content">{content}</div>
      </div>
      <StyledBtnDetail onClick={onGoToDetail}>XEM CHI TIẾT</StyledBtnDetail>
    </StyledProductItem>
  );
};
