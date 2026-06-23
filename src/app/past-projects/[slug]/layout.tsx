import type { Metadata } from "next";
import { pastProjects } from "@/src/data/past-projects";

export function generateStaticParams() {
  return pastProjects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = pastProjects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Past Project" };
  return {
    title: `${project.name} | Past Projects | Siklab`,
    description: project.description.replace(/<[^>]*>/g, ""),
    openGraph: {
      title: `${project.name} | Siklab`,
      description: project.description.replace(/<[^>]*>/g, ""),
    },
  };
}

export default function ProjectLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
