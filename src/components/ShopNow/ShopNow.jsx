import s from './ShopNow.module.scss';
import { useNavigate } from "react-router-dom";

export const ShopNow = () => {
    const navigate = useNavigate();

    const gotoProduct = () =>{
        navigate("/productspage"); // redirect to checkoutPage
    }

    return (
        <section className={s.shopNowStyle}>
            <h2>Shop Now</h2>
            <p>Our delicious coffee will get you brewing the best cup of coffee you ever tasted in <br /> no time at all. And the best part of it? It is totally organic, fair trade and <br /> sustainably sourced. So get brewing</p>
            <button onClick={gotoProduct}>Go to products</button>
        </section>
    )
}