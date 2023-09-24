import InputGroup from "components/InputGroup";
import PageContainer from "components/PageContainer";
import Title from "components/Title";
import { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "store/hooks";
import Tasks from "./components/Tasks";
import "./style.scss";

export default function TasksPage() {
  const { id } = useParams();
  const [filter, setFilter] = useState<string>("");

  const projects = useAppSelector((state) => state.projects.projects);
  const project = useMemo(
    () => projects.find((project) => project.id === id!),
    [projects, id]
  );

  const allTasks = useAppSelector((state) => state.tasks.tasks);
  const projectTasks = useMemo(
    () => allTasks.filter((task) => task.projectId === id!),
    [allTasks, id]
  );

  const filteredTasks = useMemo(
    () =>
      projectTasks.filter(
        (task) =>
          task.taskNumber.toString() === filter ||
          task.title.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, projectTasks]
  );

  const queueTasks = useMemo(
    () => filteredTasks?.filter((task) => task.status === "queue"),
    [filteredTasks]
  );

  const developmentTasks = useMemo(
    () => filteredTasks?.filter((task) => task.status === "development"),
    [filteredTasks]
  );

  const doneTasks = useMemo(
    () => filteredTasks?.filter((task) => task.status === "done"),
    [filteredTasks]
  );

  if (!project) return <p>Not Found</p>;

  return (
    <PageContainer>
      <Helmet>
        <title>{`${project?.title}`} | Tasks</title>
      </Helmet>
      <section className="tasks-page">
        <div className="tasks-page__header">
          <div>
            <Title>{project.title}</Title>
            <Link to="/" className="tasks-page__home-link">
              Home
            </Link>
          </div>
          <InputGroup
            id="search"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search..."
          />
        </div>

        <div className="tasks-board">
          <Tasks tasks={queueTasks} status="queue" />
          <Tasks tasks={developmentTasks} status="development" />
          <Tasks tasks={doneTasks} status="done" />
        </div>
      </section>
    </PageContainer>
  );
}
