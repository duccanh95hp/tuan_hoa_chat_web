import { Breadcrumb } from "antd";
import {
  StyledCollapse,
  StyledIntroduceProd,
  StyledPageWapper,
} from "../../layouts/styles";
import { useRouter } from "../../../shared/hooks/useRouter";
import { getLabelByKey } from "../../../shared/utils/getLabelByKey";
import { MenuList } from "../../layouts/function/Sidebar";
import { styled } from "../../../shared/styles";
import { PRODUCT_TYPE_1 } from "../../../core/data/products";
import { ProductItem } from "../../../shared/components/ProductItem";

const StyledProductsWapper = styled("div", {
  marginTop: "24px",
});

const Products = () => {
  const { location, search } = useRouter();
  const label = getLabelByKey(`${location.pathname}${search}`, MenuList);

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
        {PRODUCT_TYPE_1.map((product) => (
          <ProductItem
            key={product.key}
            img={product.img}
            title={product.title}
            pirce={product.price}
          />
        ))}
      </StyledIntroduceProd>
    </StyledPageWapper>
  );
};

export default Products;
