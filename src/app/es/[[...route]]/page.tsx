import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Home from "@/app/page";
import PlaygroundPage from "@/app/playground/page";
import { TranslationBoundary } from "@/components/i18n/translation-boundary";
import { ProjectCaseStudy } from "@/components/projects/project-case-study";
import { getProjectBySlug, projects } from "@/data/projects";
import { translate } from "@/lib/i18n";

type SpanishPageProps = { params: Promise<{ route?: string[] }> };

export function generateStaticParams() {
  return [
    { route: [] },
    { route: ["playground"] },
    ...projects.map((project) => ({ route: ["projects", project.slug] })),
  ];
}

export async function generateMetadata({ params }: SpanishPageProps): Promise<Metadata> {
  const route = (await params).route ?? [];
  if (route.length === 0) return {
    title: "Deivid Vanegas | Desarrollador Backend e Integración",
    description: "Portafolio profesional de Deivid Vanegas: desarrollo backend, Java, Spring Boot, MuleSoft e integración empresarial.",
    alternates: { canonical: "/es", languages: { en: "/", es: "/es" } },
  };
  if (route[0] === "playground" && route.length === 1) return {
    title: "Simulador de Sincronización ChamTech",
    description: "Simulación interactiva de una sincronización de órdenes entre MuleSoft y Spring Boot.",
    alternates: { canonical: "/es/playground", languages: { en: "/playground", es: "/es/playground" } },
  };
  if (route[0] === "projects" && route.length === 2) {
    const project = getProjectBySlug(route[1]);
    if (!project) return {};
    return {
      title: project.name,
      description: translate("es", project.description),
      alternates: {
        canonical: `/es/projects/${project.slug}`,
        languages: { en: `/projects/${project.slug}`, es: `/es/projects/${project.slug}` },
      },
    };
  }
  return {};
}

export default async function SpanishPage({ params }: SpanishPageProps) {
  const route = (await params).route ?? [];
  let content: React.ReactNode;
  if (route.length === 0) content = <Home />;
  else if (route[0] === "playground" && route.length === 1) content = <PlaygroundPage />;
  else if (route[0] === "projects" && route.length === 2) {
    const project = getProjectBySlug(route[1]);
    if (!project) notFound();
    content = <ProjectCaseStudy project={project} />;
  } else notFound();
  return <TranslationBoundary locale="es">{content}</TranslationBoundary>;
}
