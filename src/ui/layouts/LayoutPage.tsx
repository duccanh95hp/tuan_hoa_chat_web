import { styled } from "../../shared/styles";
import { ReactNode, useEffect, useRef, useState } from "react";
import { HeaderPage } from "./function/HeaderPage";
import { HeaderData } from "../../core/functions/HeaderData";
import { Sidebar } from "./function/Sidebar";
import { useAppProvider } from "../../shared/contexts/AppProvider";
import { Footer } from "./function/Footer";
import { ButtonScrollTop } from "../../shared/components/ButtonScrollTop";
import PhoneRing from "./function/BtnFooterContact";
import { useRouter } from "../../shared/hooks/useRouter";
import { SearchLayout } from "./function/SearchLayout";

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
  const topRef = useRef<HTMLDivElement>(null);
  const { collapsed } = useAppProvider();
  const { location } = useRouter();
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = topRef.current?.scrollTop || 0;
      if (scrollTop > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    const refElement = topRef.current;
    if (refElement) {
      refElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (refElement) {
        refElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <LayoutPageStyle
      ref={topRef}
      className="layout-page"
      style={{ overflow: collapsed ? "hidden" : "auto" }}
    >
      <HeaderPage header={<HeaderData />} />
      <Sidebar />
      <SearchLayout />
      {children}
      <Footer />
      {visible && <ButtonScrollTop topRef={topRef} />}
      <StyledFooterContact>
        <PhoneRing type="mess" />
        <PhoneRing type="zalo" />
        <PhoneRing type="hotline" />
      </StyledFooterContact>
    </LayoutPageStyle>
  );
};
