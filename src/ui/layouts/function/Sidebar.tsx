import { useAppProvider } from "../../../shared/contexts/AppProvider";
import { useRouter } from "../../../shared/hooks/useRouter";
import { keyframes, styled } from "../../../shared/styles";
import { UnorderedListOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import useClickOutside from "../../../shared/hooks/useClickOutside";
import { useRef } from "react";
import { MenuSidebar } from "../styles";
import { IconCloseSidebar } from "../../../shared/assets/icons/IconCloseSidebar";

const StyledSidebar = styled("div", {
  height: "100%",
  width: "100%",
  position: "fixed",
  background: "white",
  zIndex: 100,
  top: 0,
  boxShadow: "0px 0px 3px 0px #cdcdcd",
  padding: "38px 0px",
  transform: "translateX(-100%)", // Initial off-screen position
  transition: "transform 0.3s ease-in-out", // Smooth slide effect
  "&.open": {
    transform: "translateX(0)", // Slide into view
  },
  ".menu_sidebar": {
    marginTop: "12px",
    ".ant-menu": {
      border: "none !important",
    },
    ".ant-menu-submenu-title": {
      background: "#fa6e4f !important",
      color: "white",
    },
  },
});

const moveAnimation = keyframes({
  "0%": { top: "30px" },
  "100%": { top: "12px" },
});

// Styled component cho Sidebar Header
const StyledSidebarHeader = styled("div", {
  position: "absolute",
  top: "12px",
  right: "12px",
  animation: `${moveAnimation} 1s 1`,
  animationDelay: "1s",
});

type MenuItem = Required<MenuProps>["items"][number];

export const MenuList: MenuItem[] = [
  {
    key: "0",
    title: "/san-pham",
    label: "DANH MỤC SẢN PHẨM",
    icon: <UnorderedListOutlined style={{ color: "white" }} />,
    children: [
      { key: "/san-pham/hoa-chat-xu-ly-nuoc", label: "HÓA CHẤT XỬ LÝ NƯỚC" },
      {
        key: "/san-pham/hoa-chat-co-ban",
        label: "HÓA CHẤT CƠ BẢN",
        children: [
          {
            key: "/san-pham/hoa-chat-det-nhom",
            label: "Hóa Chất Ngành Dệt Nhộm",
          },
          { key: "/san-pham/hoa-chat-xi-ma", label: "Hóa Chất Ngành Xi Mạ" },
          {
            key: "/san-pham/hoa-chat-khai-khoang",
            label: "Hóa Chất Ngành Khai Khoáng",
          },
          {
            key: "/san-pham/hoa-chat-da-giay",
            label: "Hóa Chất Ngành Da Giày",
          },
          { key: "/san-pham/hoa-chat-giay", label: "Hóa Chất Ngành Giấy" },
          {
            key: "/san-pham/hoa-chat-thuc-pham",
            label: "Hóa Chất Ngành Thực Phẩm",
          },
          {
            key: "/san-pham/hoa-chat-thuc-an-chan-nuoi",
            label: "Hóa Chất Ngành Thức Ăn Chăn Nuôi",
          },
          {
            key: "/san-pham/hoa-chat-my-pham",
            label: "Hóa Chất Ngành Dược - Mỹ Phẩm",
          },
          { key: "/san-pham/hoa-chat-son", label: "Hóa Chất Ngành Sơn" },
          {
            key: "/san-pham/hoa-chat-dien-tu",
            label: "Hóa Chất Ngành Điện Tử",
          },
          {
            key: "/san-pham/hoa-chat-tay-rua",
            label: "Hóa Chất Ngành Tẩy Rửa",
          },
        ],
      },
      { key: "/san-pham/dung-moi-cong-nghiep", label: "DUNG MÔI CÔNG NGHIỆP" },
      { key: "/san-pham/hoa-chat-thi-nghiem", label: "HÓA CHẤT THÍ NGHIỆM" },
      {
        key: "/san-pham/vat-tu-va-thiet-bi-cong-nghiep",
        label: "VẬT TƯ VÀ THIẾT BỊ CÔNG NGHIỆP",
      },
      {
        key: "/san-pham/thiet-bi-phong-thi-nghiem",
        label: "THIẾT BỊ PHÒNG THÍ NGHIỆM",
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
  const { navigate } = useRouter();

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

  return (
    <StyledSidebar ref={ref} className={collapsed ? "open" : ""}>
      <StyledSidebarHeader onClick={() => updateAppProps({ collapsed: false })}>
        <IconCloseSidebar />
      </StyledSidebarHeader>
      <MenuSidebar className="menu_sidebar">
        <Menu
          mode="inline"
          theme="light"
          defaultSelectedKeys={["/"]}
          items={MenuList}
          onClick={onChangePage}
        />
      </MenuSidebar>
    </StyledSidebar>
  );
};
