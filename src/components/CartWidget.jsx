import { Link } from "react-router-dom";
export const CartWidget = () => {
    return (
        <Link to={`/carrito`} className="CartWidget">
            <i className='bx bx-cart'></i>
            <p>1</p>
        </Link>
    );
};