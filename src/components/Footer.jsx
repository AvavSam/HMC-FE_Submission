function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">About HMC SHOP</h3>
            <p className="text-sm">HMC SHOP is the official store of the HMC organization, offering a wide range of products for our members and supporters.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Shipping & Returns
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Order History
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Wish List
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm">
          <p>&copy; 2024 HMC SHOP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
