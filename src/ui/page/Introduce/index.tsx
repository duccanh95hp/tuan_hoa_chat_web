import { useEffect, useState } from "react";
import {
  INTRODUCE_LEFT_PRODUCT,
  INTRODUCE_MENU_LEFT,
} from "../../../core/data/introduce";
import { styled } from "../../../shared/styles";
import {
  StyledCollapse,
  StyledMenuLeftItem,
  StyledMenuLeftWapper,
  StyledPageWapper,
} from "../../layouts/styles";
import { useRouter } from "../../../shared/hooks/useRouter";
import { PATH } from "../../../router/path";
import { ProductItemSmall } from "../../../shared/components/ProductItem";
import { IntroduceStep } from "./introduce-steps/IntroduceStep";
import { UpdateStep } from "./introduce-steps/UpdateStep";

const StyledIntroduceWapper = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "28px",
  ".title": {
    color: "#0A0A0A",
    fontWeight: "700",
    fontSize: "1.25em",
  },
  "@media (max-width: 800px)": {
    flexDirection: 'column-reverse'
  },
});

const StyledIntroduceLeft = styled("div", {
  flex: 1,
  maxWidth: "33%",
  ".product": {
    marginTop: "10px",
  },
  "@media (max-width: 800px)": {
    flex: "unset !important",
    maxWidth: "100%",
    width: "100%",
  },
});

const StyledIntroduceRight = styled("div", {
  flex: "2",
  width: "100%",
});

const Introduce = () => {
  const { navigate, search } = useRouter();
  const [active, setActive] = useState<string>("");
  const onSelected = (path: string) => {
    setActive(path);
    if (path !== PATH.home && path !== PATH.library) {
      navigate({
        pathname: `${PATH.introduce}`,
        search: path,
      });
    } else {
      navigate(path);
    }
  };

  useEffect(() => {
    const isActive = search.replace("?", "");
    setActive(isActive);
  }, [search]);

  return (
    <StyledPageWapper>
      <StyledIntroduceWapper>
        <StyledIntroduceLeft>
          <div className="title">DANH SÁCH BÀI VIẾT</div>
          <StyledMenuLeftWapper>
            {INTRODUCE_MENU_LEFT.map((menu) => (
              <StyledMenuLeftItem
                key={menu.key}
                active={active === menu.path}
                onClick={() => onSelected(menu.path)}
              >
                {menu.title}
              </StyledMenuLeftItem>
            ))}
          </StyledMenuLeftWapper>
          <div className="product">
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
          </div>
        </StyledIntroduceLeft>
        <StyledIntroduceRight>
          {search ? <UpdateStep /> : <IntroduceStep />}
        </StyledIntroduceRight>
      </StyledIntroduceWapper>
    </StyledPageWapper>
  );
};

export default Introduce;
