import React from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "antd";
import { MailOutlined } from "@ant-design/icons";

const CustomMailIcon = () => {
    return (
        <MailOutlined style={{
            color: "var(--primary-color)",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }} />
    )
}

const Footer = () => {
  return (
    <footer className=" bg-[var(--quaternary-color)] text-white py-16 px-4 flex flex-col md:flex-row justify-between gap-4">
      <div className="footer-container px-24">
        <h3 className="text-xl">Quick Links</h3>
        <div className="flex flex-row gap-24">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <ul>
            <li>Contact Us</li>
            <li>Phone: 123-456-7890</li>
            <li>
              Email:
              <a
                href="mailto:abv@email.com"
                target="_blank"
                rel="noreferrer"
              ></a>
            </li>
            <li>Address: 1234 Street Name, City, State 12345</li>
          </ul>
        </div>
      </div>

      <div className="footer-container flex flex-col gap-4 mr-20">
        <h1 className="text-2xl">Subscribe to our Newsletter</h1>
        <form className="flex flex-col gap-5">
          <Input variant="outlined" type="email" placeholder="Enter your email" addonAfter={<CustomMailIcon />} />
          
        </form>
      </div>
    </footer>
  );
};

export default Footer;
