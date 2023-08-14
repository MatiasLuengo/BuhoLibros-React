import { ItemCount } from "./ItemCount";

export const ProductDetail = ({product}) =>{
    return(
        <article className="product" key={product.id}>
            <div className="descriptionContainer">
                <img src={product.image} alt=""></img>
                <h3>{product.description}</h3>
            </div>
            <div className="saleContainer">
                <h3>{product.title}</h3>
                <h3>$ {product.price}</h3>
                <ItemCount outSideStock={3} initial={1}></ItemCount>
            </div>
        </article>
    );
}