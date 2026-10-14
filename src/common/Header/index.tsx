import { useEffect, useRef, useState } from "react";
import {
  Clock,
  Login,
  Logo,
  Navigation,
  RightSection,
  Wrapper,
  MenuWrapper,
  MenuList,
  MenuItem,
} from "./styled";

const Header = () => {
  const [navigationMenu, setNavigationMenu] = useState(false);
  const handleNavigationMenu = () => {
    setNavigationMenu(!navigationMenu);
    console.log("kliknięto Menu");
  };

  const menuWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuWrapperRef.current &&
        !menuWrapperRef.current.contains(event.target as Node)
      ) {
        setNavigationMenu(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setNavigationMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Wrapper>
      <Clock>data</Clock>
      <Logo>WAC</Logo>
      <RightSection>
        <Navigation>
          <MenuWrapper ref={menuWrapperRef}>
            <button
              aria-expanded={navigationMenu}
              onClick={handleNavigationMenu}
            >
              {navigationMenu ? "nume" : "menu"}
            </button>
            {navigationMenu && (
              <MenuList>
                <MenuItem>Strona główna</MenuItem>
                <MenuItem>O nas</MenuItem>
                <MenuItem>Strona główna — bardzo długa nazwa testowa</MenuItem>
              </MenuList>
            )}
          </MenuWrapper>
        </Navigation>
        <Login>Login</Login>
      </RightSection>
    </Wrapper>
  );
};

export default Header;
