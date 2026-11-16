import {
  Clock,
  Login,
  Logo,
  RightSection,
  Navigation,
  Wrapper,
  MenuWrapper,
  PopoverMenu,
  SubMenuList,
  SubMenuLink,
  SubMenuDetails,
  SubMenuSummary,
} from "./styled";

const Header = () => {
  return (
    <Wrapper>
      <Clock>data</Clock>
      <Logo>WAC</Logo>
      <RightSection>
        <Navigation>
          <MenuWrapper>
            <button type="button" popoverTarget="main-menu">
              Menu
            </button>

            <PopoverMenu id="main-menu" popover="auto">
              <ul>
                <li>
                  <a href="/">Strona główna</a>
                </li>
                <li>
                  <SubMenuDetails name="main-submenu">
                    <SubMenuSummary>Chór kameralny</SubMenuSummary>
                    <SubMenuList>
                      <li>
                        <SubMenuLink href="/">Nuty</SubMenuLink>
                      </li>
                      <li>
                        <SubMenuLink href="/">Kalendarz</SubMenuLink>
                      </li>
                    </SubMenuList>
                  </SubMenuDetails>
                </li>

                <li>
                  <SubMenuDetails name="main-submenu">
                    <SubMenuSummary>Chór męski</SubMenuSummary>
                    <SubMenuList>
                      <li>
                        <SubMenuLink href="/">Nuty</SubMenuLink>
                      </li>
                      <li>
                        <SubMenuLink href="/">Kalendarz</SubMenuLink>
                      </li>
                    </SubMenuList>
                  </SubMenuDetails>
                </li>
                <li>
                  <SubMenuDetails name="main-submenu">
                    <SubMenuSummary>Administracja</SubMenuSummary>
                    <SubMenuList>
                      <li>
                        <SubMenuLink href="/">Katalog nut</SubMenuLink>
                      </li>
                      <li>
                        <SubMenuLink href="/">Kalendarz</SubMenuLink>
                      </li>
                      <li>
                        <SubMenuLink href="/">Członkowie</SubMenuLink>
                      </li>
                    </SubMenuList>
                  </SubMenuDetails>
                </li>
                <li>
                  <button type="button" popoverTarget="long-menu">
                    Strona główna — bardzo długa nazwa testow, aby sprawdzić
                    zawijanie długiego tekstu w Menu
                  </button>
                </li>
              </ul>
            </PopoverMenu>
          </MenuWrapper>
        </Navigation>
        <Login>Login</Login>
      </RightSection>
    </Wrapper>
  );
};

export default Header;
