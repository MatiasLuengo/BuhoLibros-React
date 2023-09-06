import { addDoc, collection } from "firebase/firestore";
import { createContext, useState } from "react";
import { firestoreDb } from "../firebase/client";
import toast from 'react-hot-toast';


export const CartContext = createContext([]);

export function CartProvider ({children}) {
    const [cartQuantity, setCartQuantity] = useState(0);
    const [itemsInCart, setItemsInCart] = useState([]);
    const [totalValue, setTotalValue] = useState(0);
    const [idPurchase, setIdPurchase] = useState("");

    const AddItem = (aggregateQuantity, aggregateItem, purchaseSubTotalValue) =>{
        const repeatId = itemsInCart.some(item => item.id === aggregateItem.id);
        if(!repeatId){
            setCartQuantity(cartQuantity + aggregateQuantity);
            const nuevoObjetoConPropiedad = { ...aggregateItem, purchaseQuantity: aggregateQuantity, subTotalPurchase: purchaseSubTotalValue };
            setItemsInCart([...itemsInCart, nuevoObjetoConPropiedad]);
            setTotalValue(totalValue + purchaseSubTotalValue);
            return true;
        }else toast.error('Este artículo ya se encuentra en el carrito', {duration: 3000, position: 'top-center',}); return false;
        
    }

    const RemoveItem = (itemObj) =>{
        setTotalValue(totalValue - itemObj.subTotalPurchase);
        setCartQuantity(cartQuantity - itemObj.purchaseQuantity);
        const newArrayItems = itemsInCart.filter(item => item.id !== itemObj.id);
        setItemsInCart(newArrayItems);
        toast('Artículo eliminado', {duration: 3000, position: 'bottom-left', icon: '♻'});
    }

    const Clear = () =>{
        setCartQuantity(0);
        setItemsInCart([]);
        setTotalValue(0);
    }

    const enviodedatos = ( dataJson ) =>{
        const ordersRef = collection(firestoreDb, "orders")
        const data = {
            state: "generated",
            buyer: dataJson,
            items: itemsInCart,
            total: totalValue,
        };
        addDoc(ordersRef, data).then(( docRef )=> {setIdPurchase(docRef.id); 
            toast.success(`Compra exitosa!\nSu número de seguimiento es: ${docRef.id}`, {duration: 6000, position: 'top-center',});})
            .catch((error) => console.error(error))
            .finally();
        Clear();
        
    }

    return <CartContext.Provider value={{
        cartQuantity: cartQuantity,
        itemsInCart: itemsInCart,
        totalValue: totalValue,
        AddItem: AddItem,
        RemoveItem: RemoveItem,
        Clear: Clear,
        enviodedatos: enviodedatos
    }}>
        {children}
    </CartContext.Provider>
}