import s from './Products.module.scss';
import { useEffect, useState } from "react";
import { SingleProduct } from '../SingleProduct/SingleProduct';

export const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);

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
                    <figure key={item.id} onClick={() => handleFigureClick(item.id)}>
                        <h4>{item.name}</h4>
                        <img src={item.image} alt={item.name} />
                        <p>roast: {item.roast}</p>
                        <p>{item.price} DKK</p>
                        <button onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering figure click
                            addToCart(item);
                        }}>Add To Cart</button>
                    </figure>
                ))}
            </div>
        </section>
    );
};
