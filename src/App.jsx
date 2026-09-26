import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import DashboardPage from "./pages/DashboardPage";
import ProjectsPage from "./pages/ProjectsPage";
import IdeasPage from "./pages/IdeasPage";
import TodoPage from "./pages/TodoPage";
import PurchasesPage from "./pages/PurchasesPage";
import ContentPage from "./pages/ContentPage";
import ProjectPage from "./pages/ProjectPage";

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
        <Route path="/ideas" element={<IdeasPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/purchases" element={<PurchasesPage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  );
}
