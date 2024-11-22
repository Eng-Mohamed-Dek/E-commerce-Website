import './breadcrum.css'

export const Breadcrum = (props) => {
  const arrow = <img src="/Frontend_Assets/breadcrum_arrow.png" alt="" />;
  const {product} = props;

  return (
    <div className="breadcrum">
      Home {arrow} Shop {arrow} {product.category} {arrow} {product.name}
    </div>
  );
};
