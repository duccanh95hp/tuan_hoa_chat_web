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
