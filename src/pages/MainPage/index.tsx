import { Helmet } from "react-helmet";

import Modal from "components/Modal";
import PageContainer from "components/PageContainer";
import Title from "components/Title";
import { useModal } from "hooks/useModal";
import { Plus } from "lucide-react";
import { useAppSelector } from "store/hooks";
import NewProjectForm from "./components/NewProjectForm";
import ProjectCard from "./components/ProjectCard";
import "./style.scss";

export default function MainPage() {
  const [active, toggleModal] = useModal();
  const projects = useAppSelector((state) => state.projects.projects);

  return (
    <PageContainer>
      {active && (
        <Modal active={active} toggle={toggleModal}>
          <NewProjectForm toggleModal={toggleModal} />
        </Modal>
      )}
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <section className="projects-page">
        <Title>Projects</Title>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <button className="projects-page__add-new" onClick={toggleModal}>
            <Plus />
          </button>
        </div>
      </section>
    </PageContainer>
  );
}
