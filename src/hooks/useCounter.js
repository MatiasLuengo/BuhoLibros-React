import {useState, useEffect, useRef} from "react";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";

export function useCounter (outSideStock, initial, itemObj) {
    const cartContext = useContext(CartContext);

    const [purchaseQuantity, setPurchaseQuantity] = useState(initial);
    const purchaseRef = useRef(initial);
    const [stock, setStock] = useState(outSideStock);
    const [stockFlag, setStockFlag] = useState(true);

    const addToTrolley = () =>{
        if(purchaseQuantity < stock){
            setPurchaseQuantity (purchaseQuantity + 1);
            purchaseRef.current++;
        }else alert("Limite de stock");
    };
    const removeToTrolley = () =>{
        if(purchaseQuantity > initial){
            setPurchaseQuantity (purchaseQuantity - 1);
            purchaseRef.current--;  
        }
    };
    const onAdd = () =>{
        if(purchaseQuantity > 0){
            setStock(stock - purchaseQuantity);
            const subTotal = purchaseQuantity * itemObj.price;
            cartContext.AddItem(purchaseQuantity, itemObj, subTotal);
        }else alert("Debe seleccionar cuantos items agregar");
    }

    useEffect(()=>{
        if(stock == 0){
            setStockFlag(false);
        }
    },[stock]);

    return {purchaseRef, addToTrolley, removeToTrolley, onAdd, stockFlag};
};