import { Navbar } from "./components/Navbar";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Product } from "./pages/Product";
import { ProductList } from "./pages/ProductList";
import { Signup } from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import { Success } from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
