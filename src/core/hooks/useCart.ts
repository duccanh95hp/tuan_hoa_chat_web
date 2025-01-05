import { useAppProvider } from "../../shared/contexts/AppProvider";
import { setProductToStorages, TProduct } from "../storages/product";
import { useMemo } from "react";

export const useCart = () => {
  const shippingFee = 25000;
  const { countProduct, productsSelected, updateAppProps } = useAppProvider();
  const addProductToCart = (product: TProduct) => {
    const updatedProducts = productsSelected.map((selectedProduct) => {
      if (selectedProduct.index === product.index) {
        return {
          ...selectedProduct,
          count: (selectedProduct.count || 1) + 1,
        };
      }
      return selectedProduct;
    });

    const isProductAlreadySelected = productsSelected.some(
      (selectedProduct) => selectedProduct.index === product.index
    );

    if (!isProductAlreadySelected) {
      updatedProducts.push({ ...product, count: 1 });
    }

    updateAppProps({
      countProduct: countProduct + 1,
      productsSelected: updatedProducts,
    });

    setProductToStorages(product);
  };

  const countAllCart = useMemo(() => {
    let countTotal: number = 0;
    productsSelected.forEach((prod: any) => {
      countTotal += prod.price * (prod.count ?? 1);
    });
    return countTotal;
  }, [productsSelected]);

  return { shippingFee, productsSelected, addProductToCart, countAllCart };
};
