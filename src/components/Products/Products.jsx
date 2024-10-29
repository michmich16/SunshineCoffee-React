import s from './Products.module.scss'
import { useContext, useEffect, useState } from "react";

export const Products = () =>{

    const [products, setProducts] = useState()

    // const {cartData, addToCart} = useContext(CartContext)

    
    useEffect(() => {
        fetch('localhost/products')
        .then(res => res.json())
        .then((data) => setProducts(data));
        
    }, [])
    
    console.log("products is", products);

    return(
        <>
        <section>
            <h2>Our picks for you</h2>
        </section>
        </>
    )
}