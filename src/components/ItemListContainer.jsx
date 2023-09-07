import { Loader } from "./Loader";
import { gets } from "../scripts/getsBooksFirestore";
import { useState, useEffect } from "react";
import { Paginate } from "./Paginate";

export const ItemListContainer = ({ getMethod, category, subcategory }) => {

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
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

    useEffect(() => {
        if(searchTerm != ""){
            const filtered = products.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.author.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else setFilteredProducts(products);
    }, [searchTerm, products]);

    return (
        <div className="itemListContainer">
            {loading && <Loader></Loader>}
            {!loading &&
            <>
                <div className="searchResult">
                <div className="search">
                    <label htmlFor="search"><i className='bx bx-search'></i></label>
                    <input onChange={e => setSearchTerm(e.target.value)} name="search" id="search" className="inputSearch" type="text" placeholder="Búsqueda"/>
                </div>
                    {searchTerm == "" ?
                    <p>({products.length})</p> :
                    <p>({filteredProducts.length})</p>
                    }
                    
                </div>
                <Paginate products={filteredProducts} itemsPerPage={12} filteredProducts={filteredProducts} searchTerm={searchTerm}></Paginate>
            </>
            }
        </div>
    );
};