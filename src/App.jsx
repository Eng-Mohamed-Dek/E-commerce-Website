import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import { LoginSignup } from "./Pages/LoginSignup";
import { Product } from "./Pages/Product";
import { Shop } from "./Pages/Shop";
import { ShopCategory } from "./Pages/ShopCategory";
import { Cart } from "./Pages/Cart";
import men_banner from '/Frontend_Assets/banner_mens.png'
import kid_banner from '/Frontend_Assets/banner_kids.png'
import women_banner from "/Frontend_Assets/banner_women.png"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}  />
        <Route path="/womens"   element={<ShopCategory banner={women_banner} category="women"/>}  />
        <Route path="/kids" element={<ShopCategory  banner={kid_banner} category="kid"  />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
