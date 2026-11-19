import { useEffect, useRef } from "react";
import Clock from "../Clock/index.tsx";
import {
  // ClockWrapper,
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
  SubMenuItem,
} from "./styled";

const Header = () => {
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const menu = menuRef.current;

    if (!menu) return;

    const handleToggle = (event: ToggleEvent) => {
      if (event.newState === "closed") {
        menu
          .querySelectorAll<HTMLDetailsElement>("details[open]")
          .forEach((item) => {
            item.open = false;
          });
      }
    };

    menu.addEventListener("toggle", handleToggle);

    return () => {
      menu.removeEventListener("toggle", handleToggle);
    };
  }, []);

  return (
    <Wrapper>
      <Clock />
      <Logo>WAC</Logo>
      <RightSection>
        <Navigation>
          <MenuWrapper>
            <button type="button" popoverTarget="main-menu">
              Menu
            </button>

            <PopoverMenu
              ref={menuRef}
              id="main-menu"
              popover="auto"
              onClick={(event) => {
                if ((event.target as HTMLElement).closest("a")) {
                  menuRef.current?.hidePopover();
                }
              }}
            >
              <ul>
                <li>
                  <a href="/">Strona główna</a>
                </li>
                <li>
                  <SubMenuDetails name="main-submenu">
                    <SubMenuSummary>Chór kameralny</SubMenuSummary>
                    <SubMenuList>
                      <SubMenuItem>
                        <SubMenuLink href="/">Nuty</SubMenuLink>
                      </SubMenuItem>
                      <SubMenuItem>
                        <SubMenuLink href="/">Kalendarz</SubMenuLink>
                      </SubMenuItem>
                    </SubMenuList>
                  </SubMenuDetails>
                </li>

                <li>
                  <SubMenuDetails name="main-submenu">
                    <SubMenuSummary>Chór męski</SubMenuSummary>
                    <SubMenuList>
                      <SubMenuItem>
                        <SubMenuLink href="/">Nuty</SubMenuLink>
                      </SubMenuItem>
                      <SubMenuItem>
                        <SubMenuLink href="/">Kalendarz</SubMenuLink>
                      </SubMenuItem>
                    </SubMenuList>
                  </SubMenuDetails>
                </li>
                <li>
                  <SubMenuDetails name="main-submenu">
                    <SubMenuSummary>Administracja</SubMenuSummary>
                    <SubMenuList>
                      <SubMenuItem>
                        <SubMenuLink href="/">Katalog nut</SubMenuLink>
                      </SubMenuItem>
                      <SubMenuItem>
                        <SubMenuLink href="/">Kalendarz</SubMenuLink>
                      </SubMenuItem>
                      <SubMenuItem>
                        <SubMenuLink href="/">Członkowie</SubMenuLink>
                      </SubMenuItem>
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
