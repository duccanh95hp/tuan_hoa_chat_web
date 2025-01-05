import { FOOTER } from "../../../core/data/footer";
import { styled } from "../../../shared/styles";
import ImgLogo from "../../../shared/assets/icons/logohoachat.png";
import {
  AddressIcon,
  EmailIcon,
  PhoneIcon,
  WareHouse,
} from "../../../shared/assets/icons";
const StyledFooterWapper = styled("div", {
  background: "rgb(238, 238, 238)",
  color: "black",
  textAlign: "center",
  fontFamily: "times new roman",
  fontWeight: "700",
  lineHeight: "28px",
  ".footer_wapper": {
    padding: "24px 10%",
    fontFamily: "times new roman",
    color: "#1f2a37",
  },
  ".copy_right": {
    color: "white",
    background: "#4692c7",
    height: "48px",
    fontWeight: "500",
    fontSize: "14px",
    fontFamily: "sans-serif",
    span: {
      padding: "0 8px",
      fontWeight: "700",
    },
  },
});

const StyledFooterBranch = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  padding: "24px",
  flexWrap: "wrap",
  textAlign: "start",
  fontWeight: "normal",
  fontSize: "15px",
  gap: "12px",
  fontFamily: "sans-serif",
  "@media (max-width: 1050px)": {
    padding: "unset",
  },
  "@media (max-width: 765px)": {
    padding: "unset",
  },
  img: {
    width: "12%",
    maxWidth: "25%",
    objectFit: "cover",
    "@media (max-width: 1450px)": {
      width: "22%",
    },
    "@media (max-width: 1050px)": {
      width: "45%",
    },
    "@media (max-width: 765px)": {
      maxWidth: "100%",
      width: "100%",
    },
  },
});

const StyledFooterBranchItem = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "22%",
  a: {
    textDecoration: "none",
    color: "black",
    fontSize: "15px",
    "&:hover": {
      color: "#006db3",
    },
  },
  "@media (max-width: 1050px)": {
    width: "45%",
  },
  "@media (max-width: 765px)": {
    width: "100%",
  },
  ".branch_name": {
    color: "#2f5aae !important",
    fontWeight: "600",
    fontSize: "24px",
    padding: "24px 0",
  },
  ".heading_tilte": {
    color: "#6A7B7F",
  },
  ".text-line": {
    marginTop: "-5px",
  },
});

export const Footer = () => {
  return (
    <StyledFooterWapper>
      <div className="footer_wapper">
        <div>
          {FOOTER.city} - {FOOTER.city_name}
        </div>
        <div>
          GPDKKD: {FOOTER.city_business_registration_number} do{" "}
          {FOOTER.city_business_registration_place_of_issue} cấp ngày{" "}
          {FOOTER.city_business_registration_date_of_issue}.
        </div>
        <div>
          {FOOTER.city_name} được cấp phép đủ điều kiện kinh doanh hóa chất,
          kinh doanh có điều kiện trong lĩnh vực công nghiệp theo chứng nhận số{" "}
          {FOOTER.city_certification} cấp ngày{" "}
          {FOOTER.city_certification_date_of_issue}.
        </div>
        <div>
          Chúng tôi cam kết đem đến những sản phẩm CHẤT LƯỢNG - CHÍNH HÃNG - HỒ
          SƠ ĐẦY ĐỦ - GIAO HÀNG NHANH CHÓNG - với mức giá TỐT NHẤT - trên thị
          trường.
        </div>
        <StyledFooterBranch>
          <img src={ImgLogo} alt="logo" />
          {FOOTER.branch.map((branch) => (
            <StyledFooterBranchItem key={branch.name}>
              <div className="branch_name">{branch.name}</div>
              <a
                className="text-line"
                href={branch.gg_map_address}
                target="_blank"
                rel="noreferrer"
              >
                <AddressIcon /> <span className="heading_tilte"> VPGD: </span>
                {branch.address}
              </a>
              <a
                className="text-line"
                href={branch.gg_map_warehouse_address}
                target="_blank"
                rel="noreferrer"
              >
                <WareHouse /> <span className="heading_tilte">Kho: </span>
                {branch.warehouse_address}
              </a>
              <div className="text-line">
                <PhoneIcon /> <span className="heading_tilte">Hotline:</span>{" "}
                {branch.hotline}
              </div>
              <div className="text-line">
                <EmailIcon /> <span className="heading_tilte"> Email:</span>{" "}
                {branch.email}
              </div>
            </StyledFooterBranchItem>
          ))}
        </StyledFooterBranch>
      </div>

      <div className="copy_right">
        <p style={{ padding: "10px", background: "#4692c7" }}>
          Copyright 2025 © <span> {FOOTER.copy_right}</span>
        </p>
      </div>
    </StyledFooterWapper>
  );
};
