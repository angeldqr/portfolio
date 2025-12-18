"use client";

import { useEffect, useState } from 'react';

/**
 * Componente para envolver elementos que pueden tener hydration issues
 * debido a extensiones de navegador o diferencias SSR/cliente
 */
export default function HydrationGuard({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Marcar como hidratado solo en el cliente
    setIsHydrated(true);
    
    // Limpiar atributos problemáticos de extensiones
    const cleanAttributes = () => {
      const elements = document.querySelectorAll('[bis_skin_checked]') as NodeListOf<HTMLElement>;
      elements.forEach(el => el.removeAttribute('bis_skin_checked'));
    };
    
    cleanAttributes();
    
    // Monitorear cambios continuos
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && 
            mutation.attributeName === 'bis_skin_checked' &&
            mutation.target instanceof HTMLElement) {
          mutation.target.removeAttribute('bis_skin_checked');
        }
      });
    });
    
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['bis_skin_checked'],
      subtree: true
    });
    
    return () => observer.disconnect();
  }, []);

  // Mostrar fallback durante hidratación si se proporciona
  if (!isHydrated && fallback !== null) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}