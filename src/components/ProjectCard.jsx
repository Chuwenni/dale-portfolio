export default function ProjectCard({ project, number }) {
  return (
    <article className="project-card">
      <div className="project-number">{String(number).padStart(2, "0")}</div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        {project.link && (
          <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
            View Project →
          </a>
        )}
      </div>
    </article>
  );
}
