import { Routes, Route } from "react-router-dom";
import { Paths } from "./Paths";
import { MainLayout } from "../Layouts/MainLayout";
import { LandingPage } from "../pages/LandingPage";
import { ProductsPage } from "../pages/ProductsPage";
import { PageNotFound } from "../pages/PageNotFound";
import { CartContextProvider } from "../context/CartContext";
import { AccountPage } from "../pages/AccountPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { CookiePolicy } from "../pages/CookiesPolicyPage";
import { ReturnPolicy } from "../pages/ReturnPolicyPage";
 
export const PageRouter = () => {
  return (
    <CartContextProvider>
      <Routes>
        <Route path={Paths.home} element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path={`/productspage`} element={<ProductsPage />} />
          <Route path={`/accountpage`} element={<AccountPage />} />
          <Route path={`/checkoutpage`} element={<CheckoutPage />} />
          <Route path={`/cookiespolicypage`} element={<CookiePolicy />} />
          <Route path={`/returnpolicypage`} element={<ReturnPolicy />} />
          <Route path={Paths.pageNotFound} element={<PageNotFound />} />
        </Route>
      </Routes>
    </CartContextProvider>
  );
};
