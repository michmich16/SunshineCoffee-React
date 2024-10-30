import { useEffect, useState } from "react";

export const SingleProduct = ({ productId, onClose }) => {
    const [product, setProduct] = useState(null);

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
            <p>Price: {product.price} DKK</p>
            <p>{product.description}</p>
            <button>Add to cart</button>
        </div>
    );
};
