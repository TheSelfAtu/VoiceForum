import React from "react";
import { Link } from "react-router-dom";
import { NavbarLogo } from "../atoms/NavbarLogo";
export function Navbar(): JSX.Element {
  return (
    <nav>
      <div id="navbar" className="navbar font-size--lg">
        <div className="nav-items margin-lr-auto margin-t-md flexbox--space-between ">
          <NavbarLogo></NavbarLogo>
          <ul className="nav-links">
            <li>
              <Link to={"/"}>みんなの投稿</Link>
            </li>
            <li>
              <Link to={"/post-message"}>投稿する</Link>
            </li>
            <li>
              <Link to={"/mypage"}>マイページ</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
