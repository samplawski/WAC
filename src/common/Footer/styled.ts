import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: ". social copyright";
  padding-top: 16px;

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "social"
      "copyright";
  }
`;

export const FooterLink = styled.a`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: hsl(from ${({ theme }) => theme.colors.primary} h s calc(l + 10%));
  }
`;

export const FooterIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const SocialLinks = styled.div`
  grid-area: social;
  display: flex;
  justify-content: space-between;

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    display: flex;
    justify-content: center;
    gap: 24px;
  }
`;

export const Copyright = styled.p`
  grid-area: copyright;
  justify-self: end;

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    justify-self: center;
  }
`;
