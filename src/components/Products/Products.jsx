import s from './Products.module.scss';
import { useEffect, useState, useContext } from "react";
import { SingleProduct } from '../SingleProduct/SingleProduct';
import { CartContext } from "../../context/CartContext";

export const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const { cartData, addToCart } = useContext(CartContext)

    useEffect(() => {
        fetch('http://127.0.0.1:8081/products')
            .then(res => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleFigureClick = (id) => {
        setSelectedProductId(id);
    };

    const closeSingleProduct = () => {
        setSelectedProductId(null);
    };

    if (selectedProductId) {
        return <SingleProduct productId={selectedProductId} onClose={closeSingleProduct} />;
    }

    return (
        <section className={s.productsStyle}>
            <h2>Our picks for you</h2>
            <div className={s.productsLayout}>
                {products.map((item) => (
                    <figure key={item.id}>
                        <h4>{item.name}</h4>
                        <img src={item.image} alt={item.name} onClick={() => handleFigureClick(item.id)} />
                        <p>roast: {item.roast}</p>
                        <p>{item.price} DKK</p>
                        <button onClick={() => addToCart(item)}>Add to cart</button>
                    </figure>
                ))}
            </div>
        </section>
    );
};
