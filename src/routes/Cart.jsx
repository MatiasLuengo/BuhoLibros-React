import { CartContext } from "../context/cartContext";
import { useContext } from "react";
import imgBagShop from "../assets/bagshopT.png"
import toast from 'react-hot-toast';

export const Cart = ({  }) => {
    const cartContext = useContext(CartContext);
    let isEmpty = false;
    if(cartContext.cartQuantity == 0) isEmpty = true;

    const formActive = () => {
        const formDisplay = document.getElementById("purchaseForm");
        formDisplay.style.display = "flex";
        const buttonDisplay = document.getElementById("buttonShow");
        buttonDisplay.style.display = "none";
    }

    const handleSubmitData = (e) => {
        e.preventDefault();
        let email = document.getElementById("email").value;
        let emailCheck = document.getElementById("emailCheck").value;
        if(email === emailCheck){
            const formData = {
                name: e.target.name.value,
                lastName: e.target.lastName.value,
                phone: e.target.phone.value,
                email: e.target.email.value,
                dayPurchase: new Date(),
            };
            cartContext.enviodedatos(formData);
        }else toast.error('Debe ingresar el mismo E-mail', {duration: 3000, position: 'top-center',});
    }

    return (
        <div className="cart">
            {isEmpty &&
            <div className="emptyCart">
                <img src={imgBagShop} className="imgEmptyCart" alt="Bolsa de compra vacía" />
                <p>¡Empieza un carrito de compras!</p>
            </div>
            }

            {!isEmpty &&
            <div className="shopDetail">
                <div className="cartDetail">
                    {cartContext.itemsInCart.map(item =>
                        <div className="cartItem" key={item.id}>
                            <img src={item.image} alt=""></img>
                            <h3 className="">{item.title}</h3>
                            <p>Cantidad: {item.purchaseQuantity}</p>
                            <p>$ {item.subTotalPurchase}</p>
                            <button onClick={() => cartContext.RemoveItem(item)}>Eliminar del carrito</button>
                        </div>
                        )}
                    <button className="clearButton" onClick={() => cartContext.Clear()}>Vaciar Carrito</button>
                </div>
                <div className="totalDetail">
                    <div className="saleDetail">
                        <h4 className="borderBotom">Resumen de compra</h4>
                        <p>Productos ({cartContext.cartQuantity})</p>
                        <h3 className="borderBotom">Total $ {cartContext.totalValue}</h3>
                        <p><i className='bx bx-check-shield'></i>Compra Protegida, recibí el producto que esperabas o te devolvemos tu dinero.</p>
                        <p className="borderBotom"><i className='bx bx-store'></i>15 días de garantía de fábrica.</p>
                    </div>
                    <button id="buttonShow" className="showForm" onClick={formActive}>Seguir con la compra</button>
                    <form id="purchaseForm" action="" onSubmit={(event) => handleSubmitData(event)}>
                        <h4 id="formTitle">Detalles de facturación:</h4>                       
                        <div className="inputWrapper">
                        <i className='bx bx-user'></i>
                            <input id="name" className="inputField" type="text" required/>
                            <label htmlFor="name" className="inputLabel">Nombre</label>
                        </div>
                        <div className="inputWrapper">
                        <i className='bx bx-user'></i>
                            <input id="lastName" className="inputField" type="text" required/>
                            <label htmlFor="lastName" className="inputLabel">Apellido</label>
                        </div>
                        <div className="inputWrapper">
                        <i className='bx bxs-phone'></i>
                            <input id="phone" className="inputField" type="text" required/>
                            <label htmlFor="phone" className="inputLabel">Teléfono</label>
                        </div>
                        <div className="inputWrapper">
                        <i className='bx bx-envelope'></i>
                            <input id="email" className="inputField" type="email" required/>
                            <label htmlFor="email" className="inputLabel">Email</label>
                        </div>
                        <div className="inputWrapper">
                        <i className='bx bx-envelope'></i>
                            <input id="emailCheck" className="inputField" type="email" required/>
                            <label htmlFor="emailCheck" className="inputLabel">Email</label>
                        </div>
                        <button className="buyNow" id="submit" type="submit">Comprar ahora</button>
                    </form>
                </div>
            </div>
            }
        </div>
    );
};

