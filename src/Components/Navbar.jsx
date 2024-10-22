import React, { useState, useEffect } from 'react';
import MISDELOGO from '../assets/MM.png'; // Path to the uploaded image

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);

  // Function to handle scroll event
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <div
      className={`fixed w-full top-0 left-0 z-10 transition-all duration-300 ease-in-out ${scrollNav ? 'bg-white shadow-md' : 'bg-white'}`}
    >
      <div className="flex justify-between items-center px-3 lg:px-10 py-2">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src={MISDELOGO} 
            alt="MISDE Logo" 
            className="h-12 md:h-16 lg:h-20 w-auto" // Adjusting the height for responsiveness
          />
        </div>

        {/* Learn More Button */}
        <div className={`py-2  md:py-3 px-8 rounded-md text-sm sm:text-lg md:text-xl 
  ${scrollNav ? ' border bg-blue-950 text-white ' : ' border bg-blue-950 text-white'}   transition-all  duration-300 ease-in-out`}>
  <button>
    <a href="" >EIS'24</a>
  </button>
</div>

      </div>
    </div>
  );
};

export default Navbar;
