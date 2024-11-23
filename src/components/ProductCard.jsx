/* eslint-disable react/prop-types */
function ProductCard({ product, onClick, addToCart }) {
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };

  return (
    <div onClick={onClick} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg cursor-pointer flex flex-col justify-between p-3">
      <img src={product.image} alt={product.title} className="w-full h-48 my-4 object-contain" />
      <div className="flex flex-col flex-grow justify-between">
        <h3 className="font-semibold text-lg mb-2 text-gray-800">{truncateTitle(product.title, 23)}</h3>
        <div className="flex flex-col justify-between mt-auto">
          <p className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</p>
          <button
            className="bg-blue-600 text-white w-full hover:bg-blue-700 mt-4 p-2 rounded-lg"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
