import { Task } from "types";

export type SetTasksPayload = Task[];
export type AddTaskPayload = Omit<
  Task,
  "id" | "dateCreated" | "dateCreated" | "dateEnding" | "files"
>;
export type MoveTaskPayload = Pick<Task, "id" | "status">;
export type EditTaskPayload = Pick<
  Task,
  "id" | "title" | "description" | "priority"
>;
export type DeleteTaskPayload = Pick<Task, "id">;
