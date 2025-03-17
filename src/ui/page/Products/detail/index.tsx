import { Breadcrumb, Tabs } from "antd";
import { styled } from "../../../../shared/styles";
import { StyledCollapse, StyledPageWapper } from "../../../layouts/styles";
import { useRouter } from "../../../../shared/hooks/useRouter";
import { PRODUCT_TYPE_3 } from "../../../../core/data/product-type3";
import { PRODUCT_TYPE_1 } from "../../../../core/data/product-type1";
import { PRODUCT_TYPE_5 } from "../../../../core/data/product-type5";
import { PRODUCT_TYPE_6 } from "../../../../core/data/product-type6";
import ImgSupport from "../../../../shared/assets/icons/support.png";
import ImgIcon1 from "../../../../shared/assets/icons/icon-1-1.png";
import ImgIcon2 from "../../../../shared/assets/icons/icon-2-1.png";
import ImgIcon3 from "../../../../shared/assets/icons/icon-3-1.png";
import { useEffect, useRef, useState } from "react";
import { INTRODUCE_LEFT_PRODUCT } from "../../../../core/data/introduce";
import { ProductItemSmall } from "../../../../shared/components/ProductItem";
import { PRODUCT_TYPE_4 } from "../../../../core/data/product-type4";
import { TEXTILE_DYEING } from "../../../../core/data/product-type2";

const StyledProductDetail = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "24px",
  gap: "24px",
  "@media (max-width: 765px)": {
    flexWrap: "wrap",
  },
});

const StyledProductInfo = styled("div", {
  width: "100%",
  ".info": {
    display: "flex",
    gap: "24px",
    width: "100%",
    "@media (max-width: 765px)": {
      flexWrap: "wrap",
    },
    ".img-info": {
      width: "100%",
      img: {
        width: "100%",
        maxWidth: "100%",
        objectFit: "cover",
      },
    },
    ".info-basic": {
      width: "100%",
      ".title": {
        fontSize: "18px",
        fontWeight: "bold",
      },
      ".price": {
        marginTop: "12px",
        fontWeight: "500",
        color: "red",
      },
      ".content": {
        marginTop: "12px",
      },
    },
  },
});

const StyledProductSupport = styled("div", {
  maxWidth: "300px",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  "@media (max-width: 765px)": {
    maxWidth: "100%",
  },
  ".delivery": {
    border: "1px dashed  #f78a06",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    padding: "8px 14px",
    gap: "14px",
    ".content": {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      ".title": {
        color: "black",
        fontWeight: "bold",
      },
    },
  },
});

const StyledIframeInfor = styled("div", {
  iframe: {
    border: "none",
    width: "100%",
  },
});

const StyledSupported = styled("div", {
  marginTop: '14px',
  background: "#FFF1DD",
  border: "1px dotted red",
  borderRadius: "0 0 6px 6px",
  ".title": { fontWeight: "bold", padding: "10px", color: "red" },
  ".phone": { fontWeight: "bold", padding: "0 10px", fontSize: "18px" },
  ".content": { padding: "0 10px 10px 10px" },
});

const StyledBtn = styled("div", {
  cursor: "pointer",
  color: "white",
  fontWeight: "bold",
  background: "-webkit-linear-gradient(top, #f59000, #fd6e1d)",
  textAlign: "center",
  padding: "14px",
  borderRadius: "6px",
  ".content_btn": {
    fontWeight: "normal",
  },
});

