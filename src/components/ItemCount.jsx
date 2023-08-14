import { useCounter } from "../hooks/useCounter.js"

export const ItemCount = ({ outSideStock, initial }) => {

    const {purchaseRef, addToTrolley, removeToTrolley, onAdd, stockFlag} = useCounter(outSideStock, initial);

    return (
    <div className="itemCount">
        {!stockFlag && <h3>No hay mas stock</h3>}
        {stockFlag && <>
        <div className="addOrRemove">
            <button onClick={removeToTrolley}>-</button>
            <p>{purchaseRef.current}</p>
            <button onClick={addToTrolley}>+</button>
            <button onClick={onAdd}>Agregar a carrito</button>
        </div>
        </>} 
    </div>
    );
};