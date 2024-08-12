import PropTypes from "prop-types";
import "./Product.css";

const Product = ({
  id,
  title,
  image,
  price,
  description,
  category,
  rating,
  addCart,
  removeCart,
  isInCart = false,
}) => {
  return (
    <div className="card border-3 border-subtle-black h-100 mt-5">
      <img
        src={image}
        alt={title}
        className="img-card-top"
        style={{ height: 200, objectFit: "contain" }}
      />
      <div className="card-body  d-flex flex-column">
        <h4 className="card-title text-center mb-3 mt-3">{title}</h4>
        <h2 className="card-text text-center">Price: {price}</h2>
        <h5 className="card-text text-center">Category: {category}</h5>
        <h4 className="card-text text-center">Quantity: {rating.count}</h4>
        <h5 className="card-text text-center">Rating: {rating.rate}</h5>
        <div className="mt-auto">
          {isInCart ? (
            <button
              className="btn btn-danger w-100 mt-2"
              onClick={() => removeCart(id)}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className="btn btn-primary w-100 mt-2"
              onClick={() =>
                addCart({
                  id,
                  title,
                  image,
                  price,
                  description,
                  category,
                  rating,
                  quantity: 1,
                })
              }
            >
              ADD To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
  addCart: PropTypes.func.isRequired,
  removeCart: PropTypes.func.isRequired,
  isInCart: PropTypes.bool,
};

export default Product;
