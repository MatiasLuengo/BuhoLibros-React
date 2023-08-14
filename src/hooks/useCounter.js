import {useState, useEffect, useRef} from "react";

export function useCounter (outSideStock, initial) {
    const [purchase, setPurchase] = useState(initial);
    const purchaseRef = useRef(initial);
    const [stock, setStock] = useState(outSideStock);
    const [stockFlag, setStockFlag] = useState(true);

    const addToTrolley = () =>{
        if(purchase < stock){
            setPurchase (purchase + 1);
            purchaseRef.current++;
        }else alert("Limite de stock");
    };
    const removeToTrolley = () =>{
        if(purchase > initial){
            setPurchase (purchase - 1);
            purchaseRef.current--;  
        }
    };
    const onAdd = () =>{
        if(purchase > 0){
            setStock(stock - purchase);
            alert(`Se agrego ${purchase} items al carrito`);
        }else alert("Debe seleccionar cuantos items agregar");
    }

    useEffect(()=>{
        if(stock == 0){
            setStockFlag(false);
        }
    },[stock]);

    return {purchaseRef, addToTrolley, removeToTrolley, onAdd, stockFlag};
};