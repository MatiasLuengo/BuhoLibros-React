import { useCounter } from "../hooks/useCounter.js"
import { Link } from "react-router-dom";

export const ItemCount = ({ initial, itemObj }) => {

    const {purchaseRef, addToTrolley, removeToTrolley, onAdd, stockFlag} = useCounter(initial, itemObj);

    return (
    <div className="itemCount">
        {!stockFlag && <h3>Agotado</h3>}
        {stockFlag && <>
        <div className="addContainer">
            <div className="addOrRemove">
                <button onClick={removeToTrolley}>-</button>
                <p>{purchaseRef.current}</p>
                <button onClick={addToTrolley}>+</button>
            </div>
            {/* <Link to={`/carrito`} className=""> */}
                <button className="addToCart" onClick={onAdd}>Agregar a carrito</button>
            {/* </Link> */}
        </div>
        </>}
    </div>
    );
};