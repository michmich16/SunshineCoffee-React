import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import {Cart} from '../components/Cart/Cart';
import { Footer } from "../components/Footer/Footer";
export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Cart/>
      <Outlet />
      <Footer />
    </>
  );
};
