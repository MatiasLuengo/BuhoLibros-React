import { Item } from "./Item";
import { Loader } from "./Loader";
import { useState, useEffect } from "react";

export const ItemList = ({ products }) => {
    
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [searchTerm, setSearchTerm] = useState("");
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.author.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
        if(products.length == 0) setIsEmpty(true);
    }, [products, searchTerm]);

    return (
        <>
            {isEmpty && <div className="notResultMsj"><h3>Lo sentimos, no se ha encontrado resultados</h3></div>}
            {!isEmpty && <>
            <div className="searchResult">
                <div className="search">
                    <label htmlFor="search"><i className='bx bx-search'></i></label>
                    <input onChange={e => setSearchTerm(e.target.value)} name="search" id="search" className="inputSearch" type="text" placeholder="Búsqueda"/>
                </div>
                <p>({filteredProducts.length})</p>
            </div>
            {!filteredProducts.length == 0 &&
                <div className="itemList">
                    {filteredProducts.map(product =>
                        <Item product={product} key={product.id}></Item>)}
                </div>
            }
            {filteredProducts.length == 0 &&
                <div className="notResultMsj"><h3>Lo sentimos, no se ha encontrado resultados</h3></div>
            }
            </>}
        </>
    );
};