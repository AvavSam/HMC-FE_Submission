function HeroSection() {
  return (
    <section className="mb-12">
      <div className="relative rounded-lg overflow-hidden shadow-xl">
        <img src="shop.jpg" alt="HMC SHOP Banner" className="w-full h-[400px] object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-600/50 flex items-center">
          <div className="ml-8 text-white max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to HMC SHOP</h1>
            <p className="text-xl mb-8">Your one-stop shop for HMC merchandise and refreshments</p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 p-2 px-6 rounded-lg">
              <a href="#products">Shop Now</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
