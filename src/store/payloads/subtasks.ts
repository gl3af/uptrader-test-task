import { Subtask } from "types";

export type SetSubtasksPayload = Subtask[];
export type AddSubtaskPayload = Pick<Subtask, "taskId" | "name">;
export type FinishSubtaskPayload = Pick<Subtask, "id">;
