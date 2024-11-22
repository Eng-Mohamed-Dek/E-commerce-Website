import "./NewCollections.css";
import new_collections from "../../assets/new_collections";
import { Item } from "../item/item";

export const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NewCollections IN WOMEN</h1>
      <hr />
      <div className="new-collections-item">
        {new_collections.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};
