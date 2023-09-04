import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gets } from "../scripts/getsBooksFirestore";
import { Loader } from "../components/Loader";
import { ProductDetail } from "../components/ProductDetail";

export const Product = ({  }) => {

    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setLoading(true),
        gets.getBook(productId).then((result)=>{
            setProduct({id: result.id, ...result.data()})
        })
        .catch((err) => console.error(err))
        .finally(() => 
        setLoading(false),
        );
    },[productId]);

    return (
        <section className="product">
        {loading && <Loader></Loader>}
        {!loading && <ProductDetail product={product}></ProductDetail>}
        </section>
    );
};