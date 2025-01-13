import { Breadcrumb, Pagination } from "antd";
import {
  StyledCollapse,
  StyledIntroduceProd,
  StyledPageWapper,
  StyledPagingWapper,
} from "../../layouts/styles";
import { useRouter } from "../../../shared/hooks/useRouter";
import {
  getLabelByKey,
  getProductKeyArray,
} from "../../../shared/utils/getLabelByKey";
import { MenuList } from "../../layouts/function/Sidebar";
import { styled } from "../../../shared/styles";
import { ProductItem } from "./product-item";
import { useEffect, useMemo, useState } from "react";

const StyledProductsWapper = styled("div", {
  marginTop: "24px",
});

const Products = () => {
  const { location, search } = useRouter();
  const label = getLabelByKey(`${location.pathname}${search}`, MenuList);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentData, setCurrentData] = useState<any[]>([]);
  const currentFilter = useMemo(() => getProductKeyArray(label ?? ""), [label]);

  useEffect(() => {
    setCurrentData(
      currentFilter.slice((currentPage - 1) * 20, currentPage * 20)
    );
  }, [currentFilter, currentPage, label]);

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
            title: label?.toUpperCase(),
          },
        ]}
      />
      <StyledProductsWapper>
        <StyledCollapse style={{ width: "unset" }}>
          {label?.toUpperCase()}
        </StyledCollapse>
      </StyledProductsWapper>

      <StyledIntroduceProd>
        {currentData.map((product) => (
          <ProductItem
            key={product.key}
            img={product.img}
            title={product.title}
            pirce={product.price}
          />
        ))}
      </StyledIntroduceProd>
      {currentFilter?.length > 20 && (
        <StyledPagingWapper
          style={{
            marginTop: "16px",
          }}
        >
          <Pagination
            current={currentPage}
            defaultCurrent={1}
            defaultPageSize={20}
            total={currentFilter.length}
            onChange={(page) => setCurrentPage(page)}
            showSizeChanger={false}
          />
        </StyledPagingWapper>
      )}
    </StyledPageWapper>
  );
};

export default Products;
