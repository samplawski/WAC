import {
  FooterContainer,
  FooterLink,
  FooterIcon,
  Copyright,
  SocialLinks,
} from "./styled";
import facebookLogo from "../../assets/Facebook_Logo.png";
import mailLogo from "../../assets/mail32.png";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <FooterContainer>
      <SocialLinks>
        <FooterLink
          href="mailto:tsamplawski@gmail.com"
          title="wiadomość do autora strony"
        >
          <FooterIcon src={mailLogo} alt="email-icon" />
        </FooterLink>
        <FooterLink
          href="https://www.facebook.com/polskichormeski"
          title="Polski Chór Męski - strona na FaceBook"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FooterIcon src={facebookLogo} alt="Facebook-icon" />
        </FooterLink>
        <FooterLink
          href="https://github.com/samplawski/WAC"
          title="WAC - stronę projektu na GitHub"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FooterIcon
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub-icon"
          />
        </FooterLink>
      </SocialLinks>
      <Copyright>© {date} WAC</Copyright>
    </FooterContainer>
  );
};

export default Footer;
