import React from "react";

export function Navbar(): JSX.Element {
  return (
    <nav>
      <div id="navbar" className="navbar">
        <div id="toggle">
          <a href="#">menu</a>
        </div>

        <ul id="nav-items" className="nav-items">
          <li>
            <a href="#">html</a>
          </li>
          <li>
            <a href="#">css</a>
          </li>
          <li>
            <a href="#">javascript</a>
          </li>
          <li>
            <a href="#">php</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
