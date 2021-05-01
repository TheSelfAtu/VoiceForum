import React, { useState, useEffect } from "react";
import { NavLink } from "../molecules/NavLink";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";

export function NavLinks() {
  return (
    <ul className="flexbox--space-between">
      <li>
        <NavLink icon={HomeIcon} description="ホーム" link={"/"}></NavLink>
      </li>
    </ul>
  );
}
