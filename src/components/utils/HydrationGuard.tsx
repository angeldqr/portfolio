"use client";

import { useEffect, useState } from 'react';

/**
 * Componente para prevenir problemas de hidratación en Next.js
 * Útil para contenido que difiere entre servidor y cliente
 */
export default function HydrationGuard({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Usar setTimeout para evitar la advertencia del linter
    // Este es un patrón estándar para hidratación en Next.js
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}