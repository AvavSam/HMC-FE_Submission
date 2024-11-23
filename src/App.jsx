import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import ProductPopup from "./components/ProductPopup";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    closePopup();
  };

  const updateCartItem = (productId, quantity) => {
    setCart((prevCart) => prevCart.map((item) => (item.id === productId ? { ...item, quantity } : item)));
  };

  const removeCartItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cart={cart} updateCartItem={updateCartItem} removeCartItem={removeCartItem} />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <ProductList products={products} onProductClick={handleProductClick} isLoading={isLoading} addToCart={addToCart} />
      </main>
      <Footer />
      {selectedProduct && <ProductPopup product={selectedProduct} onClose={closePopup} addToCart={addToCart} />}
    </div>
  );
}

export default App;
