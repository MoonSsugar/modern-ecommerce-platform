import { Routes, Route } from "react-router";
import ProductsListPage from "./pages/products/ProductsListPage";
import CartPage from "./pages/cart/CartPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";


function App() {

  return (
    <Routes>
      <Route path="/" element={ <ProductsListPage /> } />
      <Route path="/cart" element={ <CartPage /> } />
      <Route path="/checkout" element={ <CheckoutPage /> } />
    </Routes>    
  )
}

export default App
