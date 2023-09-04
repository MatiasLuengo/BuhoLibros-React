import { ItemList } from "./ItemList";
import { Loader } from "./Loader";
import { gets } from "../scripts/getsBooksFirestore";
import { useState, useEffect } from "react";

export const ItemListContainer = ({ getMethod, category, subcategory }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setLoading(true),
        gets[getMethod](category, subcategory)
        .then((result) =>{
            setProducts(result.docs.map((doc)=>({id: doc.id, ...doc.data()})));
        }).catch((err) => console.error(err))
        .finally(() => setLoading(false));
    },[category, subcategory]);

    return (
        <div className="itemListContainer">
            {loading && <Loader></Loader>}
            {!loading &&
            <ItemList products={products}></ItemList>
            }
        </div>
    );
};