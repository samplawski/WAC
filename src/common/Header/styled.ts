import styled from "styled-components";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  width: 100%;

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "logo"
      "clock"
      "right";
    place-items: center;
  }
`;

export const Login = styled.p`
  margin: 2px;
  padding: 3px;
  border: 1px solid black;
`;

export const Logo = styled.h1`
  justify-self: center;
  border: 1px solid blue;
  text-align: center;

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    grid-area: logo;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  align-items: center;
  margin-left: auto;
  border: 1px solid teal;

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    grid-area: right;
    justify-self: center;
    margin-left: 0;
  }
`;

export const Navigation = styled.nav`
  position: relative;
  margin: 2px;
  padding: 3px;
  border: 1px solid purple;
`;

export const MenuWrapper = styled.div`
  position: relative;
`;

export const PopoverMenu = styled.nav`
  position: absolute;
  position-area: bottom;
  box-sizing: border-box;
  justify-self: end;
  min-width: 200px;
  max-width: 280px;
  margin: 6px 0 0;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.surface};
  overflow-x: hidden;

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    justify-self: center;
  }

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
    font: inherit;
    text-align: left;
    text-decoration: none;
    color: inherit;
    background: transparent;
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
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const SubMenuDetails = styled.details`
  width: 100%;
`;

export const SubMenuSummary = styled.summary`
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const SubMenuItem = styled.li`
  padding-left: 22px;
`;
