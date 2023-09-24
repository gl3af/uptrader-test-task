import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./reducers";

export const store = createStore(rootReducer);

store.subscribe(() => {
  const storeData = {
    projects: store.getState().projects.projects,
    tasks: store.getState().tasks.tasks,
    subtasks: store.getState().subtasks.subtasks,
    comments: store.getState().comments.comments,
  };

  localStorage.setItem("store", JSON.stringify(storeData));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
