import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import {
  HeaderWrapper,
  SwitchWrapper,
  Track,
  Thumb,
} from './header.styles';
import logo from '../../assets/logo.png';

function Header({ themeName, toggleTheme }) {
  const isDark = themeName === 'dark';

  return (
    <HeaderWrapper>
      {/* ------------- lado izquierdo ------------- */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img src={logo} alt="UEH Logo" style={{ height: '48px' }} />
        <h1 style={{ fontSize: '1.8rem', margin: 0, fontWeight: 600 }}>Universidad Euro Hispanoamericana</h1>
      </div>

      {/* ------------- interruptor de tema ------------- */}
      <SwitchWrapper>
        <Track $isDark={isDark} onClick={toggleTheme}>
          <Thumb $isDark={isDark}>
            {isDark ? <FaMoon /> : <FaSun />}
          </Thumb>
        </Track>
      </SwitchWrapper>
    </HeaderWrapper>
  );
}

export default Header;
