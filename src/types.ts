export type Subtask = {
  id: string;
  taskId: string;
  name: string;
  completed: boolean;
};

export type Comment = {
  id: string;
  parentId: string | null;
  taskId: string | null;
  text: string;
};

const statuses = ["queue", "development", "done"] as const;

export type Status = (typeof statuses)[number];
export type Priority = "low" | "normal" | "high";

export type Task = {
  id: string;
  projectId: string;
  taskNumber: number;
  title: string;
  description: string;
  dateCreated: Date;
  priority: Priority;
  status: Status;

  dateEnding?: Date;
  files: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
};
