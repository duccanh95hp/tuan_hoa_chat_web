import { UpOutlined } from "@ant-design/icons";
import { styled } from "../../styles";

const StyledButtonScrollTop = styled("div", {
  position: "fixed",
  border: "1px solid",
  borderRadius: "50%",
  display: "flex",
  height: "40px",
  width: "40px",
  right: "34px",
  bottom: "28px",
  justifyContent: "center",
  cursor: "pointer",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
});

export const ButtonScrollTop = ({ topRef }: any) => {
  return (
    <StyledButtonScrollTop
      onClick={() => topRef.current.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <UpOutlined />
    </StyledButtonScrollTop>
  );
};
