import { Item } from "./Item";
import { Loader } from "./Loader";
import { useState, useEffect } from "react";

export const ItemList = ({ products, loading }) => {
    
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.author.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [products, searchTerm]);

    return (
        <>
            {loading && <Loader></Loader>}
            {!loading &&
            <input onChange={e => setSearchTerm(e.target.value)} className="inputSearch" type="text" placeholder="Search"/>
            }
            <div className="itemList">
                {!loading &&
                    filteredProducts.map(product =>
                        <Item product={product} key={product.id}></Item>)
                }
            </div>
        </>
    );
};