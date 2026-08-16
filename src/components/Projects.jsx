import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projectData } from "../data/siteData";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <SectionTitle
        eyebrow="SELECTED WORK"
        title="Projects"
        description="A few examples of the ideas, tools, and learning projects I’ve been building and improving." 
      />

      <div className="projects-list">
        {projectData.map((project, index) => (
          <ProjectCard
            key={`${project.title}-${index}`}
            project={project}
            number={index + 1}
          />
        ))}
      </div>
    </section>
  );
}
