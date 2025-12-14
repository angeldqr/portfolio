import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeroClientProvider from "@/components/providers/HeroClientProvider";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ángel Quintero | Desarrollador web",
  description: "Desarrollador web full-stack especializado en React, Next.js, Django y PostgreSQL. Construyo aplicaciones modernas con foco en UX, rendimiento y código limpio.",
  keywords: ["Ángel Quintero", "desarrollador web", "full-stack", "React", "Next.js", "Django", "PostgreSQL", "Python", "TypeScript", "Barranquilla", "Colombia"],
  authors: [{ name: "Ángel Quintero" }],
  creator: "Ángel Quintero",
  publisher: "Ángel Quintero",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://angelquintero.dev",
    siteName: "Ángel Quintero - Portfolio",
    title: "Ángel Quintero | Desarrollador Full-Stack",
    description: "Desarrollador web full-stack especializado en React, Next.js, Django y PostgreSQL. Construyo aplicaciones modernas con foco en UX, rendimiento y código limpio.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ángel Quintero - Desarrollador Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ángel Quintero | Desarrollador Full-Stack",
    description: "Desarrollador web full-stack especializado en React, Next.js, Django y PostgreSQL.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/aq.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark text-foreground bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        <HeroClientProvider>
          <Navbar />
          {children}
        </HeroClientProvider>
      </body>
    </html>
  );
}
