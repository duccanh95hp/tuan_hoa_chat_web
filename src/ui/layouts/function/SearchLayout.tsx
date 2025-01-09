import { useAppProvider } from "../../../shared/contexts/AppProvider";
import { keyframes, styled } from "../../../shared/styles";
import useClickOutside from "../../../shared/hooks/useClickOutside";
import { useRef, useState } from "react";
import { IconCloseSidebar } from "../../../shared/assets/icons/IconCloseSidebar";
import { Input, Menu } from "antd";
import { useSearchLayout } from "../../../core/hooks/useSearchLayout";
import { useRouter } from "../../../shared/hooks/useRouter";

const StyledSearchLayout = styled("div", {
  height: "100%",
  width: "100%",
  position: "fixed",
  zIndex: 100,
  top: 0,
  right: 0, // Chuyển sidebar sang phải
  display: "flex",
  boxShadow: "0px 0px 3px 0px #cdcdcd",
  opacity: 0.7,
  overflowY: "hidden",
  transform: "translateX(100%)", // Sidebar bắt đầu từ ngoài màn hình bên phải
  transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
  "&.open": {
    transform: "translateX(0)", // Sidebar di chuyển vào màn hình
  },
  ".side_container": {
    width: "40%",
    height: "100%",
    background: "black",
    padding: "38px 0px",
    "@media (max-width: 765px)": {
      width: "100%",
    },
    ".menu_sidebar": {
      overflowY: "hidden",
      height: "90%",
      marginTop: "12px",
      ".ant-menu": {
        border: "none",
      },
    },
  },
});

const StyledSidebarRight = styled("div", {
  opacity: "0.6",
  background: "#0b0b0b",
  width: "100%",
  "@media (max-width: 765px)": {
    width: "unset",
  },
});

const moveAnimation = keyframes({
  "0%": { top: "40px" },
  "100%": { top: "12px" },
});

// Styled component cho Sidebar Header
const StyledSidebarHeader = styled("div", {
  position: "absolute",
  top: "12px",
  right: "12px",
  zIndex: "1000",
  animation: `${moveAnimation} 1s 1 forwards`,
  animationDelay: "1s hidden",
  variants: {
    isOpen: {
      true: {
        opacity: "1",
      },
      false: {
        opacity: "0",
      },
    },
  },
  "@media (min-width: 765px)": {
    svg: {
      path: {
        stroke: "white",
      },
    },
  },
});

const StyledContainerSearchWrapper = styled("div", {
  textAlign: "center",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "0 6%",
  marginTop: "40%",
  opacity: "1",
  ".ant-input": {
    height: "48px",
    borderRadius: "24px",
    background: "rgba(255,255,255,.2) !important",
    color: "white !important",
    fontSize: "18px",
  },
  ".ant-input::placeholder": {
    color: "white !important",
    fontSize: "18px",
  },
});

export const SearchLayout = () => {
  const ref = useRef(null);
  const { collapsedSearch, updateAppProps } = useAppProvider();
  const { navigate } = useRouter();
  const { dataSearch, onSearch } = useSearchLayout();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [valueSearch, setValueSearch] = useState<string>("");

  useClickOutside(ref, () => {
    if (collapsedSearch) {
      updateAppProps({ collapsedSearch: false });
    }
  });

  const onChange = (e: any) => {
    try {
      setValueSearch(e.target.value);
      if (e.target.value) {
        onSearch(e.target.value as string);
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    } catch (error) {
    } finally {
    }
  };

  return (
    <>
      <StyledSearchLayout ref={ref} className={collapsedSearch ? "open" : ""}>
        <div className="side_container">
          {collapsedSearch && (
            <StyledSidebarHeader
              isOpen={collapsedSearch}
              onClick={() => {
                updateAppProps({ collapsedSearch: false });
                setIsVisible(false);
                onSearch("");
                setValueSearch("");
              }}
            >
              <IconCloseSidebar />
            </StyledSidebarHeader>
          )}
          <StyledContainerSearchWrapper>
            <Input
              value={valueSearch}
              onChange={(e) => onChange(e)}
              placeholder="Bạn cần tìm gì ?"
            />
          </StyledContainerSearchWrapper>
        </div>
        <StyledSidebarRight />
      </StyledSearchLayout>
      {isVisible && (
        <Menu
          style={{
            maxHeight: "500px",
            opacity: 1,
            position: "fixed",
            zIndex: 99999,
            top: "28%",
            borderRadius: "16px",
            width: "-webkit-fill-available",
            margin: "0 24px",
            overflow: "auto",
          }}
        >
          {dataSearch?.map((item: any, index: number) => (
            <Menu.Item
              key={index}
              onClick={() => {
                console.log(item.title, "item");

                navigate(item.title);
                setIsVisible(false);
              }}
            >
              <div>{item.title}</div>
            </Menu.Item>
          ))}
        </Menu>
      )}
    </>
  );
};
