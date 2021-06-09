import React from "react";

import Sidebar from "./Sidebar"

const Navcomp = (props) =>{
  return <a href="{props.link}">
    {props.icon}
    {props.title}
  </a>
}

export default Navcomp;
