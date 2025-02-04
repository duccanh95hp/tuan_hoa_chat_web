export type UniqId = string;

export type WithUid<T> = T & { uid: UniqId };
export type WithErrors<T> = T & { errors?: string[] };

export type DateTimeString = string | Date;

export type Maybe<T> = T | null | undefined;

export type MaybeAll<T> = {
  [A in keyof T]: T[A] extends Array<any>
    ? Maybe<T[A]>
    : T[A] extends Record<any, any>
    ? MaybeAll<T[A]>
    : Maybe<T[A]>;
};

export type RecursivePartial<T> = T extends object
  ? {
      [P in keyof T]?: T[P] extends (infer U)[]
        ? RecursivePartial<U>[]
        : T[P] extends object
        ? RecursivePartial<T[P]>
        : T[P];
    }
  : any;

export type Flatten<T> = T extends ReadonlyArray<any>
  ? T[number]
  : T extends any[]
  ? T[number]
  : T;

export type Nullable<T> = T | null;

export enum ChartType {
  Bar = "bar",
  Line = "line",
}

export type ChartData<T = number> = {
  name: string;
  type: ChartType;
  data: T[];
  color: string;
};

export type ValueOf<T> = T[keyof T];

export type ParamsWithoutFirst<F> = F extends (
  firstP: any,
  ...restP: infer R
) => any
  ? R
  : never;

export type TranslateFn = (s: string) => string;

export const TProductValueList = {
  PRODUCT_TYPE_1: "Hóa Chất Xử Lý Nước",
  PRODUCT_TYPE_6: "Thiết Bị Phòng Thí Nghiệm",
  PRODUCT_TYPE_5: "Hóa Chất Tẩy Rửa",
  PRODUCT_TYPE_3: "Dung Môi Công Nghiệp",
  STANDARD: "Chất Chuẩn",
  SOLVENT: "Dung Môi",
  ACID_BAZO: "Acid và Bazo",
  SALT: "Muối",
  DIRECTIVE: "Chỉ Thị",
  REAGENT: "Thuốc Thử",
  TEXTILE_DYEING: "Hóa Chất Ngành Dệt Nhuộm",
  PLATING: "Hóa Chất Ngành Xi Mạ",
  EXTRACTIVE: "Hóa Chất Ngành Khai Khoáng",
  SHOE_LEATHER: "Hóa Chất Ngành Da Giày",
  PAPER: "Hóa Chất Ngành Giấy",
  FOOD: "Hóa Chất Ngành Thực Phẩm",
  ANIMAL_FEED: "Hóa Chất Ngành Thức Ăn Chăn Nuôi",
  PHARMACEUTICAL: "Hóa Chất Ngành Dược - Mỹ Phẩm",
  PAINT: "Hóa Chất Ngành Sơn",
  ELECTRONICS: "Hóa Chất Ngành Điện Tử",
  CLEANING: "Hóa Chất Ngành Tẩy Rửa",
};

export type TProductTypeList = {
  PRODUCT_TYPE_1: "PRODUCT_TYPE_1";
  PRODUCT_TYPE_2: "PRODUCT_TYPE_2";
  PRODUCT_TYPE_3: "PRODUCT_TYPE_3";
  PRODUCT_TYPE_5: "PRODUCT_TYPE_5";
  PRODUCT_TYPE_6: "PRODUCT_TYPE_6";
};
