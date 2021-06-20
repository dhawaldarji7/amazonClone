import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/D23947948_IN_CEPC_Clearance-store_May21_rush_1500x300.jpg"
        alt="Checkout_Banner"
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your cart is empty</h2>
          <p>
            You have no items in your cart. To buy one or more items please use
            the "Add to cart" option next to each item
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Cart</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
