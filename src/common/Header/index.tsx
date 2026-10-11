import { useState } from "react";
import {
  Clock,
  Login,
  Logo,
  Navigation,
  RightSection,
  Wrapper,
  MenuList,
  MenuWrapper,
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
              {navigationMenu ? "menu" : "nume"}
            </button>
            {navigationMenu && (
              <MenuList>
                <li>Strona główna</li>
                <li>O nas</li>
                <li>Kontakt</li>
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
