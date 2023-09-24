import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { projectsActions } from "store/action-creators/projects";
import { Project } from "types";
import "./style.scss";

export default function ProjectCard({ project }: { project: Project }) {
  const handleDelete = () => {
    projectsActions.delete({ id: project.id });
  };

  return (
    <Link className="project-card" to={`./projects/${project.id}`}>
      <div className="card-content">
        <h2 className="project-card__title">{project.title}</h2>
        <p className="project-card__description">{project.description}</p>
        <button className="project-card__delete-btn" onClick={handleDelete}>
          <X />
        </button>
      </div>
    </Link>
  );
}
