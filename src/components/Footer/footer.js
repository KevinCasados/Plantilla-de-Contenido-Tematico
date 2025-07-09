import React from 'react';
import {
  FooterWrapper,
  FooterContainer,
  FooterLeft,
  FooterRight,
  FooterColumn,
  FooterTitle,
  FooterLink,
  SocialIcons,
  SubscribeSection,
  FooterBottom,
  FooterContact,
} from './footer.styles.js';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaGithub } from 'react-icons/fa';
import { FaX, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <FooterWrapper role="contentinfo" aria-label="Footer with links to store, support, and social media">
      <FooterContainer>
        <FooterLeft>
          <SubscribeSection role="region" aria-labelledby="subscribe-section-title">
            <h3 id="subscribe-section-title">Universidad Euro Hispanoamericana</h3>
            <p>Contáctanos para optener más información</p>
            <div>
              <input type="email" placeholder="Correo Electrónico" aria-label="Email Address for newsletter subscription" />
              <button aria-label="Sign up for newsletter">Envíar</button>
            </div>
            <SocialIcons>
              <a href="https://www.facebook.com/EuroUniversidad/?locale=es_LA" aria-label="Visit our Facebook page"><FaFacebookF /></a>
              <a href="https://www.instagram.com/universidadeuro/?hl=es" aria-label="Visit our Instagram page"><FaInstagram /></a>
              <a href="https://www.youtube.com/channel/UCHdFkOoEDNnIC5mscKujPOQ" aria-label="Visit our YouTube channel"><FaYoutube /></a>
              <a href="https://x.com/uni_euro" target="_blank" rel="noopener noreferrer" aria-label="Visit our GitHub page"><FaXTwitter /></a>
            </SocialIcons>
          </SubscribeSection>
        </FooterLeft>

        <FooterRight role="navigation" aria-label="Footer navigation links">
          

          <FooterColumn role="region" aria-labelledby="kinova-links">
            <FooterTitle id="kinova-links">Contácto</FooterTitle>
            <FooterContact>Campus La Pradera</FooterContact>
            <FooterContact>Av. de los Álamos 1 y 3, Fraccionamiento la pradera</FooterContact>
            <FooterContact>Tel: 22-83-68-50-10</FooterContact>
            <FooterContact>Email: admisiones@ueh.edu.mx</FooterContact>
          </FooterColumn>

          <FooterColumn role="region" aria-labelledby="support-links">
            <FooterTitle id="support-links">Enlaces Rápidos</FooterTitle>
            <FooterLink href="#">Página Euro</FooterLink>
            <FooterLink href="#">Comunidad Euro</FooterLink>
            <FooterLink href="#">Quiénes Somos</FooterLink>
          </FooterColumn>
        </FooterRight>
      </FooterContainer>

      <FooterBottom>
        Copyright © 2024 - 2024 KINOVA. All rights reserved.
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;