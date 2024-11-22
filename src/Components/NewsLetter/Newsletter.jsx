import "./NewLetter.css";

export const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to our newLetter and stay updated</p>
      <div>
        <input type="email" placeholder="Enter Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
