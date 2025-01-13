import { TProductValueList } from "../types";
import { PRODUCT_TYPE_6 } from "../../core/data/product-type6";
import { PRODUCT_TYPE_1 } from "../../core/data/product-type1";
import { PRODUCT_TYPE_5 } from "../../core/data/product-type5";
import { PRODUCT_TYPE_3 } from "../../core/data/product-type3";
import { PRODUCT_TYPE_4 } from "../../core/data/product-type4";
import { TEXTILE_DYEING } from "../../core/data/product-type2";

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
  const productMap: Record<string, any> = {
    [TProductValueList.PRODUCT_TYPE_1]: PRODUCT_TYPE_1,
    [TProductValueList.PRODUCT_TYPE_3]: PRODUCT_TYPE_3,
    [TProductValueList.PRODUCT_TYPE_5]: PRODUCT_TYPE_5,
    [TProductValueList.PRODUCT_TYPE_6]: PRODUCT_TYPE_6,
    [TProductValueList.TEXTILE_DYEING]: TEXTILE_DYEING,
    // [TProductValueList.PLATING]: PLATING,
    // [TProductValueList.EXTRACTIVE]: EXTRACTIVE,
    // [TProductValueList.SHOE_LEATHER]: SHOE_LEATHER,
    // [TProductValueList.PAPER]: PAPER,
    // [TProductValueList.FOOD]: FOOD,
    // [TProductValueList.ANIMAL_FEED]: ANIMAL_FEED,
    // [TProductValueList.PHARMACEUTICAL]: PHARMACEUTICAL,
    // [TProductValueList.PAINT]: PAINT,
    // [TProductValueList.ELECTRONICS]: ELECTRONICS,
    // [TProductValueList.CLEANING]: CLEANING,
  };

  if (productMap[label]) {
    return Array.isArray(productMap[label])
      ? productMap[label]
      : [productMap[label]];
  }

  const filteredTypes = [
    TProductValueList.STANDARD,
    TProductValueList.SOLVENT,
    TProductValueList.ACID_BAZO,
    TProductValueList.SALT,
    TProductValueList.DIRECTIVE,
    TProductValueList.REAGENT,
  ];

  if (filteredTypes.includes(label)) {
    return Array.isArray(PRODUCT_TYPE_4)
      ? (PRODUCT_TYPE_4.filter((item) => item.type === label) as any[])
      : [PRODUCT_TYPE_4];
  }

  return [];
};
