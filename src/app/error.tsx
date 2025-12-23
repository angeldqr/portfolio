"use client";

import { useEffect } from "react";
import { Button } from "@heroui/react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error caught by boundary:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Algo salió mal</h1>
          <p className="text-foreground/60">
            Ha ocurrido un error inesperado. Por favor, intenta nuevamente.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={reset}
            color="primary"
            size="lg"
            className="font-semibold"
          >
            Reintentar
          </Button>
          <Button
            as="a"
            href="/"
            variant="bordered"
            size="lg"
            className="font-semibold"
          >
            Ir al inicio
          </Button>
        </div>

        {process.env.NODE_ENV === "development" && (
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-sm text-foreground/50 hover:text-foreground/70 transition-colors">
              Ver detalles del error (solo desarrollo)
            </summary>
            <pre className="mt-3 p-4 bg-foreground/5 rounded-lg text-xs text-foreground/70 overflow-auto">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
