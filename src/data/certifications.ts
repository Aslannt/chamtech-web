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
  content: Record<CertificationLocale, LocalizedCertification>;
};

export const certifications: Certification[] = [
  {
    id: "oci-ai-foundations-2025",
    badge: "OCI",
    issuer: "Oracle University",
    content: {
      en: {
        title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        type: "Professional certification",
        issued: "Issued in 2025",
        summary:
          "A foundational credential connecting artificial intelligence concepts with the Oracle Cloud Infrastructure ecosystem.",
        focus: "Cloud & AI",
      },
      es: {
        title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        type: "Certificación profesional",
        issued: "Emitida en 2025",
        summary:
          "Una credencial fundamental que conecta conceptos de inteligencia artificial con el ecosistema de Oracle Cloud Infrastructure.",
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
    id: "scrum-fundamentals-2023",
    badge: "SFC",
    issuer: "SCRUMstudy",
    content: {
      en: {
        title: "Scrum Fundamentals Certified",
        type: "Professional certification",
        issued: "Issued in 2023",
        summary:
          "Foundational knowledge of Scrum principles, responsibilities and iterative software delivery practices.",
        focus: "Agile delivery",
      },
      es: {
        title: "Scrum Fundamentals Certified",
        type: "Certificación profesional",
        issued: "Emitida en 2023",
        summary:
          "Conocimientos fundamentales sobre principios Scrum, responsabilidades y prácticas iterativas de entrega de software.",
        focus: "Entrega ágil",
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
