import {
  SearchOutlined,
  CodeOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    setCurrentPage(window.location.pathname === "/" ? "home" : window.location.pathname.slice(1));
  }, []);

  const navLinks = [
    {
      name: "Home",
      url: "/",
      isActive: currentPage === "home",
    },
    {
      name: "About",
      url: "/about",
      isActive: currentPage === "about",
    },
    {
      name: "Event",
      url: "/event",
      isActive: currentPage === "event",
    },
    {
      name: "Contact",
      url: "/contact",
      isActive: currentPage === "contact",
    },
  ];


  return (
    <nav className="bg-[var(--primary-color)] text-white p-4 flex justify-around flex-row w-full border-b-4 "
    style={{ borderBottomWidth: '4px' }} // Custom border height
    >
      <img
        src="https://www.shutterstock.com/image-vector/ngo-organization-black-glyph-icon-260nw-1795132267.jpg"
        className="w-24"
      />

      <div className="w-2/3 flex flex-col justify-evenly items-center relative">
        <div className="text-sm flex gap-4 ">
          Fort Worth, Texas MON-FRI 09:00 - 19:00, SAT-SUN 10:00 - 14:00
          <p>
            Free <CodeOutlined style={{
              fontSize: "20px"
            }} />
          </p>
          <div className="flex gap-2 absolute right-0">
            <FacebookOutlined style={{
              fontSize: "20px"
            }} />
            <InstagramOutlined style={{
              fontSize: "20px"
            }} />
            <TwitterOutlined style={{
              fontSize: "20px"
            }} />
          </div>
        </div>
        <ul className="flex justify-around w-2/3 text-base font-sans font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.url}
                className={`${
                  link.isActive ? "border-b-2" : "transition duration-500  hover:border-b-2  hover:border-black hover:border-spacing-y-4"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          <div className="flex gap-2 absolute right-0">
            <SearchOutlined style={{
              fontSize: "20px",
              fontWeight: "100"
            }} />
            <p>
              Donate Now
            </p>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
