import { styled } from "../../../../shared/styles";

const StyledUpdateStep = styled("div", {
  textAlign: "center",
  marginTop: "24px",
});

export const UpdateStep = () => {
  return <StyledUpdateStep>Đang cập nhật...</StyledUpdateStep>;
};
