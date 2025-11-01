import SectionHeader from "@/components/ui/section-header";
import ProjectCard from "./_components/project-card";
import { projectsData } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects | Victor Kang",
  description:
    "Browse all of Victor Kang's development projects including web applications, mobile apps, UI/UX designs, and game development work.",
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-linear-to-b from-sky-900 to-indigo-800">
      <div className="relative px-4 md:px-6 lg:px-10 pt-24 md:pt-32 lg:pt-64 pb-16 md:pb-24 lg:pb-32 max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <SectionHeader className="text-slate-100">
            My Projects
          </SectionHeader>
          <p className="text-slate-200 text-base md:text-lg max-w-2xl mx-auto">
            A collection of my web development, mobile apps, UI/UX designs, and
            game development projects from personal work and academic courses.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Project Count */}
        <div className="text-center mt-8 md:mt-10 lg:mt-12">
          <p className="text-slate-500 text-sm">
            Showing {projectsData.length} projects
          </p>
        </div>
      </div>
    </main>
  );
}
