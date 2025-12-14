# Portfolio Personal

Portafolio web profesional construido con tecnologías modernas para mostrar proyectos, habilidades y experiencia como desarrollador full-stack.

## Tecnologías Principales

- **Next.js 16** - Framework React con App Router y Turbopack
- **TypeScript** - Tipado estático para mayor confiabilidad
- **Tailwind CSS v4** - Estilos utilitarios modernos
- **HeroUI** - Componentes UI optimizados para React 19
- **Framer Motion** - Animaciones fluidas y transiciones
- **Lucide React** - Sistema de iconos consistente

## Características

- Diseño responsivo optimizado para todos los dispositivos
- Navegación suave entre secciones con scroll tracking
- Modo oscuro por defecto con sistema de colores OKLCH
- Animaciones sutiles y profesionales
- SEO optimizado con metadata completa
- Rendimiento optimizado con Static Site Generation
- Formulario de contacto funcional

## Estructura del Proyecto

```
portfolio/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── layout.tsx         # Layout principal y metadata
│   │   ├── page.tsx           # Página de inicio
│   │   └── globals.css        # Estilos globales
│   ├── components/
│   │   ├── navbar/            # Navegación principal
│   │   ├── footer/            # Pie de página
│   │   ├── sections/          # Secciones del portfolio
│   │   └── providers/         # Providers de contexto
│   └── lib/                   # Utilidades y helpers
├── public/                     # Recursos estáticos
└── hero.ts                     # Configuración de Tailwind/HeroUI
```

## Desarrollo Local

### Prerrequisitos

- Node.js 18.17 o superior
- npm, yarn, pnpm o bun

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/angeldqr/portfolio.git

# Navegar al directorio
cd portfolio

# Instalar dependencias
npm install
```

### Ejecutar en Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

### Compilar para Producción

```bash
npm run build
npm start
```

## Secciones

- **Inicio** - Presentación principal y CTAs
- **Sobre mí** - Biografía, stack técnico y soft skills
- **Proyectos** - Showcase de proyectos destacados con previews
- **Cursos** - Certificaciones y formación continua
- **Contacto** - Formulario y enlaces de redes sociales

## Despliegue

El proyecto está optimizado para desplegarse en [Vercel](https://vercel.com):

1. Conecta tu repositorio de GitHub
2. Vercel detectará automáticamente la configuración de Next.js
3. Despliega con un solo click

Cualquier push a la rama `main` desplegará automáticamente los cambios.

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## Contacto

Ángel Quintero - Desarrollador Web

- GitHub: [@angeldqr](https://github.com/angeldqr)
- LinkedIn: [Ángel Quintero](https://linkedin.com/in/angeldqr)
- Email: angelquinteror102@gmail.com
