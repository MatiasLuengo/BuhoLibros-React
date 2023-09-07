import { Item } from "./Item";
import { useState, useEffect } from "react";

export const ItemList = ({ currentProducts }) => {
    
    const [isEmpty, setIsEmpty] = useState(false)
    useEffect(()=>{
        console.log("Current:");
        console.log(currentProducts.length);
        setIsEmpty(false);
        if(currentProducts.length == 0) setIsEmpty(true);
    },[currentProducts])

    return (
        <>
            {isEmpty && <div className="notResultMsj"><h3>Lo sentimos, no se ha encontrado resultados</h3></div>}
            {!isEmpty && <>
                <div className="itemList">
                    {currentProducts.map(product =>
                        <Item product={product} key={product.id}></Item>)}
                </div>
            </>}
        </>
    );
};