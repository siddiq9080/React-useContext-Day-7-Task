import { useContext } from "react";
import { CartContext } from "./CartContext";
import "./CartPage.css";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div
      className="container mt-5 mb-5 pt-2 pb-5"
      style={{ paddingBottom: 20 }}
    >
      <h2 className="mb-4 mt-5">Shopping Cart Section </h2>
      <div className="cart-container">
        <div className="cart-items " >
          {cartItems.length === 0 ? (
            <h3>Your cart is empty 😔😔😔.</h3>
          ) : (
            <ul className="list-group ">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div className="card-img-top ">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="mb-3 mt-2"
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "contain",
                        marginRight: "20px",
                      }}
                    />
                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                      <p>Price: ${item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="ms-5 text-end mb-5 pb-4">
                    <button
                      className="btn btn-secondary "
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-secondary  ms-2"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-danger mt-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div
        className="cart-summary bg-warning-subtle mt-5 pt-3 bg  fixed-bottom text-end  pe-5"
        style={{ marginTop: 20 }}
      >
        <h2>Total: ${getTotalPrice().toFixed(2)}</h2>
        <p className="text-success ">Shipping is free!</p>
      </div>
    </div>
  );
};

export default CartPage;
