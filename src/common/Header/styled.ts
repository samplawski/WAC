import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
`;

export const ClockWrapper = styled.p`
  justify-self: start;
  text-align: left;
  border: 1px solid red;
`;

export const Login = styled.p`
  padding: 3px;
  margin: 2px;
  border: 1px solid black;
`;

export const Logo = styled.h1`
  justify-self: center;
  text-align: center;
  border: 1px solid blue;
`;

export const RightSection = styled.div`
  margin-left: auto;
  border: 1px solid teal;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 10px;
`;

export const Navigation = styled.nav`
  padding: 3px;
  margin: 2px;
  border: 1px solid purple;
  position: relative;
`;

export const MenuWrapper = styled.div`
  position: relative;
`;

export const PopoverMenu = styled.nav`
  position: absolute;
  position-area: bottom;
  justify-self: end;

  margin: 6px 0 0;
  padding: 8px;
  min-width: 200px;
  max-width: 280px;
  box-sizing: border-box;
  overflow-x: hidden;

  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); */

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  > ul > li {
    margin: 0;
    padding: 0;
  }

  a,
  button {
    display: block;
    width: 100%;
    padding: 8px 12px;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover,
  button:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

// export const ChamberButton = styled.button`
//   anchor-name: --chamber-button;
// `;

export const SubMenuList = styled.ul`
  margin: 0;
  padding-left: 16px;
  list-style: none;
`;

export const SubMenuLink = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const SubMenuDetails = styled.details`
  width: 100%;
`;

export const SubMenuSummary = styled.summary`
  padding: 8px 12px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.small};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const SubMenuItem = styled.li`
  padding-left: 22px;
`;
