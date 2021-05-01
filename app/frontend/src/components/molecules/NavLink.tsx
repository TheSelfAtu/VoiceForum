import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  link: string;
  description: string;
  icon: OverridableComponent<any>;
}

export function NavLink(props: NavLinkProps) {
  return (
    <Link to={props.link} className="flexbox--column">
      {/* {props.icon} */}
      <p>{props.description}</p>
    </Link>
  );
}
