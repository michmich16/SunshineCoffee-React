import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import s from './SingleProduct.module.scss'
import returnIcon from '../../assets/images/icons8-back-48.png'

export const SingleProduct = ({ productId, onClose }) => {
    const [product, setProduct] = useState(null);
    const { cartData, addToCart } = useContext(CartContext)

    useEffect(() => {
        fetch(`http://127.0.0.1:8081/products/${productId}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [productId]);

    if (!product) return <p>Loading...</p>;

    return (
        <>
            <button className={s.returnButton} onClick={onClose}><img src={returnIcon} alt="" /></button>
        <div className={s.singleProductSyle}>
            <div className={s.singleProductImgContainer}>
                <img src={product.image} alt={product.name} />
            </div>
            <div className={s.singleProductInfoContainer}>
                <h2>{product.name}</h2>
                <p>Roast: {product.roast}</p>
                <p>{product.description}</p>
                <p className={s.singleProductPrice}>Price: {product.price} DKK</p>
                <button className={s.addToCartButton} onClick={() => addToCart(product)}>Add to cart</button>
            </div>
        </div>
        </>
    );
};
