import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(id, title, image, price, rating);

  const RemoveFromBasket = () => {
    //remove items
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className= "checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span className="product__ratingStar">&#11088;</span>
            ))}
        </div>
        <button onClick={RemoveFromBasket}> Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
