export const SET_PROJECTS = "SET_PROJECTS";
export const ADD_PROJECT = "ADD_PROJECT";
export const EDIT_PROJECT = "EDIT_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";

export type ProjectsActionTypes =
  | typeof ADD_PROJECT
  | typeof DELETE_PROJECT
  | typeof EDIT_PROJECT
  | typeof SET_PROJECTS;
