import { styled } from "../../../shared/styles";
import { ProductSmailItem } from "../../layouts/function/ProductSmailItem";
import Background from "../../../shared/assets/img-home/bannerhoachat1.png";
import { StyledCollapse, StyledPageWapper } from "../../layouts/styles";
import { HOME_SERVICE, NEWS, STATISTICAL } from "../../../core/data/home";
import ImgIntroview from "../../../shared/assets/img-home/back_switcher-1.jpg";
import CountUp from "../../../shared/utils/CountNumberUp";
import SliderComponents from "../../../shared/components/Slider";
import { HeadingPage } from "../../layouts/function/HeadingPage";

const StyledBackground = styled("div", {
  color: "black",
  width: "100vw",
  img: {
    objectFit: "cover",
    width: "100%",
  },
});

const StyledProductsSmall = styled("div", {
  padding: "24px 0",
  display: "flex",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  gap: "10px 0px",
  "@media (max-width: 1050px  )": {
    justifyContent: "space-evenly",
  },
});

const StyledIntroview = styled("div", {
  background: `url(${ImgIntroview})`,
  backgroundSize: "cover !important",
  display: "flex",
  justifyContent: "space-between",
  padding: "24px 15%",
  gap: "12px",
  flexWrap: "wrap",
  "@media (max-width: 765px)": {
    padding: "10px 5%",
  },
  ".introview_item": {
    flex: "1",
    width: "500px",
    "@media (max-width: 1050px  )": {
      flex: "auto",
    },
    ".title": {
      fontSize: "18px",
      textAlign: "center",
      color: "#006db3",
      fontWeight: "700",
      padding: "10px 0 22px",
    },
    ".content": {
      textAlign: "justify",
      padding: "12px",
      border: "1px dashed #006db3",
      borderRadius: "5px",
      lineHeight: "27px",
    },
    ".introview_statistical": {
      display: "flex",
      with: "100%",
      flexWrap: "wrap",
      ".introview_statistical_width": {
        width: "50%",
        "@media (max-width: 756px)": {
          width: "100%",
        },
        ".introview_statistical_item": {
          padding: "20px",
          margin: "4px",
          boxShadow: " 1px 1px 5px -2px #0000003d",
          display: "flex",
          background: "white",
          alignItems: "center",
          flexWrap: "wrap",

          img: {
            width: "50px",
          },
          ".count": {
            color: "red",
            fontSize: "46px",
            fontWeight: "700",
            transition: "all 0.3s ease-in-out",
          },
          ".title": {
            fontSize: "14px",
            color: "#0A0A0A",
            ".font": {
              fontSize: "14px !important",
            },
          },
        },
      },
    },
  },
});

const StyledWapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  padding: "24px 15%",
  gap: "12px",
  flexWrap: "wrap",
  background: "white",
  "@media (max-width: 1050px)": {
    padding: "5%",
  },
});

const Home = () => {
  return (
    <>
      <StyledBackground>
        <img src={Background} />
      </StyledBackground>
      <StyledPageWapper>
        <HeadingPage title="DỊCH VỤ CỦA CHÚNG TÔI" />
        <StyledProductsSmall>
          {HOME_SERVICE?.map((res: any, index: number) => (
            <ProductSmailItem
              key={index}
              index={index}
              title={res.title}
              img={res.img}
              content={res.content}
              smallImg={res.smallImg}
            />
          ))}
        </StyledProductsSmall>
      </StyledPageWapper>
      <StyledIntroview>
        <div className="introview_item">
          <div className="title">
            <HeadingPage style={{ fontSize: "18px" }} title="VỀ CHÚNG TÔI" />
          </div>

          <div className="content">
            <div>
              Công ty TNHH VNHACO – tự hào là doanh nghiệp chuyên phân phối Hóa
              chất – Thiết bị từ các hãng nổi tiếng trên thế giới đáp ứng được
              nhu cầu đa dạng của khách hàng trên toàn Quốc. Chúng tôi có số
              lượng xe vận tải lớn, đã dạng trọng tải từ xe bồn, xe tải, xe đầu
              kéo…, đội ngũ nhân sự là các kỹ sư, các chuyên gia với chuyên môn
              sâu và nhiều kinh nghiệm trong ngành, cam kết sẽ cung ứng kịp thời
              cho khách hàng những sản phẩm chất lượng cao, tiến độ giao hàng
              đảm bảo, giá thành…
            </div>
            <div>
              Với phương châm “Lợi ích của khách hàng là lợi ích của chúng tôi”
              đã không ngừng mở rộng, đa dạng hoá chủng loại sản phẩm trong từng
              lĩnh vực, khai thác và cung cấp những mặt hàng chất lượng tốt nhằm
              thoả mãn mọi yêu cầu của khách hàng. Sự tin tưởng và ủng hộ của
              khách hàng trong suốt thời gian qua là nguồn động viên lớn trên
              bước đường phát triển […]
            </div>
          </div>
        </div>
        <div className="introview_item">
          <div className="title">
            <HeadingPage style={{ fontSize: "18px" }} title="THỐNG KÊ" />
          </div>
          <div className="introview_statistical">
            {STATISTICAL.map((item) => (
              <div className="introview_statistical_width" key={item.title}>
                <div className="introview_statistical_item">
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={item.icon}
                    alt=""
                  />
                  <div style={{ paddingLeft: "12px" }}>
                    <div className="count">
                      <CountUp end={item.count} />
                    </div>
                    <div className="title">{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </StyledIntroview>
      <StyledWapper>
        <StyledCollapse>
          <div>TIN TỨC</div>
          <div>Xem thêm</div>
        </StyledCollapse>
        <SliderComponents sliders={NEWS} />
      </StyledWapper>
      <StyledWapper>
        <StyledCollapse>
          <div>ĐỐI TÁC CỦA CHÚNG TÔI</div>
          <div>Xem thêm</div>
        </StyledCollapse>
        <SliderComponents sliders={NEWS} />
      </StyledWapper>
    </>
  );
};

export default Home;
