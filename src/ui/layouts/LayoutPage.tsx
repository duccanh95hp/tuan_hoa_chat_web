import { styled } from "../../shared/styles";
import { ReactNode, useRef } from "react";
import { HeaderPage } from "./function/HeaderPage";
import { HeaderData } from "../../core/functions/HeaderData";
import { Sidebar } from "./function/Sidebar";
import { useAppProvider } from "../../shared/contexts/AppProvider";
import { Footer } from "./function/Footer";
import { ButtonScrollTop } from "../../shared/components/ButtonScrollTop";
import PhoneRing from "./function/BtnFooterContact";

const LayoutPageStyle = styled("div", {
  height: "100%",
  width: "100%",
  background: "white",
  position: "relative",
  overflowX: "hidden !important",
});

const StyledFooterContact = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  bottom: "50px",
  left: "-12px",
  zIndex: 1000,
});

export const LayoutPage = ({ children }: { children: ReactNode }) => {
  const topRef = useRef(null);
  const { collapsed } = useAppProvider();

  console.log(window.screenY);

  return (
    <LayoutPageStyle
      ref={topRef}
      className="layout-page"
      style={{ overflow: collapsed ? "hidden" : "auto" }}
    >
      <HeaderPage header={<HeaderData />} />
      <Sidebar />
      {children}
      <Footer />
      <ButtonScrollTop topRef={topRef} />
      <StyledFooterContact>
        <PhoneRing type="mess" />
        <PhoneRing type="zalo" />
        <PhoneRing type="hotline" />
      </StyledFooterContact>
    </LayoutPageStyle>
  );
};
