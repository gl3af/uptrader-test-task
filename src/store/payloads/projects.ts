import { Project } from "types";

export type AddProjectPayload = Pick<Project, "title" | "description">;
export type SetProjectsPayload = Project[];
export type EditProjectPayload = Project;
export type DeleteProjectPayload = Pick<Project, "id">;
