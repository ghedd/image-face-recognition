import React, { useState, useEffect } from "react";

const Footer = () => {
  const [fullYear, setFullYear] = useState(0);

  const setYear = () => {
    const date = new Date();

    setFullYear(date.getFullYear());
  };
  useEffect(() => {
    setYear();
  }, []);
  return (
    <footer id="footer">
      <div className="content has-text-centered is-size-7-mobile">
        <p className="has-text-white">
          <strong className="has-text-primary">
            {" "}
            Image Face Recognition,{" "}
          </strong>{" "}
          &#9400; {fullYear} by Thinh Le
        </p>
      </div>
    </footer>
  );
};

export default Footer;
