const Footer: React.FC = () => {
    return (
      <footer className="bg-[#81bf5c] text-lime-400 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#" className="text-lg font-bold text-white hover:text-gray-400">
                Rec-Rent
              </a>
            </div>
            <div className="flex space-x-4 mb-4 md:mb-0">
            </div>
            <div>
              <p className="text-white text-sm">{new Date().getFullYear()} Rec-Rent. All rights not reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
 
export default Footer;