import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import {Link} from "react-router-dom";
import router from "../../routes/routes";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    
    // Handle hover effect on dropdown
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };
    
    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    
    // Toggle dropdown on click
    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown')) {
                setDropdownOpen(null);
            }
        };
        document.addEventListener('click', handleClickOutside);
        
        // Cleanup on unmount
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav className="bg-black text-white shadow-md fixed w-full top-0 z-50">
                <div className="container mx-auto flex justify-between items-center py-2 px-6">
                    {/* Logo */}
                    <a href="/" className="flex justify-center items-center">
                        <img src="src/assets/images/logo.png" alt="logo" className="w-16 rounded-full" />
                        <span className="mx-2 text-2xl">CropConnect</span>
                    </a>

                    {/* Navigation Links */}
                    <ul className="hidden lg:flex space-x-6 items-center">
                        {[
                            { label: "Home" , link:"/"},
                            { label: "About", link: "/about" },
                            { label: "Service", submenu: ["Service", "Service Details"] },
                            { label: "Daily Price", link:"/dailyprice" },
                            { label: "Blog", link:"/blogs"},
                            { label: "Contact", link: "/contact" },
                        ].map((item, index) => (
                            <li 
                                key={index} 
                                className="relative group dropdown" 
                                onMouseEnter={() => handleMouseEnter(index)} 
                                onMouseLeave={handleMouseLeave}
                            >
                                <a
                                    href={item.link || "#"}
                                    className="flex items-center gap-1 text-white hover:text-green-300 transition"
                                    onClick={() => item.submenu && toggleDropdown(index)}
                                >
                                    {item.label} {item.submenu && <FaChevronDown className="text-sm" />}
                                </a>
                                {/* Dropdown Menu */}
                                {(hoveredIndex === index || dropdownOpen === index) && item.submenu && (
                                    <ul className="absolute left-0 mt-2 w-40 bg-black shadow-lg rounded-md py-2">
                                        {item.submenu.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <a
                                                    href={`/${subItem.toLowerCase().replace(/\s/g, "-")}.html`}
                                                    className="block px-4 py-2 hover:border-2 hover:bg-green-600 text-white"
                                                >
                                                    {subItem}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Search & Button */}
                    <div className="flex items-center space-x-4 ">
                        <BiSearch className="text-xl text-white- cursor-pointer" />
                        <Link to="/contact" className="bg-[#4baf47] text-white px-4 py-2 rounded-md  ">
                            Get A Quote
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
