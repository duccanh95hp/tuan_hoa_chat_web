import { useState } from "react";
import { NEWS_DATA_PAGE } from "../data/news";
import { PRODUCT_TYPE_1 } from "../data/product-type1";

export const useSearchLayout = () => {
  const defaultDataSearch: any[] = [...NEWS_DATA_PAGE, ...PRODUCT_TYPE_1];

  const [dataSearch, setDataSearch] = useState<any[]>([]);
  const onSearch = (valueSearch: string) => {
    const searchArr = defaultDataSearch.filter((data) => {
      return data.title.includes(valueSearch);
    });
    setDataSearch(searchArr ?? []);
  };
  return {
    dataSearch,
    onSearch,
  };
};
