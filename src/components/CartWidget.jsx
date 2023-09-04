import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

export const CartWidget = () => {

    const cartContext = useContext(CartContext);
    const [isEmpty, setIsEmpty] = useState(true)
    useEffect(()=>{
        cartContext.cartQuantity != 0? setIsEmpty(false) : setIsEmpty(true)
    },[cartContext.cartQuantity]);

    return (
        <Link to={`/carrito`} className="CartWidget">
            <i className='bx bx-cart'></i>
            {!isEmpty && <p>{cartContext.cartQuantity}</p>}
        </Link>
    );
};