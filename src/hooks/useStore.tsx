import { useEffect } from "react";
import { commentsActions } from "store/action-creators/comments";

import { projectsActions } from "store/action-creators/projects";
import { subtasksActions } from "store/action-creators/subtasks";
import { tasksActions } from "store/action-creators/tasks";

import { Comment, Project, Subtask, Task } from "types";

type StoreResponse = {
  projects: Project[];
  tasks: Task[];
  subtasks: Subtask[];
  comments: Comment[];
};

export const useStore = () => {
  useEffect(() => {
    const { projects, tasks, subtasks, comments }: StoreResponse = JSON.parse(
      localStorage.getItem("store") || "{}"
    );

    const projectsData = projects ? projects : [];
    const tasksData = tasks ? tasks : [];
    const subtasksData = subtasks ? subtasks : [];
    const commentsData = comments ? comments : [];

    projectsActions.set(projectsData);
    tasksActions.set(tasksData);
    subtasksActions.set(subtasksData);
    commentsActions.set(commentsData);
  }, []);
};
