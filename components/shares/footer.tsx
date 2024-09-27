import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 p-6 text-center">
      <p className="mb-2">
        © {currentYear} Aiselena is owned and operated by Standardise
      </p>
    </footer>
  );
};

export default Footer;
