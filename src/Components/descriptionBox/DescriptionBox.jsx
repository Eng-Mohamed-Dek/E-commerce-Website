import './descriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122) </div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates buying
          and selling of products or services over the internet serves as a
          virtual marketplace where businesses and individual showcase their
          products, interact with customers and conducts transactions without
          the need for a physical presence. E-commerce websites have gained
          immense popularity due to their convenient accesibilityand the global
          reach they offer
          <p>
            E-commerce websites Typically display products or services as
            detailed descriptions, images, prices and any available vars (eg.
            size, color). Each product usually has it own dedicated with
            relevant information
          </p>
        </p>
      </div>
    </div>
  );
};
