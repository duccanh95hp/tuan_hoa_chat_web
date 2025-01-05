import { getAccountStorages, TAccount } from "../../core/storages/auth";
import { getProductToStorages, TProduct } from "../../core/storages/product";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type TAppProps = {
  products: any;
  countProduct: number;
  productsSelected: TProduct[];
  collapsed: boolean;
  isLogin: boolean;
  loginError: boolean;
  isSigup: boolean;
  signupError: boolean;
};

export const initialProps: TAppProps = {
  products: null,
  countProduct: 0,
  productsSelected: [],
  collapsed: false,
  isLogin: false,
  loginError: false,
  isSigup: false,
  signupError: false,
};

export type TAppUpdateProps = TAppProps & {
  updateAppProps: (newSearchParams: Partial<TAppUpdateProps>) => void;
};
const AppProviderCtx = createContext<TAppUpdateProps>({
  ...initialProps,
  updateAppProps: () => {},
});

export const AppProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [appProps, setAppProps] = useState<TAppProps>({
    ...initialProps,
  });

  const updateAppProps: TAppUpdateProps["updateAppProps"] = useCallback(
    (newPartialSP) => {
      setAppProps((oldSearchParams) => ({
        ...oldSearchParams,
        ...newPartialSP,
      }));
    },
    []
  );

  useEffect(() => {
    const products: TProduct[] = getProductToStorages();
    const countDuplicates = (arr: TProduct[]): TProduct[] => {
      const counts: Record<number, { item: TProduct; count: number }> = {};
      arr.forEach((item) => {
        if (counts[item.index]) {
          counts[item.index].count += 1;
        } else {
          counts[item.index] = { item, count: 1 };
        }
      });
      return Object.values(counts).map(({ item, count }) => ({
        ...item,
        count,
      }));
    };
    updateAppProps({
      countProduct: products.length,
      productsSelected: countDuplicates(products) ?? [],
    });
  }, []);

  useEffect(() => {
    const account: TAccount | null = getAccountStorages();
    if (account?.accessToken && account?.username) {
      updateAppProps({
        isLogin: true,
      });
    }
  }, []);

  const providedValues: TAppUpdateProps = useMemo(
    () => ({
      ...appProps,
      updateAppProps,
    }),
    [appProps, updateAppProps]
  );

  return (
    <AppProviderCtx.Provider value={providedValues}>
      {children}
    </AppProviderCtx.Provider>
  );
};

export function useAppProvider() {
  const ctx = useContext(AppProviderCtx);

  if (typeof ctx === "undefined") {
    throw new Error("useAppProvider must be used within AuthProvider");
  }

  return ctx;
}
