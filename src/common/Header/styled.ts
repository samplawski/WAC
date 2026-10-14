import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
`;

export const Clock = styled.p`
  justify-self: start;
  text-align: left;
  border: 1px solid red;
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

export const MenuList = styled.ul`
  /* 1. Pozycjonowanie */
  position: absolute;
  top: 100%;
  right: 0;

  /* 2. Odstępy i model pudełkowy */
  margin: 0;
  margin-top: 6px;
  padding: 8px;
  box-sizing: border-box;

  /* 3. Rozmiar */
  width: max-content;
  max-width: 280px;

  /* 4. Wygląd */
  background-color: ${({ theme }) => theme.colors.surface};

  /* 5. Wygląd listy */
  list-style: none;
`;

export const MenuItem = styled.li`
  padding: 4px;
  padding-left: 20px;
  text-indent: -16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const Login = styled.p`
  padding: 3px;
  margin: 2px;
  border: 1px solid black;
`;
