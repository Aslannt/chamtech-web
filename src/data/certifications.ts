export type CertificationLocale = "en" | "es";

type LocalizedCertification = {
  title: string;
  type: string;
  issued: string;
  summary: string;
  focus: string;
};

export type Certification = {
  id: string;
  badge: string;
  issuer: string;
  credentialUrl?: string;
  credentialCode?: string;
  content: Record<CertificationLocale, LocalizedCertification>;
};

export const certifications: Certification[] = [
  {
    id: "oci-ai-foundations-2025",
    badge: "OCI",
    issuer: "Oracle",
    content: {
      en: {
        title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        type: "Professional certification",
        issued: "Issued March 3, 2026 · Valid until March 3, 2028",
        summary:
          "A foundational credential connecting artificial intelligence, machine learning, generative AI and Oracle Cloud Infrastructure services.",
        focus: "Cloud & AI",
      },
      es: {
        title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        type: "Certificación profesional",
        issued: "Emitida el 3 de marzo de 2026 · Válida hasta el 3 de marzo de 2028",
        summary:
          "Una credencial fundamental que conecta inteligencia artificial, machine learning, IA generativa y servicios de Oracle Cloud Infrastructure.",
        focus: "Cloud e IA",
      },
    },
  },
  {
    id: "aws-cloud-essentials-2023",
    badge: "AWS",
    issuer: "AWS Training and Certification",
    content: {
      en: {
        title: "AWS Foundations: Getting Started with the AWS Cloud Essentials",
        type: "Course completion",
        issued: "Completed September 26, 2023",
        summary:
          "Introductory AWS cloud training focused on the essential concepts of working with the AWS Cloud.",
        focus: "Cloud fundamentals",
      },
      es: {
        title: "Fundamentos de AWS: introducción a los aspectos esenciales de la nube de AWS",
        type: "Curso completado",
        issued: "Completado el 26 de septiembre de 2023",
        summary:
          "Formación introductoria enfocada en los conceptos esenciales para trabajar con la nube de AWS.",
        focus: "Fundamentos cloud",
      },
    },
  },
  {
    id: "docker-professional-2024",
    badge: "DKR",
    issuer: "Código Facilito",
    credentialCode: "2c8ff266-e2e5-43aa-9366-1fb203e6d0e8",
    content: {
      en: {
        title: "Professional Docker Course",
        type: "Course completion",
        issued: "Completed November 24, 2024",
        summary:
          "Practical training in container images, repeatable environments and Docker-based software delivery workflows.",
        focus: "Containers",
      },
      es: {
        title: "Curso Profesional de Docker",
        type: "Curso completado",
        issued: "Completado el 24 de noviembre de 2024",
        summary:
          "Formación práctica en imágenes, entornos reproducibles y flujos de entrega de software basados en Docker.",
        focus: "Contenedores",
      },
    },
  },
  {
    id: "oracle-next-education-2024",
    badge: "ONE",
    issuer: "Oracle Next Education + Alura Latam",
    credentialUrl:
      "https://app.aluracursos.com/user/deivid-vanegas/program/16/certificate",
    content: {
      en: {
        title: "Oracle Next Education Program Completion",
        type: "Structured learning program",
        issued: "Completed July 6, 2024",
        summary:
          "Completed six learning tracks with an estimated workload of 286 hours across software development and professional skills.",
        focus: "286 hours · 6 tracks",
      },
      es: {
        title: "Finalización del programa Oracle Next Education",
        type: "Programa de formación estructurado",
        issued: "Completado el 6 de julio de 2024",
        summary:
          "Finalización de seis formaciones con una carga estimada de 286 horas en desarrollo de software y habilidades profesionales.",
        focus: "286 horas · 6 formaciones",
      },
    },
  },
];
