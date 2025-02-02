import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(null);

    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    return (
        <>
          <nav className="bg-black text-white shadow-md fixed w-full top-0 z-50">
         
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    {/* Logo */}
                    <a href="/" className="text-2xl font-bold">
                        <img  src="src/assets/images/logo.png" alt="logo" className="h-20 rounded-full" />
                    </a>

                    {/* Navigation Links */}
                    <ul className="hidden lg:flex space-x-6 items-center">
                  
                        {[
                            { label: "Home", submenu: ["Home 1", "Home 2", "Home 3"] },
                            { label: "About", link: "about.html" },
                            { label: "Service", submenu: ["Service", "Service Details"] },
                            { label: "Pages", submenu: ["About", "Project", "Donation"] },
                            { label: "Blog", submenu: ["Blog Grid", "Blog List"] },
                            { label: "Contact", link: "contact.html" },
                        ].map((item, index) => (
                            <li key={index} className="relative group">
                                <a
                                    href={item.link || "#"}
                                    className="flex items-center gap-1 text-white hover:text-green-300 transition"
                                    onClick={() => item.submenu && toggleDropdown(index)}
                                >
                                    {item.label} {item.submenu && <FaChevronDown className="text-sm" />}
                                </a>
                                {/* Dropdown Menu */}
                                {item.submenu && dropdownOpen === index && (
                                    <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2">
                                        {item.submenu.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <a
                                                    href={`/${subItem.toLowerCase().replace(/\s/g, "-")}.html`}
                                                    className="block px-4 py-2 hover:bg-blue-100 text-white"
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
                    <div className="flex items-center space-x-4">
                        <BiSearch className="text-xl text-gray-600 cursor-pointer" />
                        <a href="contact.html" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Get A Quote
                        </a>
                    </div>
                </div>
        </nav>
        </>
    );
};

export default Navbar;
