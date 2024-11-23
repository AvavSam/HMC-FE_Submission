/* eslint-disable react/prop-types */
import { Star } from "lucide-react";

function ProductPopup({ product, onClose, addToCart }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-lg" onClick={(e) => e.stopPropagation()}>
        <img src={product.image} alt={product.title} className="w-full h-64 object-contain mb-4" />
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-2xl font-bold">{product.title}</h2>
        </div>
        <div className="flex items-center mt-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating.rate) ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
          ))}
          <span className="ml-2 text-sm text-gray-600">{product.rating.rate}</span>
        </div>
        <p className="text-xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
        <div className="text-gray-700 mb-4 h-32 overflow-y-auto">{product.description}</div>
        <button className="bg-blue-600 text-white hover:bg-blue-700 py-2 px-6 rounded-lg" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductPopup;
