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
  /* justify-content: space-evenly; */
  align-items: center;
  gap: 10px;
`;

export const Navigation = styled.nav`
  padding: 3px;
  margin: 2px;
  border: 1px solid purple;
`;

export const Login = styled.p`
  padding: 3px;
  margin: 2px;
  border: 1px solid black;
`;
