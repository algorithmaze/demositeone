import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">School Logo</div>
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#programs" className="text-gray-600 hover:text-gray-900">Programs</a>
          <a href="#gallery" className="text-gray-600 hover:text-gray-900">Gallery</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a href="#hero" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={toggleMenu}>Home</a>
          <a href="#about" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={toggleMenu}>About</a>
          <a href="#programs" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={toggleMenu}>Programs</a>
          <a href="#gallery" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={toggleMenu}>Gallery</a>
          <a href="#contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
