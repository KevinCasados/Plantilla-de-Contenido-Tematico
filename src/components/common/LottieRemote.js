import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

/**
 * Reproductor genérico de animaciones .lottie ó .json alojadas en la nube.
 *
 * - Se muestra siempre al 100 % del contenedor y conserva proporciones.
 * - Si necesitas un tope, pasa { maxWidth: 480 } en el prop style.
 */
export default function LottieRemote({ url, style = {}, ...rest }) {
  return (
    <DotLottieReact
      src={url}
      autoplay
      loop
      /** 100 % de ancho y alto automático (mantiene aspect-ratio) */
      style={{ width: '100%', height: 'auto', ...style }}
      {...rest}
    />
  );
}