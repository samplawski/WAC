import styled from "styled-components";

export const ClockText = styled.p`
  justify-self: start;
  padding: ${({ theme }) => theme.spacing.small};
  border-style: double;
  border-color: ${({ theme }) => theme.colors.primary};

  /* background-color: ${({ theme }) => theme.colors.border}; */
  text-align: left;
  color: teal;

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    grid-area: clock;
    justify-self: center;
    text-align: center;
  }
`;
