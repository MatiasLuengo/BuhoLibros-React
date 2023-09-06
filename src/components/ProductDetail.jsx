import { ItemCount } from "./ItemCount";
import { ErrorMsj } from "./ErrorMsj";
import { useEffect, useState, useContext, useRef } from "react";
import { CartContext } from "../context/cartContext";

export const ProductDetail = ({product}) =>{
    const cartContext = useContext(CartContext);
    const [stockView, setStockView] = useState(product.stock);
    const stockViewRef = useRef(product.stock);
    let stockInCart = undefined;

    useEffect(()=>{
        stockInCart = cartContext.itemsInCart.find(item => item.id === product.id);
        if(stockInCart){
            setStockView(product.stock - stockInCart.purchaseQuantity);
            stockViewRef.current = (product.stock - stockInCart.purchaseQuantity);
        }
    }, [product, cartContext])


    if(Object.keys(product).length == 1){
        return(
            <ErrorMsj msj={"Lo sentimos, no se encontró este producto"}></ErrorMsj>
        );
    }else{
        return(
            <article className="productDetail" key={product.id}>
                <div className="saleContainer">
                    <h2 className="productTitle">{product.title}</h2>
                    <h3 className="productPrice">$ {product.price}</h3>
                    <p>Disponible/s: {stockViewRef.current}</p>
                    <ItemCount initial={1} itemObj={product}></ItemCount>
                </div>
                <div className="descriptionContainer">
                    <img src={product.image} alt=""></img>
                    <p>{product.description}</p>
                    <li>Autor: {product.author}</li>
                </div>
            </article>
        );
    }
}