import React, { useState, useEffect } from "react";
import { NavLink } from "../molecules/NavLink";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import PostAddIcon from "@material-ui/icons/PostAdd";

export function NavLinks() {
  return (
    <div className="nav-links-wrapper margin-b-sm ">
      <ul className="nav-links flexbox--space-between padding-t-sm margin-lr-auto">
        <li>
          <NavLink
            iconComponent={<HomeIcon />}
            description="ホーム"
            link={"/"}
          ></NavLink>
        </li>
        <li>
          <NavLink
            iconComponent={<PostAddIcon />}
            description="投稿"
            link={"/post-message"}
          ></NavLink>
        </li>
        <li>
          <NavLink
            iconComponent={<SettingsIcon />}
            description="設定"
            link={"/mypage"}
          ></NavLink>
        </li>
      </ul>
    </div>
  );
}
