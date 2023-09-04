import { ItemCount } from "./ItemCount";
import { ErrorMsj } from "./ErrorMsj";

export const ProductDetail = ({product}) =>{

    if(Object.keys(product).length == 1){
        return(
            <ErrorMsj msj={"Lo sentimos, no se encontró este producto"}></ErrorMsj>
        );
    }else{
        return(
            <article className="productDetail" key={product.id}>
                <div className="descriptionContainer">
                    <img src={product.image} alt=""></img>
                    <h3>{product.description}</h3>
                </div>
                <div className="saleContainer">
                    <h2 className="productTitle">{product.title}</h2>
                    <h3 className="productPrice">$ {product.price}</h3>
                    <p>Disponible/s: {product.stock}</p>
                    <ItemCount outSideStock={product.stock} initial={1} itemObj={product}></ItemCount>
                </div>
            </article>
        );
    }
}