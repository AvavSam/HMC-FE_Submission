/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";
import { ShoppingCart, X } from "lucide-react";

function Header({ cart, updateCartItem, removeCartItem }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }, [cart]);

  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <img src="/ic_hmc-full-dark.svg" alt="HMC Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold">HMC SHOP</span>
          </a>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="flex px-4 py-2 rounded-md text-white hover:bg-blue-700 border gap-2" onClick={() => setIsCartOpen(!isCartOpen)}>
                <span className="text-white">{cart.length}</span>
                <ShoppingCart className="h-6 w-6" />
              </button>
              {isCartOpen && (
                <div className="absolute right-0 mt-2 w-72 md:w-[32rem] max-h-[25rem] overflow-y-auto no-scrollbar bg-white text-black shadow-lg rounded-lg p-4 z-50">
                  {cart.length === 0 ? (
                    <p className="text-center">Your cart is empty</p>
                  ) : (
                    <>
                      {cart.map((item) => (
                        <div key={item.id} className="flex flex-col md:flex-row items-center justify-between mb-2 border-b pb-2 gap-4">
                          <div className="flex justify-start w-full">
                            <img src={item.image} alt={item.title} className="w-12 h-12 object-contain mr-4" />
                            <div className="flex-1">
                              <p className="font-semibold">{item.title}</p>
                              <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-end w-full md:w-auto">
                            <input type="number" value={item.quantity} min="1" className="w-12 text-center border rounded" onChange={(e) => updateCartItem(item.id, parseInt(e.target.value))} />
                            <button onClick={() => removeCartItem(item.id)} className="ml-2 text-red-600 hover:text-red-800">
                              <X />
                            </button>
                          </div>
                        </div>
                      ))}
                      <div className="flex justify-between items-center mt-4 pt-4 border-t">
                        <span className="font-bold">Total:</span>
                        <span className="text-xl font-bold text-blue-600">${totalPrice}</span>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
