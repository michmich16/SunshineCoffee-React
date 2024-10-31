import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

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
        <div>
            <button onClick={onClose}>Back to products</button>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>Roast: {product.roast}</p>
            <p>{product.description}</p>
            <p>Price: {product.price} DKK</p>
            <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
    );
};
