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
  MenuGroup,
  SubMenuList,
  MenuGroupButton,
} from "./styled";

const Header = () => {
  const [navigationMenu, setNavigationMenu] = useState(false);

  const closeNavigationMenu = () => {
    setNavigationMenu(false);
    setExpandedMenuGroup(null);
  };

  const handleNavigationMenu = () => {
    if (navigationMenu) {
      setExpandedMenuGroup(null);
    }
    setNavigationMenu((previous) => !previous);
  };

  const [expandedMenuGroup, setExpandedMenuGroup] = useState<
    "chamber" | "male" | "admin" | null
  >(null);

  const handleExpandedMenuGroup = (group: "chamber" | "male" | "admin") => {
    if (expandedMenuGroup === group) {
      setExpandedMenuGroup(null);
    } else {
      setExpandedMenuGroup(group);
    }
    console.log("kliknięto MenuGroup");
  };

  const menuWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuWrapperRef.current &&
        !menuWrapperRef.current.contains(event.target as Node)
      ) {
        closeNavigationMenu();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeNavigationMenu();
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

                <MenuGroup>
                  <MenuGroupButton
                    type="button"
                    aria-expanded={expandedMenuGroup === "chamber"}
                    aria-controls="chamber-submenu"
                    onClick={() => handleExpandedMenuGroup("chamber")}
                  >
                    Chór kameralny
                  </MenuGroupButton>
                  {expandedMenuGroup === "chamber" && (
                    <SubMenuList id="chamber-submenu">
                      <li>
                        <MenuLink href="/">Nuty</MenuLink>
                      </li>
                      <li>
                        <MenuLink href="/">Kalendarz</MenuLink>
                      </li>
                    </SubMenuList>
                  )}
                </MenuGroup>

                <MenuGroup>
                  <MenuGroupButton
                    type="button"
                    aria-expanded={expandedMenuGroup === "male"}
                    aria-controls="male-submenu"
                    onClick={() => handleExpandedMenuGroup("male")}
                  >
                    Chór męski
                  </MenuGroupButton>
                  {expandedMenuGroup === "male" && (
                    <SubMenuList id="male-submenu">
                      <li>
                        <MenuLink href="/">Nuty</MenuLink>
                      </li>
                      <li>
                        <MenuLink href="/">Kalendarz</MenuLink>
                      </li>
                    </SubMenuList>
                  )}
                </MenuGroup>

                <MenuGroup>
                  <MenuGroupButton
                    type="button"
                    aria-expanded={expandedMenuGroup === "admin"}
                    aria-controls="admin-submenu"
                    onClick={() => handleExpandedMenuGroup("admin")}
                  >
                    Administracja
                  </MenuGroupButton>
                  {expandedMenuGroup === "admin" && (
                    <SubMenuList id="admin-submenu">
                      <li>
                        <MenuLink href="/">Katalog nut</MenuLink>
                      </li>
                      <li>
                        <MenuLink href="/">Kalendarz</MenuLink>
                      </li>
                      <li>
                        <MenuLink href="/">Członkowie</MenuLink>
                      </li>
                    </SubMenuList>
                  )}
                </MenuGroup>

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
