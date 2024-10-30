import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Cart } from '../components/Cart/Cart';
import { Footer } from "../components/Footer/Footer";
import { Cookies } from "../components/Cookies/Cookies";
export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Cookies />
      <Footer />
    </>
  );
};
