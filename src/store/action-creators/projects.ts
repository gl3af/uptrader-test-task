import { bindActionCreators } from "redux";

import { store } from "store";

import {
  ADD_PROJECT,
  DELETE_PROJECT,
  EDIT_PROJECT,
  SET_PROJECTS,
} from "../actions/projects";

import {
  AddProjectPayload,
  DeleteProjectPayload,
  EditProjectPayload,
  SetProjectsPayload,
} from "../payloads/projects";

const setProjects = (payload: SetProjectsPayload) => {
  return {
    type: SET_PROJECTS,
    payload,
  } as const;
};

const addProject = (payload: AddProjectPayload) => {
  return {
    type: ADD_PROJECT,
    payload,
  } as const;
};

const editProject = (payload: EditProjectPayload) => {
  return {
    type: EDIT_PROJECT,
    payload,
  } as const;
};

const deleteProject = (payload: DeleteProjectPayload) => {
  return {
    type: DELETE_PROJECT,
    payload,
  } as const;
};

export const projectsActions = bindActionCreators(
  {
    set: setProjects,
    add: addProject,
    edit: editProject,
    delete: deleteProject,
  },
  store.dispatch
);
