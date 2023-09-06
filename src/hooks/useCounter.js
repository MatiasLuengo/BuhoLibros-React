import {useState, useEffect, useRef} from "react";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";
import toast from 'react-hot-toast';

export function useCounter (initial, itemObj) {
    const cartContext = useContext(CartContext);

    const [purchaseQuantity, setPurchaseQuantity] = useState(initial);
    const purchaseRef = useRef(initial);
    const [stock, setStock] = useState(itemObj.stock);
    const [stockFlag, setStockFlag] = useState(true);

    useEffect(()=>{
        let stockInCart = cartContext.itemsInCart.find(item => item.id === itemObj.id);
        if(stockInCart){
            setStock(itemObj.stock - stockInCart.purchaseQuantity);
        }
    }, [itemObj, cartContext])

    const addToTrolley = () =>{
        if(purchaseQuantity < stock){
            setPurchaseQuantity (purchaseQuantity + 1);
            purchaseRef.current++;
        }else toast.error('Límite de stock', {duration: 3000, position: 'top-center',});
    };
    const removeToTrolley = () =>{
        if(purchaseQuantity > initial){
            setPurchaseQuantity (purchaseQuantity - 1);
            purchaseRef.current--;  
        }
    };
    const onAdd = () =>{
        if(purchaseQuantity > 0){
            const subTotal = purchaseQuantity * itemObj.price;
            if(cartContext.AddItem(purchaseQuantity, itemObj, subTotal)){
                setStock(stock - purchaseQuantity);
                purchaseRef.current = initial;
                toast.success('Se agregó al carrito!', {duration: 3000, position: 'bottom-left',});
            }
        }else toast.error('Debe seleccionar cuantos items agregar', {duration: 3000, position: 'top-center',});
    }

    useEffect(()=>{
        if(stock == 0){
            setStockFlag(false);
        }
    },[stock]);

    return {purchaseRef, addToTrolley, removeToTrolley, onAdd, stockFlag};
};