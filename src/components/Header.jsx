import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../components/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [myStyle, setMyStyle] = useState({ backgroundColor: "black" });

  const toggleStyle = () => {
    console.log("theme changer");
    if (myStyle.backgroundColor == "white") {
      setMyStyle({
        backgroundColor: "black",
      });
    } else {
      setMyStyle({
        backgroundColor: "white",
      });
    }
  };


  return (
    <header>
      <nav className="container">
          <div className="logo">
            <CustomLink className="logo-title" to="/">NT News</CustomLink>
          </div>
          <ul>
            <li>
              <CustomLink className="text" to="/">
                Home
              </CustomLink>
            </li>
            <li>
              <CustomLink className="text" to="/Headline">
                Headline
              </CustomLink>
            </li>
            <li>
              <CustomLink className="text" to="/About">
                About
              </CustomLink>
            </li>
            <li>
              <CustomLink className="text" to="/Contact">
                Contact
              </CustomLink>
            </li>
          </ul>
          <div className="theme">
            <FontAwesomeIcon icon={faMoon} className="icon" onClick={toggleStyle} />
          </div>
      </nav>
    </header>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
