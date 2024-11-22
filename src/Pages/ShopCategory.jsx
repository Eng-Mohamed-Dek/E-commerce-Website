import React, { useContext } from "react";
import "./css/shopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import { Item } from "../Components/item/item";

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  //  console.log("products" , all_product )

  return (
    <div className="shopcategory-banner ">
      <img src={props.banner} alt="" className="banner"/>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
      <div className="shopcategory-sort">
        Sory by <img src="/Frontend_Assets/dropdown_icon.png" alt="dropdown" />
      </div>
      </div>
      <div className="shopcategory-products">
        {all_product?.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};
