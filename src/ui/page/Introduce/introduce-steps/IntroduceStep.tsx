import { styled } from "../../../../shared/styles";
// import { SliderImg } from "../function/SliderImg";
import {
  // INTRODUCE_IMG,
  INTRODUCE_PRODUCT,
} from "../../../../core/data/introduce";
import {
  StyledBtn,
  StyledCollapse,
  StyledIntroduceProd,
} from "../../../layouts/styles";
import { ProductItem } from "../../../../shared/components/ProductItem";

import { useNavigate } from "react-router-dom";
import { PATH } from "../../../../router/path";

const StyledIntroduce = styled("div", {
  ".title": {
    color: "#0A0A0A",
    fontWeight: "700",
    fontSize: "1.25em",
    textAlign: "center"
  },
  ".text-bold": {
    fontWeight: "bold",
  },
  ".introduce_footer": {
    textAlign: "center",
  },
  ".content": {
    lineHeight: "24px",
  },
});

const StyledIntroduceContent = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  marginTop: "12px",
  textAlign: "justify",
  flex: "1",
  width: "100%",
  gap: "12px",
  ".title": {
    color: "#0A0A0A",
    fontWeight: "700",
    fontSize: "1.25em",
  },
  ".content": {
    lineHeight: "24px",
    width: "100%",
    "@media (max-width: 1050px)": {
      width: "100%",
    },
  },

  ".text-bold": {
    fontWeight: "bold",
  },
});

// const StyledRightImg = styled("div", {
//   width: "50%",
//   marginTop: "12px",
//   img: {
//     height: "unset !important",
//   },
//   "@media (max-width: 1050px)": {
//     width: "100%",
//   },
// });
const StyledTitle = styled("div", {
  color: "#003366",
  fontSize: "1.6em",
  fontWeight: "700",
});

export const IntroduceStep = () => {
  const navigate = useNavigate();
  const onGoToDetailProduct = (title: string) => {
      navigate(`${PATH.product_detail}?${encodeURIComponent(title)}`);
    };
  return (
    <StyledIntroduce>
      <div className="title">GIỚI THIỆU</div>
      <StyledIntroduceContent>
        <div className="content">
          <p>
            &nbsp;&nbsp;
            <span className="text-bold">
              Công ty TNHH VN – Trọng Tuấn Chemical
            </span>{" "}
            tự hào là doanh nghiệp chuyên phân phối Hóa chất – Thiết bị từ các
            hãng nổi tiếng trên thế giới đáp ứng được nhu cầu đa dạng của khách
            hàng trên toàn quốc.
          </p>
          <p>
            &nbsp;&nbsp;Chúng tôi có số lượng xe vận tải lớn, đã dạng trọng tải
            từ xe bồn, xe tải, xe đầu kéo…, đội ngũ nhân sự là các kỹ sư, các
            chuyên gia với chuyên môn sâu và nhiều kinh nghiệm trong ngành, cam
            kết sẽ cung ứng kịp thời cho khách hàng những sản phẩm chất lượng
            cao, tiến độ giao hàng đảm bảo, giá thành hợp lý đáp ứng kịp thời
            nhu cầu của thị trường từ lĩnh vực nghiên cứu cho tới sản xuất mọi
            ngành nghề Công nghiệp– Nông nghiệp- Dược phẩm – Thực phẩm – Chăn
            nuôi.
          </p>
          <p>
            &nbsp;&nbsp;Qua nhiều năm hình thành và phát triển, bằng sự nỗ lực
            không ngừng nghỉ,{" "}
            <span className="text-bold">Trọng Tuấn Chemical</span> đã vinh dự
            trở thành đại lý chính thức các thương hiệu hóa chất lớn trong nước
            cũng như trên thế giới: BASF, DOW, Samsung, Solvay, Hanwha,
            Vitrichem, ….Đến với{" "}
            <span className="text-bold">Trọng Tuấn Chemical</span>, khách hàng
            sẽ nhận được giá trị toàn diện từ uy tín, chất lượng sản phẩm chính
            hãng của nhà sản xuất, tính pháp lý, quy trình bảo quản, tồn trữ,
            vận chuyển chuyên nghiệp, góp phần vào sự phát triển của Quý khách
            hàng.
          </p>
          <p>
            &nbsp;&nbsp;Với phương châm{" "}
            <span className="text-bold">
              “Lợi ích của khách hàng là lợi ích của chúng tôi” Trọng Tuấn
              Chemical
            </span>{" "}
            đã không ngừng mở rộng, đa dạng hoá chủng loại sản phẩm trong từng
            lĩnh vực, khai thác và cung cấp những mặt hàng chất lượng tốt nhằm
            thoả mãn mọi yêu cầu của khách hàng một cách tốt nhất. Sự tin tưởng
            và ủng hộ của quý khách hàng trong suốt thời gian qua là nguồn động
            viên lớn trên bước đường phát triển của{" "}
            <span className="text-bold">Trọng Tuấn Chemical</span>.
          </p>
        </div>
        {/* <StyledRightImg>
          <SliderImg imgs={INTRODUCE_IMG} />
        </StyledRightImg> */}
      </StyledIntroduceContent>
      <StyledTitle>Sứ mệnh</StyledTitle>
      <div className="content">
        <p>
          &nbsp;&nbsp;Với phương châm:{" "}
          <span className="text-bold">
            {" "}
            Con người là trọng tâm – Chất lượng là sứ mệnh – Thành công là điểm
            đến, Trọng Tuấn Chemical
          </span>{" "}
          mang sứ mệnh không ngừng mở rộng, đa dạng hoá chủng loại sản phẩm
          trong từng lĩnh vực, khai thác và cung cấp những mặt hàng chất lượng
          tốt nhằm thoả mãn mọi yêu cầu của khách hàng một cách tốt nhất.
        </p>
      </div>
      <StyledTitle>Tầm nhìn</StyledTitle>
      <div className="content">
        <p>
          &nbsp;&nbsp;Bằng khát vọng tiên phong, sự tin tưởng và ủng hộ của quý
          khách hàng, chúng tôi nỗ lực không ngừng nghỉ trở thành đơn vị cung
          cấp – phân phối hóa chất đa ngành hàng đầu tại Việt Nam cũng như trong
          khu vực Đông Nam Á.
        </p>
      </div>
      <StyledTitle>Giá trị cốt lõi</StyledTitle>
      <div className="content">
        <p>
          &nbsp;&nbsp;<span className="text-bold">Trọng Tuấn Chemical</span> xác
          định chặng đường phát triển luôn phải giữ vững những giá trị cốt lõi,
          tuân thủ những nền tảng về đạo đức kinh doanh{" "}
          <span className="text-bold"> Tín – Tâm – Tài : Uy Tín</span> với khách
          hàng và đối tác, đối xử<span className="text-bold"> Tận Tâm</span> với
          đồng nghiệp, khuyến khích, tạo điều kiện mài giũa, phát triển{" "}
          <span className="text-bold"> Tài năng</span>
          của mỗi cá nhân
        </p>
      </div>
      <StyledCollapse style={{ width: "unset" }}>
        SẢN PHẨM MỚI NHẤT
      </StyledCollapse>
      <StyledIntroduceProd>
        {INTRODUCE_PRODUCT.map((product) => (
          <ProductItem
            key={product.key}
            img={product.img}
            title={product.title}
            pirce={product.pirce}
            onClick={() => onGoToDetailProduct(product.title)}
          />
        ))}
      </StyledIntroduceProd>
      <div className="introduce_footer">
        <StyledBtn>Xem tất cả</StyledBtn>
      </div>
    </StyledIntroduce>
  );
};