const ProductDetail = () => {
  const { search } = useRouter();
  const defaultDataProduct: any[] = [
    ...PRODUCT_TYPE_1,
    ...PRODUCT_TYPE_3,
    ...PRODUCT_TYPE_4,
    ...PRODUCT_TYPE_5,
    ...PRODUCT_TYPE_6,
    ...TEXTILE_DYEING,
  ];

  const dataDetail = defaultDataProduct.find(
    (data) => data.title === decodeURIComponent(search).slice(1)
  );

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const iframeRefBottom = useRef<HTMLIFrameElement | null>(null);
  const iframeRefAdvanced = useRef<HTMLIFrameElement | null>(null);

  const [newHeight, setNewHeight] = useState<string>("");
  const [newHeightBottom, setNewHeightBottom] = useState<string>("");
  const [newHeightAdvanced, setNewHeightAdvanced] = useState<string>("");
  useEffect(() => {
    const iframe = iframeRef.current;
    const adjustIframeSize = () => {
      if (iframe && iframe.contentDocument) {
        const iframeDocument = iframe.contentDocument;
        iframeDocument.body.style.overflow = "hidden";
        iframeDocument.body.style.lineHeight = "26px";
        iframeDocument.body.style.fontFamily = "Google Sans";
        const tableElement = iframeDocument.querySelector("table");
        if (tableElement) {
          tableElement.style.width = "100%";
          const trElements = iframeDocument.querySelectorAll("tr");
          const tdElements = iframeDocument.querySelectorAll("td");
          if (trElements) {
            tdElements.forEach((tdElement) => {
              tdElement.style.width = "max-content";
              tdElement.style.borderTop = "1px solid #ececec";
            });
          }
        }
        const imgElement = iframeDocument.querySelectorAll("img");
        if (imgElement) {
          imgElement.forEach((imgElement) => {
            imgElement.style.width = "100vw";
            imgElement.style.objectFit = "cover";
          });
        }
        const postedInElement = iframeDocument.querySelector("a");
        if (postedInElement) {
          postedInElement.innerHTML = postedInElement.innerText;
        }
        iframe.style.height = iframeDocument.body.scrollHeight + 50 + "px";
        setNewHeight(iframe.style.height);
      }
    };
    iframe?.addEventListener("load", adjustIframeSize);
    return () => {
      iframe?.removeEventListener("load", adjustIframeSize);
    };
  }, [dataDetail?.data]);

  useEffect(() => {
    const iframe = iframeRefBottom.current;
    const adjustIframeSize = () => {
      if (iframe && iframe.contentDocument) {
        const iframeDocument = iframe.contentDocument;
        iframeDocument.body.style.overflow = "hidden";
        iframeDocument.body.style.lineHeight = "26px";
        iframeDocument.body.style.fontFamily = "Google Sans";
        const tableElement = iframeDocument.querySelector("table");
        if (tableElement) {
          tableElement.style.width = "100%";
          const trElements = iframeDocument.querySelectorAll("tr");
          const tdElements = iframeDocument.querySelectorAll("td");
          if (trElements) {
            tdElements.forEach((tdElement) => {
              tdElement.style.width = "max-content";
              tdElement.style.borderTop = "1px solid #ececec";
            });
          }
        }
        const imgElement = iframeDocument.querySelectorAll("img");
        if (imgElement) {
          imgElement.forEach((imgElement) => {
            imgElement.style.width = "100vw";
            imgElement.style.objectFit = "cover";
          });
        }
        const postedInElement = iframeDocument.querySelector("a");
        if (postedInElement) {
          postedInElement.innerHTML = postedInElement.innerText;
        }
        iframe.style.height = iframeDocument.body.scrollHeight + 50 + "px";
        setNewHeightBottom(iframe.style.height);
      }
    };
    iframe?.addEventListener("load", adjustIframeSize);
    return () => {
      iframe?.removeEventListener("load", adjustIframeSize);
    };
  }, [dataDetail?.data]);

  useEffect(() => {
    const iframe = iframeRefAdvanced.current;
    const adjustIframeSize = () => {
      if (iframe && iframe.contentDocument) {
        const iframeDocument = iframe.contentDocument;
        iframeDocument.body.style.overflow = "hidden";
        iframeDocument.body.style.lineHeight = "26px";
        iframeDocument.body.style.fontFamily = "Google Sans";
        const tableElement = iframeDocument.querySelector("table");
        if (tableElement) {
          tableElement.style.width = "100%";
          const trElements = iframeDocument.querySelectorAll("tr");
          const tdElements = iframeDocument.querySelectorAll("td");
          if (trElements) {
            tdElements.forEach((tdElement) => {
              tdElement.style.width = "max-content";
              tdElement.style.borderTop = "1px solid #ececec";
            });
          }
        }
        const imgElement = iframeDocument.querySelectorAll("img");
        if (imgElement) {
          imgElement.forEach((imgElement) => {
            imgElement.style.width = "100vw";
            imgElement.style.objectFit = "cover";
          });
        }
        const postedInElements = iframeDocument.querySelectorAll("a");
        if (postedInElements) {
          postedInElements.forEach((postedInElement) => {
            postedInElement.innerHTML = postedInElement.innerText;
          });
        }
        iframe.style.height = iframeDocument.body.scrollHeight + 50 + "px";
        setNewHeightAdvanced(iframe.style.height);
      }
    };
    iframe?.addEventListener("load", adjustIframeSize);
    return () => {
      iframe?.removeEventListener("load", adjustIframeSize);
    };
  }, [dataDetail?.data]);

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <StyledPageWapper>
      <Breadcrumb
        items={[
          {
            title: "TRANG CHỦ",
          },
          {
            title: "SẢN PHẨM",
          },
          {
            title: dataDetail.title,
          },
        ]}
      />
      <StyledProductDetail>
        <StyledProductInfo>
          <div className="info">
            <div className="img-info">
              <img src={dataDetail.img} alt="" />
            </div>
            <div className="info-basic">
              <div className="title">{dataDetail.title}</div>
              <div className="price">Giá: Liên hệ</div>
              <StyledIframeInfor css={{ height: newHeight }}>
                {dataDetail.data_info && (
                  <iframe
                    title={dataDetail.title}
                    ref={iframeRef}
                    srcDoc={dataDetail.data_info}
                  />
                )}
              </StyledIframeInfor>
              <StyledSupported>
                <div className="title">Hỗ Trợ Trực Tuyến</div>
                <div className="phone">094.1795.869</div>
                <div className="content">(Mở cả thứ bảy và chủ nhật)</div>
                <StyledBtn>
                  MUA NGAY
                  <div className="content_btn">
                    Gọi điện xác nhận và giao hàng tận nơi
                  </div>
                </StyledBtn>
              </StyledSupported>
              <StyledIframeInfor css={{ height: newHeightBottom }}>
                {dataDetail.data_info_bottom && (
                  <iframe
                    title={dataDetail.title}
                    ref={iframeRefBottom}
                    srcDoc={dataDetail.data_info_bottom}
                  />
                )}
              </StyledIframeInfor>
            </div>
          </div>
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                key: "1",
                label: "MÔ TẢ CHI TIẾT SẢN PHẨM",
                children: dataDetail.data_advanced ? (
                  <StyledIframeInfor css={{ height: newHeightAdvanced }}>
                    <iframe
                      ref={iframeRefAdvanced}
                      srcDoc={dataDetail.data_advanced}
                      title="mô ta chi tiết"
                    />
                  </StyledIframeInfor>
                ) : (
                  "...Đang cập nhật"
                ),
              },
              {
                key: "2",
                label: "ĐÁNH GIÁ",
                children: "...Đang cập nhật",
              },
            ]}
            onChange={onChange}
          />
        </StyledProductInfo>
        <StyledProductSupport>
          <img src={ImgSupport} alt={dataDetail.title} />
          <div className="delivery">
            <img src={ImgIcon1} alt={dataDetail.title} />
            <div className="content">
              <div className="title">Giao hàng nhanh</div>
              <div className="value">Giao hàng trên toàn quốc</div>
            </div>
          </div>
          <div className="delivery">
            <img src={ImgIcon2} alt={dataDetail.title} />
            <div className="content">
              <div className="title">Giá cả hợp lý</div>
              <div className="value">Hồ sơ hàng hóa đầy đủ</div>
            </div>
          </div>
          <div className="delivery">
            <img src={ImgIcon3} alt={dataDetail.title} />
            <div className="content">
              <div className="title">Sản phẩm chính hãng</div>
              <div className="value">Hỗ trợ kỹ thuật</div>
            </div>
          </div>
          <div className="delivery">
            Sản phẩm đang sẵn có tại Công Ty TNHH Trọng Tuấn Liên hệ ngay để
            được tư vấn mua hàng Hotline: 094.1795.869
          </div>
          <StyledCollapse style={{ width: "unset" }}>
            SẢN PHẨM MỚI
          </StyledCollapse>
          {INTRODUCE_LEFT_PRODUCT.map((product) => (
            <ProductItemSmall
              key={product.key}
              img={product.img}
              title={product.title}
              pirce={product.pirce}
            />
          ))}
        </StyledProductSupport>
      </StyledProductDetail>
    </StyledPageWapper>
  );
};
export default ProductDetail;
