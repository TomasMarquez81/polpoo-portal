import { Outlet, NavLink } from "react-router-dom";
import { routes } from "../router/routes";

const navItemClass = ({ isActive }: { isActive: boolean }) =>
  [
    "text-sm transition-colors",
    isActive
      ? "text-blue-600 font-semibold"
      : "text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400",
  ].join(" ");

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <div className="font-black tracking-tight">Polpoo Portal</div>
            <nav className="hidden md:flex items-center gap-5">
              <NavLink to={routes.dashboard} className={navItemClass}>
                Dashboard
              </NavLink>
              <NavLink to={routes.shipments} className={navItemClass}>
                Shipments
              </NavLink>
              <NavLink to={routes.reports} className={navItemClass}>
                Reports
              </NavLink>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900"
              onClick={() => document.documentElement.classList.toggle("dark")}
            >
              Toggle dark
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
};