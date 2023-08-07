import Link from "next/link";
import React from "react";
import "../Styles/nav.css"
const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <Link href={"/"}>Logo</Link>
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"./about"}>About</Link>
              </li>
              <li>
                <Link href={"./movie"}>Movie</Link>
              </li>
              <li>
                <Link href={"./contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
