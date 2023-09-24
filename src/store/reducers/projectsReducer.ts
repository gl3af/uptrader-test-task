import { Project } from "types";
import { v4 as uuid } from "uuid";

import {
  ADD_PROJECT,
  DELETE_PROJECT,
  EDIT_PROJECT,
  ProjectsActionTypes,
  SET_PROJECTS,
} from "store/actions/projects";
import {
  AddProjectPayload,
  DeleteProjectPayload,
  SetProjectsPayload,
} from "store/payloads/projects";

type ProjectsState = {
  projects: Project[];
};

const initialState: ProjectsState = {
  projects: [],
};

export const projectsReducer = (
  state = initialState,
  action: { type: ProjectsActionTypes; payload: unknown }
): ProjectsState => {
  const { type, payload } = action;

  switch (type) {
    case SET_PROJECTS: {
      const projects = payload as SetProjectsPayload;

      return {
        projects,
      };
    }

    case ADD_PROJECT: {
      const { title, description } = payload as AddProjectPayload;

      const project: Project = {
        id: uuid(),
        title,
        description,
      };

      return {
        ...state,
        projects: [...state.projects, project],
      };
    }

    case EDIT_PROJECT: {
      return state;
    }

    case DELETE_PROJECT: {
      const { id } = payload as DeleteProjectPayload;

      return {
        projects: state.projects.filter((project) => project.id !== id),
      };
    }

    default:
      return state;
  }
};
