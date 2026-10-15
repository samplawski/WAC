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
  MenuLink,
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
              type="button"
              aria-expanded={navigationMenu}
              aria-controls="navigation-menu"
              onClick={handleNavigationMenu}
            >
              Menu
            </button>
            {navigationMenu && (
              <MenuList id="navigation-menu">
                <MenuItem>
                  <MenuLink href="/">Strona główna</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink href="/">Kameralny</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink href="/">Męski</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink href="/">Kalendarium</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink href="/">Nuty</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink href="/">Członkowie</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink href="/">
                    Strona główna — bardzo długa nazwa testow
                  </MenuLink>
                </MenuItem>
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
