import { useState } from "react";
import {
  Clock,
  Login,
  Logo,
  Navigation,
  RightSection,
  Wrapper,
} from "./styled";

const Header = () => {
  const [navigationMenu, setNavigationMenu] = useState(false);
  const handleNavigationMenu = () => {
    setNavigationMenu(!navigationMenu);
  };

  return (
    <Wrapper>
      <Clock>data</Clock>
      <Logo>WAC</Logo>
      <RightSection>
        <Navigation>
          <button onClick={handleNavigationMenu}>Nawigacja</button>
        </Navigation>
        <Login>Login</Login>
      </RightSection>
    </Wrapper>
  );
};

export default Header;
