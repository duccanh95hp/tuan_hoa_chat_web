import { Button, Menu } from "antd";
import { styled } from "../../shared/styles";

export const StyledPageWapper = styled("div", {
  padding: "24px 15%",
  background: "white",
  "@media (max-width: 1400px)": {
    padding: "24px",
  },
  "@media (max-width: 1050px)": {
    padding: "16px",
  },
});

export const StyledTitle = styled("div", {
  display: "flex",
  justifyContent: "center",
  color: "#006db3",
  fontSize: "24px",
  fontWeight: "700",
});

export const StyledCollapse = styled("div", {
  borderLeft: "3px solid #6cbd45",
  display: "flex",
  justifyContent: "space-between",
  color: "white",
  background: "#4692c7",
  fontSize: "18px",
  width: "100%",
  padding: "12px",
  fontWeight: "600",
});

export const StyledTitleImgWapper = styled("div", { textAlign: "center" });
export const StyledTitleImg = styled("img", {});

export const StyledMenuLeftWapper = styled("div", {
  marginTop: "10px",
  display: "flex",
  flexDirection: "column",
  "@media (max-width: 800px)": {
    maxWidth: "100%",
  },
});

export const StyledMenuLeftItem = styled("div", {
  borderTop: "1px dotted #979797",
  height: "24px",
  padding: "10px 5px ",
  color: "black",
  fontSize: ".8em",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  "&:first-child": {
    border: "none",
  },
  "&:hover": {
    color: "#2980b9",
  },
  "&:active": {
    color: "#2980b9",
  },
  variants: {
    active: {
      true: {
        color: "#2980b9",
      },
      false: {
        color: "Black",
      },
    },
  },
});

export const StyledIntroduceProd = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  marginTop: "18px",
  gap: "12px",
  justifyContent: "space-between",
  alignItems: "center",
});

export const StyledBtn = styled(Button, {
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

export const MenuSidebar = styled("div", {
  padding: "0 15%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#2980b9 !important",
  ".ant-menu-overflow": {
    width: "100%",
    fontSize: "15px",
    background: "#2980b9 !important",
    fontWeight: "500",
    color: "white",
    ".ant-menu": {
      border: "none !important",
    },
    ".ant-menu-title-content": {
      color: "white !important",
    },
    ".ant-menu-title-content:hover": {
      color: "#fff400 !important",
    },
    ".ant-menu-item-selected::after": {
      borderBottomColor: "#1190e4 !important",
    },
    ".ant-menu-item:hover::after": {
      borderBottomColor: "#1190e4 !important",
    },
    ".ant-menu-submenu": {
      backgroundColor: "#1190e4 !important",
      ".ant-menu-title-content": {
        color: "white !important",
      },
    },
    ".ant-menu-item-selected": {
      ".ant-menu-title-content": {
        color: "#fff400 !important",
      },
    },
    ".ant-menu-submenu-selected": {
      backgroundColor: "#1190e4 !important",
      color: "white !important",
    },
    ".ant-menu-submenu-selected::after": {
      borderBottomColor: "#1190e4 !important",
    },
  },
  "@media (max-width: 1400px)": {
    padding: "0 24px",
  },
  "@media (max-width: 1050px)": {
    padding: "0 24px",
    background: "white !important",
    alignItems: "start",
  },
});

export const StyledMenuAntdLeft = styled("div", {
  ".ant-menu": {
    border: "1px dotted #34469d !important",
    borderRadius: "0 0 5px 5px",
    borderTop: "none !important",
    ".ant-menu-item": {
      fontSize: "14px",
      fontWeight: "600",
      paddingLeft: "12px !important",
      borderTop: "1px dotted #34469d !important",
      borderRadius: "unset",
      "&:hover": {
        color: "#2980b9 !important",
        background: "unset !important",
      },
      // color: "#2980b9",
      "&:first-child": {
        borderTop: "unset !important",
      },
    },
    ".ant-menu-item-selected": {
      color: "#2980b9",
      background: "unset",
    },
    ".ant-menu-submenu-selected": {
      ".ant-menu-submenu-title": {
        color: "#2980b9",
      },
    },
    ".ant-menu-submenu-title": {
      fontSize: "14px",
      fontWeight: "600",
      borderTop: "1px dotted #34469d !important",
      paddingLeft: "12px !important",
      borderRadius: "unset",
      "&:hover": {
        color: "#2980b9 !important",
        background: "unset !important",
      },
    },
  },
  ".ant-menu-sub": {
    borderBottom: "unset !important",
  },
});
