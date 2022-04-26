import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BsChevronUp } from "react-icons/bs";
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });
  return (
    <div className={`scrollToTop ${visible ? "visible" : ""}`}>
              <Link to="#home">
        <BsChevronUp />
        </Link>
    </div>
  );
}
