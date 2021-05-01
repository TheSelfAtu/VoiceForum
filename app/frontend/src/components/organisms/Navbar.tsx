import React from "react";
import { Link } from "react-router-dom";
import { NavbarLogo } from "../atoms/NavbarLogo";
export function Navbar(): JSX.Element {
  return (
    <nav>
      <div id="navbar" className="navbar font-size--lg">
        <div className="nav-items margin-lr-auto margin-t-md flexbox--space-between ">
          <NavbarLogo></NavbarLogo>
        </div>
      </div>
    </nav>
  );
}
