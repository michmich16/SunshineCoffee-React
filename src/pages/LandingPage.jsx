import { Header } from "../components/Header/Header"
import { MottoBanner } from "../components/MottoBanner/MottoBanner"
import { ShopNow } from "../components/ShopNow/ShopNow"
import { Testimonies } from "../components/Testimonies/Testimonies"
import { Cart } from "../components/Cart/Cart"

export const LandingPage = () => {
  return (
    <>
      <Header></Header>
      <MottoBanner></MottoBanner>
      <ShopNow></ShopNow>
      <Testimonies></Testimonies>
    </>
  )
}