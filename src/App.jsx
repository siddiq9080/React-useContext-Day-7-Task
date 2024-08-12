import Products from "./Products";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Products />
      </CartProvider>
    </>
  );
}

export default App;
