import React from 'react';
import { FaBars, FaSun, FaMoon } from 'react-icons/fa';

import {
  HeaderWrapper,
  BurgerButton,
  BrandBox,
  LogoImg,
  MobileLogo,
  SwitchWrapper,
  Track,
  Thumb,
} from './header.styles';

import logoOnly   from '../../assets/logo.png';     // escudo solo
import logoFull   from '../../assets/logo.png';     // logo + texto, si lo tienes

function Header({ themeName, toggleTheme }) {
  const isDark = themeName === 'dark';

  /* ——— emitir evento global (bubbles + composed) ——— */
  const handleBurger = () => {
    const e = new CustomEvent('burger-toggle', {
      bubbles: true,
      composed: true,
    });
    window.dispatchEvent(e);
  };

  return (
    <HeaderWrapper>
      {/* hamburguesa — visible sólo en <1080 px */}
      <BurgerButton onClick={handleBurger} aria-label="Abrir menú">
        <FaBars />
      </BurgerButton>

      {/* escritorio: logo + texto */}
      <BrandBox>
        <LogoImg src={logoFull} alt="Universidad Euro Hispanoamericana" />
        <span>Universidad Euro Hispanoamericana</span>
      </BrandBox>

      {/* móvil: logo centrado */}
      <MobileLogo src={logoOnly} alt="Logo universidad" />

      {/* interruptor de tema */}
      <SwitchWrapper>
        <Track $isDark={isDark} onClick={toggleTheme}>
          <Thumb $isDark={isDark}>{isDark ? <FaMoon /> : <FaSun />}</Thumb>
        </Track>
      </SwitchWrapper>
    </HeaderWrapper>
  );
}

export default Header;