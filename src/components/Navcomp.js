/* External imports */
import React from "react";

const Navcomp = (props) => {
    return (
        <a href="{props.link}">
            {props.icon}
            {props.title}
        </a>
    );
};

export default Navcomp;
