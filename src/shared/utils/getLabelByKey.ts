import { TProductValueList } from "../types";
import { PRODUCT_TYPE_6 } from "../../core/data/product-type6";
import { PRODUCT_TYPE_1 } from "../../core/data/product-type1";
import { PRODUCT_TYPE_5 } from "../../core/data/product-type5";
import { PRODUCT_TYPE_3 } from "../../core/data/product-type3";

export const getLabelByKey = (
  key: string,
  menuList: any[]
): string | undefined => {
  for (const item of menuList) {
    if (item?.key === key) {
      return item?.label;
    }
    if (item?.children) {
      const labelInChildren = getLabelByKey(key, item?.children);
      if (labelInChildren) {
        return labelInChildren;
      }
    }
  }
  return undefined; // Return undefined if the key is not found
};

export const removeFirstCharacter = (str: string): string => {
  return str.slice(1); // Remove the first character
};

export const getProductKeyArray = (label: string): string[] => {
  if (label === TProductValueList.PRODUCT_TYPE_6) {
    return Array.isArray(PRODUCT_TYPE_6)
      ? (PRODUCT_TYPE_6 as any[])
      : [PRODUCT_TYPE_6];
  }
  if (label === TProductValueList.PRODUCT_TYPE_1) {
    return Array.isArray(PRODUCT_TYPE_1)
      ? (PRODUCT_TYPE_1 as any[])
      : [PRODUCT_TYPE_1];
  }
  if (label === TProductValueList.PRODUCT_TYPE_5) {
    return Array.isArray(PRODUCT_TYPE_5)
      ? (PRODUCT_TYPE_5 as any[])
      : [PRODUCT_TYPE_5];
  }
  if (label === TProductValueList.PRODUCT_TYPE_3) {
    return Array.isArray(PRODUCT_TYPE_3)
      ? (PRODUCT_TYPE_3 as any[])
      : [PRODUCT_TYPE_3];
  }
  
  return [];
};
