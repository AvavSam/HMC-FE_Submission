/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

function ProductList({ products, onProductClick, isLoading, addToCart }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Products</h2>
      <div id="products" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg cursor-pointer flex flex-col justify-between animate-pulse">
                <div className="w-full h-48 bg-gray-200"></div>
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div className="h-6 bg-gray-200 mb-2"></div>
                  <div className="h-6 bg-gray-200 mb-2"></div>
                  <div className="h-6 bg-gray-200"></div>
                </div>
              </div>
            ))
          : products.map((product) => <ProductCard key={product.id} product={product} addToCart={addToCart} onClick={() => onProductClick(product)} />)}
      </div>
    </section>
  );
}

export default ProductList;
