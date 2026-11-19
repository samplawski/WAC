import styled from "styled-components";

export const ClockText = styled.p`
  color: teal;
  /* background-color: ${({ theme }) => theme.colors.border}; */
  text-align: left;
  padding: ${({ theme }) => theme.spacing.small};
  border-color: ${({ theme }) => theme.colors.primary};
  border-style: double;
  justify-self: start;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    grid-area: clock;
    justify-self: center;
    text-align: center;
  }
`;
