import { useStore } from "hooks/useStore";
import MainPage from "pages/MainPage";
import TasksPage from "pages/TasksPage";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  useStore();
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/projects/:id" element={<TasksPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
