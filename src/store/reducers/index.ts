import { combineReducers } from "redux";
import { commentsReducer } from "./commentsReducer";
import { dragReducer } from "./dragReducer";
import { projectsReducer } from "./projectsReducer";
import { subtasksReducer } from "./subtasksReducer";
import { tasksReducer } from "./tasksReducer";

export const rootReducer = combineReducers({
  projects: projectsReducer,
  grad: dragReducer,
  tasks: tasksReducer,
  subtasks: subtasksReducer,
  comments: commentsReducer,
});
