import { useContext } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Product from "./Product.jsx";
import CartPage from "./CartPage";
import { CartContext } from "./CartContext";
import data from "./Product.json";

const Products = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-primary  fixed-top">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            <h4 className="text-white border-3 border-bottom ms-4">
              <i className="fa-brands fa-shopify me-2"></i>
              Shop{" "}
            </h4>
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/"></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <h4 className="text-white border-3 border-bottom me-4">
                    <i className="fa-solid fa-cart-shopping"></i> Cart (
                    {cartItems.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}
                    )
                  </h4>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-3 mb-5">
        <Routes>
          <Route
            path="/"
            element={
              <div className="row g-3 mt-4">
                {data.map((eData) => {
                  const isInCart = cartItems.some(
                    (item) => item.id === eData.id
                  );
                  return (
                    <div className="col-md-4" key={eData.id}>
                      <Product
                        {...eData}
                        addCart={addToCart}
                        removeCart={removeFromCart}
                        isInCart={isInCart}
                      />
                    </div>
                  );
                })}
              </div>
            }
          />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Products;
