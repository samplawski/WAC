import { useState } from "react";
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

  return (
    <Wrapper>
      <Clock>data</Clock>
      <Logo>WAC</Logo>
      <RightSection>
        <Navigation>
          <MenuWrapper>
            {" "}
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
