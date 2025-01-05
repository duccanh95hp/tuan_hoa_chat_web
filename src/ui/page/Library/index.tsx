import { Button } from "antd";
import { LIBRARY, LIBRARY_SILD_IMG } from "../../../core/data/library";
import { styled } from "../../../shared/styles";
import { HeadingPage } from "../../layouts/function/HeadingPage";
import { StyledPageWapper } from "../../layouts/styles";
import { RightOutlined } from "@ant-design/icons";
import SliderComponents from "../../../shared/components/Slider";

const StyledLibraryWapper = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  margin: "24px 0",
});

const StyledLibraryItem = styled("div", {
  width: "32%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden", // Ẩn phần bị phóng ra ngoài
  img: {
    cursor: "pointer",
    width: "100%",
    transition: "transform 0.3s ease", // Smooth transition for zoom effect
    "&:hover": {
      transform: "scale(1.05)", // Scale up by 5%
    },
  },
  "@media (max-width: 765px)": {
    width: "100%",
  },
});

const StyledBtn = styled(Button, {
  marginTop: "24px",
  color: "white",
  border: "none",
  background: "#006db3",
  fontWeight: "600",
  fontSize: "15px",
  justifyContent: "space-between",
  "&:hover": {
    color: "black !important",
    border: "none",
    fontWeight: "600",
    background: "#ffc801 !important",
  },
});

const Library = () => {
  const onOpenFilePdf = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <StyledPageWapper>
      <HeadingPage style={{ fontSize: "16px" }} title="HỒ SƠ NĂNG LỰC" />
      <StyledLibraryWapper>
        {LIBRARY?.map((lib) => (
          <StyledLibraryItem>
            <img src={lib.img} onClick={() => onOpenFilePdf(lib.file)} />
            <StyledBtn
              onClick={() => onOpenFilePdf(lib.file)}
              icon={<RightOutlined />}
              iconPosition="end"
            >
              XEM PROFILE
            </StyledBtn>
          </StyledLibraryItem>
        ))}
      </StyledLibraryWapper>
      <HeadingPage style={{ fontSize: "16px" }} title="HÌNH ẢNH HOẠT ĐỘNG" />
      <SliderComponents
        isAuto={true}
        fiveItem={true}
        sliders={LIBRARY_SILD_IMG}
      />
    </StyledPageWapper>
  );
};

export default Library;
