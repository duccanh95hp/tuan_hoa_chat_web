import { useAppProvider } from "../../../shared/contexts/AppProvider";
import { useRouter } from "../../../shared/hooks/useRouter";
import { keyframes, styled } from "../../../shared/styles";
import { UnorderedListOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import useClickOutside from "../../../shared/hooks/useClickOutside";
import { useEffect, useRef, useState } from "react";
import { MenuSidebar } from "../styles";
import { IconCloseSidebar } from "../../../shared/assets/icons/IconCloseSidebar";

const StyledSidebar = styled("div", {
  height: "100%",
  width: "100%",
  position: "fixed",
  zIndex: 100,
  top: 0,
  left: 0,
  display: "flex",
  boxShadow: "0px 0px 3px 0px #cdcdcd",
  transform: "translateX(-100%)",
  transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
  "&.open": {
    transform: "translateX(0)",
  },
  ".side_container": {
    width: "40%",
    height: "100%",
    background: "white",
    padding: "38px 0px",
    opacity: "1",
    "@media (max-width: 765px)": {
      width: "100%",
    },
    ".menu_sidebar": {
      overflowY: "auto",
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

export type MenuItem = Required<MenuProps>["items"][number];

export const MenuList: MenuItem[] = [
  {
    key: "0",
    title: "/san-pham",
    label: "DANH MỤC SẢN PHẨM",
    icon: <UnorderedListOutlined style={{ color: "white" }} />,
    children: [
      { key: "/san-pham?hoa-chat-xu-ly-nuoc", label: "Hóa Chất Xử Lý Nước" },
      {
        key: "/san-pham?hoa-chat-co-ban",
        label: "Hóa Chất Cơ Bản",
        children: [
          {
            key: "/san-pham?hoa-chat-det-nhom",
            label: "Hóa Chất Ngành Dệt Nhuộm",
          },
          { key: "/san-pham?hoa-chat-xi-ma", label: "Hóa Chất Ngành Xi Mạ" },
          {
            key: "/san-pham?hoa-chat-khai-khoang",
            label: "Hóa Chất Ngành Khai Khoáng",
          },
          {
            key: "/san-pham?hoa-chat-da-giay",
            label: "Hóa Chất Ngành Da Giày",
          },
          { key: "/san-pham?hoa-chat-giay", label: "Hóa Chất Ngành Giấy" },
          {
            key: "/san-pham?hoa-chat-thuc-pham",
            label: "Hóa Chất Ngành Thực Phẩm",
          },
          {
            key: "/san-pham?hoa-chat-thuc-an-chan-nuoi",
            label: "Hóa Chất Ngành Thức Ăn Chăn Nuôi",
          },
          {
            key: "/san-pham?hoa-chat-my-pham",
            label: "Hóa Chất Ngành Dược - Mỹ Phẩm",
          },
          { key: "/san-pham?hoa-chat-son", label: "Hóa Chất Ngành Sơn" },
          {
            key: "/san-pham?hoa-chat-dien-tu",
            label: "Hóa Chất Ngành Điện Tử",
          },
          {
            key: "/san-pham?hoa-chat-tay-rua",
            label: "Hóa Chất Ngành Tẩy Rửa",
          },
        ],
      },
      { key: "/san-pham?dung-moi-cong-nghiep", label: "Dung Môi Công Nghiệp" },
      {
        key: "/san-pham?hoa-chat-thi-nghiem",
        label: "Hóa Chất Thí Nghiệm",
        children: [
          {
            key: "/san-pham?chat-chuan",
            label: "Chất Chuẩn",
          },
          { key: "/san-pham?dung-moi", label: "Dung Môi" },
          {
            key: "/san-pham?acid-bazo",
            label: "Acid và Bazo",
          },
          {
            key: "/san-pham?muoi",
            label: "Muối",
          },
          { key: "/san-pham?chi-thi", label: "Chỉ Thị" },
          {
            key: "/san-pham?thuoc-thu",
            label: "Thuốc Thử",
          },
        ],
      },
      {
        key: "/san-pham?vat-tu-va-thiet-bi-cong-nghiep",
        label: "Vật Tư Và Thiết Bị Công Nghiệp",
        children: [
          {
            key: "/san-pham?vat-tu-xu-ly-nuoc",
            label: "Vật tư xử lý nước",
          },
        ],
      },
      {
        key: "/san-pham?thiet-bi-phong-thi-nghiem",
        label: "Thiết Bị Phòng Thí Nghiệm",
      },
    ],
  },
  { key: "/", label: "TRANG CHỦ" },
  { key: "/gioi-thieu", label: "GIỚI THIỆU" },
  { key: "/thu-vien", label: "THƯ VIỆN" },
  { key: "/tuyen-dung", label: "TUYỂN DỤNG" },
  { key: "/tin-tuc", label: "TIN TỨC" },
  { key: "/lien-he", label: "LIÊN HỆ" },
];

export const Sidebar = () => {
  const ref = useRef(null);
  const { collapsed, updateAppProps } = useAppProvider();
  const { navigate, location, search } = useRouter();

  const onChangePage = (e: any) => {
    navigate(e.key);
    if (collapsed) {
      updateAppProps({ collapsed: false });
    }
  };

  useClickOutside(ref, () => {
    if (collapsed) {
      updateAppProps({ collapsed: false });
    }
  });

  const { pathname } = location;
  const [defaultPath, setDefaultPath] = useState<string>(pathname);

  useEffect(() => {
    if (pathname) {
      if (search) {
        setDefaultPath(`${pathname}${search}`);
      } else {
        setDefaultPath(pathname);
      }
    }
  }, [pathname, search]);

  return (
    <StyledSidebar ref={ref} className={collapsed ? "open" : ""}>
      <div className="side_container">
        {collapsed && (
          <StyledSidebarHeader
            isOpen={collapsed}
            onClick={() => updateAppProps({ collapsed: false })}
          >
            <IconCloseSidebar />
          </StyledSidebarHeader>
        )}
        <MenuSidebar className="menu_sidebar">
          <Menu
            mode="inline"
            theme="light"
            defaultSelectedKeys={[defaultPath]}
            selectedKeys={[defaultPath]}
            items={MenuList}
            onClick={onChangePage}
          />
        </MenuSidebar>
      </div>
      <StyledSidebarRight />
    </StyledSidebar>
  );
};
