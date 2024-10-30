import { Routes, Route } from "react-router-dom";
import { Paths } from "./Paths";
import { MainLayout } from "../Layouts/MainLayout";
import { LandingPage } from "../pages/LandingPage";
import { ProductsPage } from "../pages/ProductsPage";
import { PageNotFound } from "../pages/PageNotFound";
import { CartContextProvider } from "../context/CartContext"

export const PageRouter = () => {
  return (
    <CartContextProvider>
      <Routes>
        <Route path={Paths.home} element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path={`/productspage`} element={<ProductsPage />} />
          <Route path={Paths.pageNotFound} element={<PageNotFound />} />
        </Route>
      </Routes>
    </CartContextProvider>
  );
};
