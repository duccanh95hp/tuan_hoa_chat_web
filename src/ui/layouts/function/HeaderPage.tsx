import { IconMenu, SearchIcon } from "../../../shared/assets/icons";
import { PageHeader } from "../../../shared/components";
import { styled } from "../../../shared/styles";
import Icon from "@ant-design/icons";
import { Dropdown, Input, Menu } from "antd";
import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "../../../shared/hooks/useRouter";
import { useAppProvider } from "../../../shared/contexts/AppProvider";
import { MenuList } from "./Sidebar";
import { useMedia } from "../../../core/hooks/useMedia";
import { MenuSidebar } from "../styles";
import ImgLogo from "../../../shared/assets/icons/logo.png";
import AnimatedText from "./AnimationText";
import EmailHeaderIcon from "../../../shared/assets/icons/EmailHeader.png";
import MobieIcon from "../../../shared/assets/icons/mobie.png";
import { useSearchLayout } from "../../../core/hooks/useSearchLayout";
import { debounce } from "lodash";

const MenuStyle = styled("div", {
  gap: "10px",
  display: "flex",
  height: "70px",
  padding: "0 15%",
  alignItems: "center",
  background: "white",
  justifyContent: "space-between",
  "@media (max-width: 1400px)": {
    padding: "0 24px",
  },
  "@media (max-width: 765px)": {
    padding: "0 16px",
  },
});

const SearchStyle = styled("div", {
  width: "300px",
  ".ant-input-affix-wrapper": {
    background: "#F5F5F5",
  },
});

const StyledBoxIconMenu = styled("div", {
  border: "1px solid #006db3",
  padding: "6px 6px",
  borderRadius: "5px",
  width: "20px",
  height: "20px",
  svg: {
    path: {
      fill: " #006db3",
    },
  },
});

const StyledHeaderBox = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  img: {
    width: "80px",
  },
  ".logo": {
    display: "flex",
    alignItems: "center",
    fontSize: "26px",
    fontWeight: "bold",
    "@media (max-width: 768px)": {
      display: "flex",
      alignItems: "center",
      fontSize: "12px",
      fontWeight: "bold",
    },
  },
});

const LayoutHeader = styled("div", {
  background: "white !important",
  color: "White",
  padding: "6px 15%",
  display: "flex",
  justifyContent: "space-between",
  "@media (max-width: 1400px)": {
    padding: "0 24px",
  },
  "@media (max-width: 768px)": {
    padding: "0 16px",
  },
});

const StyledHeaderBoxContact = styled("div", {
  display: "flex",
  gap: "12px",
  img: {
    width: "44px",
  },
  ".text-red": {
    fontWeight: 700,
    color: "red",
  },
  ".text-note": {
    fontWeight: 700,
    color: "#004c7d",
  },
});

type THeaderPage = {
  header: ReactElement;
};

export const HeaderPage = ({ header }: THeaderPage) => {
  const { navigate, location, search } = useRouter();
  const { updateAppProps } = useAppProvider();
  const { isMobie } = useMedia();
  const { pathname } = location;

  const [defaultPath, setDefaultPath] = useState<string>(pathname);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const { dataSearch, onSearch } = useSearchLayout();

  const onChangePage = (e: any) => {
    navigate(e.key);
  };

  useEffect(() => {
    if (pathname) {
      if (search) {
        setDefaultPath(`${pathname}${search}`);
      } else {
        setDefaultPath(pathname);
      }
    }
  }, [pathname, search]);

  const handleDebouncedChange = debounce((value) => {
    onSearch(value);
  }, 500);

  const onChange = (e: any) => {
    if (e.target.value !== "") {
      setIsSearch(true);
      handleDebouncedChange(e.target.value);
    } else {
      setIsSearch(false);
      onSearch("");
    }
  };

  const onClickItem = () => {};

  return (
    <PageHeader>
      <LayoutHeader>{header}</LayoutHeader>
      <MenuStyle>
        {isMobie ? (
          <StyledHeaderBox>
            <StyledBoxIconMenu
              onClick={() => {
                updateAppProps({
                  collapsed: true,
                });
              }}
            >
              <IconMenu />
            </StyledBoxIconMenu>
            <div className="logo">
              <img src={ImgLogo} alt="logo" />
              <span className="">TRỌNG TUẤN CHEMICALS</span>
            </div>
            <StyledBoxIconMenu
              onClick={() => updateAppProps({ collapsedSearch: true })}
            >
              <SearchIcon />
            </StyledBoxIconMenu>
          </StyledHeaderBox>
        ) : (
          <StyledHeaderBox>
            <div className="logo" style={{ marginLeft: "-40px"}}>
              <img src={ImgLogo} alt="logo"  />
              <span className="">TRỌNG TUẤN CHEMICALS</span>
            </div>
            <AnimatedText />
            <StyledHeaderBoxContact>
              <img src={EmailHeaderIcon} alt="email" />
              <div>
                <div className="text-red">hoachattrongtuan</div>
                <div className="text-red">@gmail.com</div>
                <div className="text-note">Email liên hệ</div>
              </div>
            </StyledHeaderBoxContact>
            <StyledHeaderBoxContact>
              <img src={MobieIcon} alt="mobie" />
              <div>
                <div className="text-red">0941795869</div>
                <div className="text-note">Hỗ trợ - Tư vấn 24/7</div>
              </div>
            </StyledHeaderBoxContact>
          </StyledHeaderBox>
        )}
      </MenuStyle>

      {!isMobie ? (
        <MenuSidebar>
          <Menu
            mode="horizontal"
            theme="light"
            defaultSelectedKeys={[defaultPath]}
            selectedKeys={[defaultPath]}
            items={MenuList}
            onClick={onChangePage}
          />

          <Dropdown
            visible={isSearch}
            menu={{
              items: dataSearch.map((data) => {
                return {
                  label: data.title,
                  key: data.key,
                };
              }),
              onClick: onClickItem,
            }}
            overlayStyle={{
              height: "500px",
              overflow: "hidden",
              width: "240px",
            }}
          >
            <SearchStyle>
              <Input
                placeholder="Bạn cần tìm gì ?"
                allowClear
                onChange={(e) => onChange(e)}
                suffix={<Icon component={SearchIcon} />}
              />
            </SearchStyle>
          </Dropdown>
        </MenuSidebar>
      ) : (
        ""
      )}
    </PageHeader>
  );
};
