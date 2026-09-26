import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  Lightbulb,
  ListTodo,
  ShoppingCart,
  Film,
} from "lucide-react";

const nav = [
  ["/", "Dashboard", LayoutDashboard],
  ["/projects", "Projects", FolderKanban],
  ["/ideas", "Ideas", Lightbulb],
  ["/todo", "To-Do", ListTodo],
  ["/purchases", "Purchases", ShoppingCart],
  ["/content", "Content", Film],
];

export default function AppShell({ children }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">HQ</span>
          <div>
            <strong>PROJECT HQ</strong>
            <small>Ideas → Projects → Done</small>
          </div>
        </div>

        <nav>
          {nav.map(([to, label, Icon]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="main">{children}</main>
    </div>
  );
}
