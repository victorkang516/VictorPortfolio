import SectionHeader from "../../components/ui/section-header";
import ProjectCard from "../projects/_components/project-card";
import { projectsData } from "../../data/projects";
import { ButtonLink } from "@/components/ui/button-link";

const FeaturedProjects = () => {
  return (
    <div
      className="relative text-black overflow-hidden bg-linear-to-br from-sky-900 to-indigo-800"
      id="projects"
    >
      <div className="relative px-4 md:px-6 lg:px-10 py-16 md:py-32 lg:py-40 max-w-6xl mx-auto">
        <SectionHeader className="text-slate-100 text-center mb-12 md:mb-16 lg:mb-20">
          Featured Projects
        </SectionHeader>
        {/* Grid Layout - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More Projects Button */}
        <div className="flex justify-center mt-12 md:mt-16 lg:mt-20">
          <ButtonLink
            href="/projects"
            variant="outline"
            className="px-8 py-6 text-base"
          >
            More Projects
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
