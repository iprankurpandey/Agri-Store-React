import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import LoginPage from "./Pages/LoginPage";
import ProductlistingPage from "./Pages/ProductlistingPage";
import SignupPage from "./Pages/SignupPage";
import "./App.css";
import { CartPage } from "./Pages/CartPage";
import WishlistPage from "./Pages/WishlistPage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/LoginPage" element={<LoginPage />} />
        <Route exact path="/SignupPage" element={<SignupPage />} />
        <Route
          exact
          path="ProductListingPage"
          element={<ProductlistingPage />}
        />
        <Route exact path="/CartPage" element={<CartPage />} />
        <Route exact path="/WishlistPage" element={<WishlistPage />} />
      </Routes>
    </div>
  );
}

export default App;
