import {
  FooterStyle,
  SocialIcon,
  SocialIconItem,
  SocialIconLink,
  SocialIconSvg,
} from "./Footer.styled";
import sprite from "../../images/sprite.svg";

const Footer = () => {
  return (
    <FooterStyle>
      <p>2024 © All rights reserved</p>
      <SocialIcon>
        <SocialIconItem>
          <SocialIconLink
            href="https://github.com/AndreyPysarenko"
            target="_blank"
          >
            <SocialIconSvg>
              <use href={`${sprite}#icon-github`} />
            </SocialIconSvg>
          </SocialIconLink>
        </SocialIconItem>

        <SocialIconItem>
          <SocialIconLink
            href="https://www.linkedin.com/in/andrii-pysarenko-2ab988271/"
            target="_blank"
          >
            <SocialIconSvg size="28px">
              <use href={`${sprite}#icon-linkedin`} />
            </SocialIconSvg>
          </SocialIconLink>
        </SocialIconItem>
      </SocialIcon>
    </FooterStyle>
  );
};

export default Footer;
