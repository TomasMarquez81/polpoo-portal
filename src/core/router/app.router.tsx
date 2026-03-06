import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { DashboardScene } from "../../scenes/dashboard/dashboard.scene";
import { ShipmentsScene } from "../../scenes/shipments/shipments.scene";
import { ReportsScene } from "../../scenes/reports/reports.scene";
import { MainLayout } from "../layout/main.layout";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={routes.dashboard} element={<DashboardScene />} />
        <Route path={routes.shipments} element={<ShipmentsScene />} />
        <Route path={routes.reports} element={<ReportsScene />} />
      </Route>

      <Route path="*" element={<Navigate to={routes.dashboard} replace />} />
    </Routes>
  );
};