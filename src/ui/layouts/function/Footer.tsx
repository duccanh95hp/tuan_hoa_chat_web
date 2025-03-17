import { FOOTER } from "../../../core/data/footer";
import { styled } from "../../../shared/styles";
import ImgLogo from "../../../shared/assets/icons/logohoachat.png";
import {
  AddressIcon,
  EmailIcon,
  PhoneIcon,
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
    "@media (max-width: 1450px)": {
      padding: "24px 5%",
    },
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
  alignItems: "center", // Căn giữa theo chiều dọc
  justifyContent: "center", // Căn giữa theo chiều ngang
  padding: "24px",
  flexWrap: "wrap",
  fontWeight: "normal",
  fontSize: "15px",
  fontFamily: "sans-serif",
  textAlign: "center", // Căn giữa nội dung văn bản
  
  "@media (max-width: 1050px)": {
    flexDirection: "column", // Xếp dọc trên màn hình nhỏ
  },

  img: {
    width: "120px",
    maxWidth: "150px",
    objectFit: "contain",
    marginRight: "20px", // Khoảng cách giữa logo và text
  },

  ".info-container": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Căn tất cả nội dung về lề trái
    gap: "8px",
    marginLeft: "100px",
    fontWeight: 600,
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
        {/* <div>
          GPDKKD: {FOOTER.city_business_registration_number} do{" "}
          {FOOTER.city_business_registration_place_of_issue} cấp ngày{" "}
          {FOOTER.city_business_registration_date_of_issue}.
        </div>
        <div>
          {FOOTER.city_name} được cấp phép đủ điều kiện kinh doanh hóa chất,
          kinh doanh có điều kiện trong lĩnh vực công nghiệp theo chứng nhận số{" "}
          {FOOTER.city_certification} cấp ngày{" "}
          {FOOTER.city_certification_date_of_issue}.
        </div> */}
        <div>
          Chúng tôi cam kết đem đến những sản phẩm CHẤT LƯỢNG - CHÍNH HÃNG - HỒ
          SƠ ĐẦY ĐỦ - GIAO HÀNG NHANH CHÓNG - với mức giá TỐT NHẤT - trên thị
          trường.
        </div>
        <StyledFooterBranch>
          <img src={ImgLogo} alt="logo" />
          <div className="info-container">
            <div className="div">
                <AddressIcon /> <span className="heading_tilte"> VPGD: </span>
                Thị trấn Tiên Lãng, Huyện Tiên Lãng , Thành Phố Hải Phòng
                </div>
            <div className="text-line">
                <PhoneIcon /> <span className="heading_tilte">Hotline:</span>{" "}
                0941795869
              </div>
              <div className="text-line">
                <EmailIcon /> <span className="heading_tilte"> Email:</span>{" "}
                hoachattrongtuan@gmail.com
              </div>
          </div>
          
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
