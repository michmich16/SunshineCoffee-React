import { Routes, Route } from "react-router-dom";
import { Paths } from "./Paths";
import { MainLayout } from "../Layouts/MainLayout";
import { LandingPage } from "../pages/LandingPage";
import { ProductsPage } from "../pages/ProductsPage";
import { PageNotFound } from "../pages/PageNotFound";

export const PageRouter = () => {
  return (
    <Routes>
      <Route path={Paths.home} element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path={`/productspage`} element={<ProductsPage />} />
        <Route path={Paths.pageNotFound} element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
