import { useContext } from "react";
import "./Cartitems.css";
import { ShopContext } from "../../Context/ShopContext";

export const Cartitems = () => {
  const { all_product } = useContext(ShopContext);
  const { cartItems } = useContext(ShopContext);
  const { removeFromCarts } = useContext(ShopContext);
  console.log("cartitems got saved", cartItems);
  const { totalAmount } = useContext(ShopContext);

  // if (!all_products) return <h1>Products Loading</h1>

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img
                  src={product.image}
                  alt=""
                  className="carticon-product-icon"
                />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[product.id]}
                </button>
                <p>{product.new_price * cartItems[product.id]}</p>
                <img
                  onClick={() => removeFromCarts(product.id)}
                  src="./Frontend_Assets/cart_cross_icon.png"
                  alt=""
                  class="cartitems-remove-icon"
                />
              </div>
              <hr />
            </div>
          );
        }
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${totalAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>${totalAmount()}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promocode, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Enter your Promocode" />
            <button>SEND CODE</button>
          </div>
        </div>
      </div>
    </div>
  );
};
