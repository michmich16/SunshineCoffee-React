import s from './ShopNow.module.scss';
import { NavLink } from 'react-router-dom';

export const ShopNow = () => {

    return (
        <section className={s.shopNowStyle}>
            <h2>Shop Now</h2>
            <p>Our delicious coffees wil get you brewing the best cup of coffee you ever tasted in <br /> no time at all. And the best part of it? It is totally organic, fair trade and <br /> sustainably sourced. So get brewing</p>
            <button><NavLink to={'/ProductsPage'}>Go to products</NavLink></button>
        </section>
    )
}