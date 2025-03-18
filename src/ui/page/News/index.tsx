import { INTRODUCE_LEFT_PRODUCT } from "../../../core/data/introduce";
import { ProductItemSmall } from "../../../shared/components/ProductItem";
import { styled } from "../../../shared/styles";
import {
  StyledCollapse,
  StyledMenuAntdLeft,
  StyledPageWapper,
  StyledPagingWapper,
} from "../../layouts/styles";
import { MenuList } from "../../layouts/function/Sidebar";
import { Menu, MenuProps, Pagination } from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { NewsProductItem } from "./news-product-item/NewsProductItem";
import { NEWS_DATA_PAGE } from "../../../core/data/news";
import { useState } from "react";
import { useRouter } from "../../../shared/hooks/useRouter";
import { NewsDetail } from "./detail";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../router/path";

const StyledNewsWapper = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "28px",
  ".title": {
    color: "#0A0A0A",
    fontWeight: "700",
    fontSize: "1.25em",
  },
  "@media (max-width: 1050px)": {
    flexDirection: "column-reverse",
  },
});

const StyledNewsLeft = styled("div", {
  flex: 1,
  maxWidth: "33%",
  display: "flex",
  flexDirection: "column",
  ".product": {
    marginTop: "10px",
  },
  "@media (max-width: 1050px)": {
    flex: "unset !important",
    maxWidth: "100%",
    width: "100%",
  },
});

const StyledNewsRight = styled("div", {
  flex: "2",
  width: "100%",
  ".title": {
    fontSize: "24px",
    fontFamily: "sans-serif",
  },
});

const StyledNewsProductWapper = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "start",
  gap: "10px",
  marginTop: "10px",
  padding: "16px",
  "@media (max-width: 800px)": {
    padding: "unset",
    gap: "10px auto",
    justifyContent: "start",
  },
});

const News = () => {
  const menuLeftNews = MenuList[0] as MenuProps;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const currentData = NEWS_DATA_PAGE.slice(
    (currentPage - 1) * 12,
    currentPage * 12
  );
  const navigate = useNavigate();

  const onGoToDetail = (e: any) => {
    navigate(e.key);
  };
  const onGoToDetailProduct = (title: string) => {
    navigate(`${PATH.product_detail}?${encodeURIComponent(title)}`);
  };
  const { search } = useRouter();
  const isDetail = decodeURIComponent(search);
  const titleDetail = isDetail.replace("?detail=", "");
  const data_src = NEWS_DATA_PAGE.find(
    (news) => news.title === titleDetail
  )?.data;
  return (
    <StyledPageWapper>
      <StyledNewsWapper>
        <StyledNewsLeft>
          <StyledCollapse style={{ width: "unset" }}>
            DANH MỤC SẢN PHẨM
          </StyledCollapse>
          <StyledMenuAntdLeft>
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={menuLeftNews?.children as ItemType<MenuItemType>[]}
              onClick={onGoToDetail}
            />
          </StyledMenuAntdLeft>

          <div className="product">
            <StyledCollapse style={{ width: "unset" }}>SẢN PHẨM</StyledCollapse>
            {INTRODUCE_LEFT_PRODUCT.map((product) => (
              <ProductItemSmall
                key={product.key}
                img={product.img}
                title={product.title}
                pirce={product.pirce}
                onClick={() => onGoToDetailProduct(product.title)}
                
              />
            ))}
          </div>
        </StyledNewsLeft>

        <StyledNewsRight>
          {isDetail ? (
            <>
              <strong className="title">{titleDetail}</strong>
              <NewsDetail data={data_src} title={titleDetail}/>
            </>
          ) : (
            <>
              <StyledCollapse style={{ width: "unset" }}>
                TIN TỨC
              </StyledCollapse>
              <StyledNewsProductWapper>
                {currentData.map((product, index) => (
                  <NewsProductItem
                    key={index}
                    path={product.key}
                    content={product.content}
                    title={product.title}
                    icon={product.icon}
                  />
                ))}
              </StyledNewsProductWapper>
              <StyledPagingWapper>
                <Pagination
                  current={currentPage}
                  defaultCurrent={1}
                  defaultPageSize={12}
                  total={NEWS_DATA_PAGE.length}
                  onChange={(page) => setCurrentPage(page)}
                />
              </StyledPagingWapper>
            </>
          )}
        </StyledNewsRight>
      </StyledNewsWapper>
    </StyledPageWapper>
  );
};

export default News;
