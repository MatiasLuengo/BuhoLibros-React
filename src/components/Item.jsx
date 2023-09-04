import { Link } from "react-router-dom";

export const Item = ({ product }) => {

    return (
        <Link key={product.id} to={`/productos/${product.id}`}>
            <article className="item">
                <img src={product.image} alt=""></img>
                <h3 className="itemTitle">{product.title}</h3>
                <h3>{product.author}</h3>
                <h3>$ {product.price}</h3>
                {product.bestSeller && <span className="isBestSeller"></span>}
                {product.stock == 0 && <span className="outStockContainer"><span className="imgOutStock"></span></span>}
            </article>
        </Link>
    );
};