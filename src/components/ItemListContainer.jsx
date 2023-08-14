import { ItemList } from "./ItemList";
import { gets } from "../scripts/asyncMockBooks";
import { useState, useEffect } from "react";

export const ItemListContainer = ({ getMethod, category, subcategory }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setLoading(true),
        gets[getMethod](category, subcategory)
        .then((result) =>{
            setProducts([...result]);
        }).catch((err) => console.error(err))
        .finally(() => setLoading(false));
    },[category, subcategory]);

    return (
        <div>
            <ItemList products={products} loading={loading}></ItemList>
        </div>
    );
};