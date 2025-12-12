"use client";

import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Lightbulb,
  Users,
  MessageSquare,
  TrendingUp,
  BookOpen,
  Coffee,
  Terminal,
} from "lucide-react";

export default function AboutSection() {
  const technicalSkills = [
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Node.js", icon: "🟢" },
    { name: "Django", icon: "🎯" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Git", icon: "📦" },
  ];

  const softSkills = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Comunicación efectiva",
      description: "Facilito la colaboración en equipo mediante una comunicación clara y constructiva.",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Visión de mejora continua",
      description: "Propongo upgrades y optimizaciones que eleven la calidad del proyecto.",
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Pensamiento crítico",
      description: "Anticipo posibles problemas y sugiero precauciones para evitar errores futuros.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Colaboración activa",
      description: "Contribuyo proactivamente en todas las fases del desarrollo del proyecto.",
    },
  ];

  const interests = [
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Caminatas reflexivas",
      description: "Salir a caminar me ayuda a despejar la mente y encontrar soluciones creativas a bugs complejos.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Aprendizaje continuo",
      description: "Estudio constantemente documentación y mejores prácticas en desarrollo.",
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Experimentación",
      description: "Me apasiona probar nuevas tecnologías y patrones de código en proyectos personales.",
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20">
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 space-y-16">
        {/* Título de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Sobre mí
          </h2>
          <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl">
            Desarrollador web apasionado por crear experiencias digitales significativas
          </p>
        </motion.div>

        {/* Quien soy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
            <Code2 className="w-8 h-8 text-primary" />
            ¿Quién soy?
          </h3>
          <Card className="bg-default-50">
            <CardBody className="p-8 space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                Soy <span className="font-semibold text-foreground">Ángel Quintero</span>, un desarrollador web de 19 años
                que actualmente estudia en la{" "}
                <span className="text-primary font-medium">Universidad Simón Bolívar de Barranquilla</span>.
              </p>
              <p>
                Para mí, el desarrollo de software es mucho más que escribir código: es el arte de{" "}
                <span className="text-violet-400 font-medium">resolver problemas reales</span> mediante{" "}
                <span className="text-blue-400 font-medium">soluciones elegantes y escalables</span>. Creo firmemente que
                cada línea de código debe tener un propósito claro y contribuir a crear{" "}
                <span className="text-green-400 font-medium">experiencias excepcionales</span> para los usuarios.
              </p>
              <p>
                Me motiva la idea de que la tecnología puede{" "}
                <span className="text-pink-400 font-medium">transformar vidas</span> y{" "}
                <span className="text-yellow-400 font-medium">simplificar procesos complejos</span>. Por eso, cada proyecto
                es una oportunidad para aprender, innovar y aportar valor real.
              </p>
            </CardBody>
          </Card>
        </motion.div>

        {/* Habilidades Técnicas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
            <Database className="w-8 h-8 text-primary" />
            Stack Tecnológico
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="bg-default-50 hover:bg-default-100 transition-colors cursor-default">
                  <CardBody className="p-6 flex flex-col items-center gap-3">
                    <span className="text-4xl">{skill.icon}</span>
                    <span className="font-semibold text-foreground">{skill.name}</span>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Habilidades Blandas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            Habilidades Blandas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-default-50 h-full">
                  <CardBody className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {skill.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-foreground">{skill.title}</h4>
                    </div>
                    <p className="text-foreground/70 leading-relaxed">{skill.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Intereses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
            <Lightbulb className="w-8 h-8 text-primary" />
            Más allá del código
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-default-50 h-full hover:border-primary/50 transition-colors">
                  <CardBody className="p-6 space-y-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit">
                      {interest.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">{interest.title}</h4>
                    <p className="text-foreground/70 leading-relaxed">{interest.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
