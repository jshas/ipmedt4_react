/* External imports */
import React, { useState } from "react";

/* Intenal imports */
import { NavLink } from "react-router-dom";
import { logOut } from "../../util/auth";

/* CSS imports */
import "./Sidebar.css";
import api from "../../util/api";
const Sidebar = (props) => {
    const [showMenu, setShowMenu] = useState(0);


    const menuToggle = () => {
        if (showMenu === 0) {
            document.getElementById("logoJ").style.display = "";
            document.getElementById("catNav").style.display = "none";
            document.getElementById("adminNav").style.display = "none";
            document.getElementById("botNav").style.display = "none";
            document.getElementById("navAll").style.height = "50px";
            document.getElementById("navAll").style.backgroundColor = "#FFF";
            setShowMenu(1);
        } else {
            document.getElementById("logoJ").style.display = "inline-block";
            document.getElementById("catNav").style.display = "block";
            document.getElementById("adminNav").style.display = "block";
            document.getElementById("botNav").style.display = "block";
            document.getElementById("navAll").style.height = "100vh";
            document.getElementById("navAll").style.backgroundColor = "#3C4648";
            setShowMenu(0);
        }
    };

    const filterHandler = (categoryValue) => {
        props.filterHandler(categoryValue);
    };

    return (
        <nav className="nav" id="navAll">
            <NavLink to="/" className="headerNav">
                {/* Hamburger Menu */}
                <svg
                    onClick={() => {
                        menuToggle(showMenu);
                    }}
                    className="nav-main__dropdown"
                    viewBox="0 0 75 60"
                    width="30"
                    height="30"
                >
                    <rect width="75" height="15"></rect>
                    <rect y="22.5" width="75" height="15"></rect>
                    <rect y="45" width="75" height="15"></rect>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="nav-main__logo"
                    id="logoJ"
                    width="193.7"
                    height="28.4"
                >
                    <path
                        id="logo_jungheinrich-u"
                        d="M18.6 21.5c-.3.9-.5 1.9-.5 2.6 0 2.7 2.1 4.4 6.3 4.4 5.7 0 7.8-2.1 9.1-6.5l3.7-12.6h-5.3l-3.7 12.5c-.4 1.4-1.2 2-2.9 2-1.5 0-2.1-.8-1.7-2l3.7-12.5H22l-3.4 12.1z"
                    ></path>
                    <path
                        id="logo_jungheinrich-e"
                        d="M89.6 28.2h12.5l1.3-4.5h-7.2l.8-2.8h6.4l1.3-4.4h-6.4l.9-2.9h7.2l1.3-4.3H95.2z"
                    ></path>
                    <path
                        id="logo_jungheinrich-c"
                        d="M171.1 9.1c-5.1 0-9 .6-11.5 10.1-.4 1.6-.7 3.1-.7 4.3 0 3 1.6 4.9 6.8 4.9 1.3 0 3-.2 4.2-.6l1.3-4.4s-1.4.3-3.5.3c-2.4 0-3-.8-3-2 0-.7.2-1.6.5-2.6 1.3-5 2.7-5.6 5.3-5.6 2.2 0 3.4.3 3.4.3l1.3-4.5c-.8 0-2.8-.2-4.1-.2"
                    ></path>
                    <path
                        id="logo_jungheinrich-j"
                        d="M.9 28c.7.2 2.6.4 4.1.4 6.7 0 9.4-1.8 10.9-7l3.6-12.1h-5.3L11 20.1c-.1.3-.3 1-.6 1.6-.9 1.6-2.6 2-4.6 2s-3.7-.2-3.7-.2L.9 28z"
                    ></path>
                    <path
                        id="logo_jungheinrich-r"
                        d="M140 17.9l1.2-4.2h2.4c.9 0 1.4.5 1.4 1.2 0 1.7-.9 3-2.7 3H140zm-8.2 10.3h5.2l1.9-6.3h1.4l1.6 6.3h5.6l-2.1-7.2c1.6-.5 3.4-1 4.6-5.2.3-1.1.5-2.3.5-2.8 0-2.3-1.3-3.6-4.7-3.6h-8.4l-5.6 18.8z"
                    ></path>
                    <path
                        id="logo_jungheinrich-g"
                        d="M71 17.3h-7l-1.1 3.5h2.2l-.9 3s-.8.1-1.6.1c-1.9 0-2.2-.8-2.2-2 0-.7.2-1.6.4-2.6 1.3-5 2.8-5.7 5.4-5.7 2.7 0 4.9.5 4.9.5l1.4-4.4c-.8-.2-3.2-.7-5.5-.7-5.1 0-9 .6-11.5 10.1-.4 1.6-.6 3-.6 4.3 0 3 1.8 5 6.9 5 2.5 0 5.1-.4 6.3-.8L71 17.3z"
                    ></path>
                    <path
                        id="logo_jungheinrich-i1"
                        d="M110.4 9.3h5.3l-5.6 18.9h-5.2z"
                    ></path>
                    <path
                        id="logo_jungheinrich-n1"
                        d="M40.4 9.3h4.4l2.7 10h.1s.4-1.6.8-3l2.1-7h5.2l-5.6 18.8h-4.4l-2.8-9.9h-.1s-.4 1.5-.8 3.1l-2 6.8h-5.2l5.6-18.8z"
                    ></path>
                    <path
                        id="logo_jungheinrich-n"
                        d="M118.8 9.3h4.4l2.7 10h.1s.4-1.6.8-3l2.1-7h5.2l-5.6 18.8h-4.4l-2.8-9.9h-.1s-.4 1.5-.8 3.1l-2 6.8h-5.2l5.6-18.8z"
                    ></path>
                    <path
                        id="logo_jungheinrich-i"
                        d="M154.6 9.3h5.3l-5.6 18.9h-5.2z"
                    ></path>
                    <path
                        id="logo_jungheinrich-h1"
                        d="M76.2 9.3h5.3l-2.2 7.3h5.2l2.2-7.3h5.2l-5.5 18.9h-5.3l2.1-7.2h-5.1l-2.2 7.2h-5.2z"
                    ></path>
                    <path
                        id="logo_jungheinrich-h"
                        d="M178 9.3h5.3l-2.2 7.3h5.2l2.1-7.3h5.3l-5.6 18.9h-5.2L185 21h-5.2l-2.1 7.2h-5.3z"
                    ></path>
                    <path
                        fill="#C00"
                        d="M20.2 7.7l-8-7.7L0 7.7h6.9l-4.2 14s1.4.2 3.3.2c1.5 0 2.4-.5 2.8-1.2.2-.4.3-.6.5-1.2l3.6-11.9 7.3.1z"
                    ></path>
                </svg>
            </NavLink>

            <div className="adminNav" id="adminNav">
                <NavLink
                    exact
                    className="navLink"
                    to="/users"
                    activeStyle={{ backgroundColor: "#2b2d2e" }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="nav-main__icon"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#FFFFFF"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M11.99 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm3.61 6.34c1.07 0 1.93.86 1.93 1.93 0 1.07-.86 1.93-1.93 1.93-1.07 0-1.93-.86-1.93-1.93-.01-1.07.86-1.93 1.93-1.93zm-6-1.58c1.3 0 2.36 1.06 2.36 2.36 0 1.3-1.06 2.36-2.36 2.36s-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36zm0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68zM11.99 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15-1.17 2.97-4.06 5.09-7.45 5.09z" />
                    </svg>
                    Gebruikers
                </NavLink>

                <NavLink
                    exact
                    className="navLink"
                    to="/products"
                    activeStyle={{ backgroundColor: "#2b2d2e" }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="nav-main__icon"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#FFFFFF"
                    >
                        <path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none" />
                        <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" />
                    </svg>
                    Producten
                </NavLink>

                <NavLink
                    exact
                    className="navLink"
                    to="/products/export"
                    activeStyle={{ backgroundColor: "#2b2d2e" }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24"
                        className="nav-main__icon"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#FFFFFF"
                    >
                        <g>
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z" />
                        </g>
                    </svg>
                    Export
                </NavLink>
            </div>

            <section className="catNav" id="catNav">
                <button
                    className={props.activeFilters.includes("communicatie") 
                    ? "catNav__filterButton catNav__filterButton--active" 
                    : "catNav__filterButton" }
                    value="communicatie"
                    onClick={(e) => filterHandler(e.target.value)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="nav-main__icon"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill={props.activeFilters.includes("communicatie") ?  "#000" : "#fff"}
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    Communicatie
                </button>

                <button
                    className={props.activeFilters.includes("ergonomie") 
                    ? "catNav__filterButton catNav__filterButton--active" 
                    : "catNav__filterButton" }                    value="ergonomie"
                    onClick={(e) => filterHandler(e.target.value)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="nav-main__icon"
                        enableBackground="new 0 0 24 24"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill={props.activeFilters.includes("ergonomie") ?  "#000" : "#fff"}
                    >
                        <g>
                            <rect fill="none" height="24" width="24" x="0" />
                        </g>
                        <g>
                            <g>
                                <g>
                                    <path d="M4,18v3h3v-3h10v3h3v-6H4V18z M19,10h3v3h-3V10z M2,10h3v3H2V10z M17,13H7V5c0-1.1,0.9-2,2-2h6c1.1,0,2,0.9,2,2V13z" />
                                </g>
                            </g>
                        </g>
                    </svg>
                    Ergonomie
                </button>
                <button
                    className={props.activeFilters.includes("kabel") 
                    ? "catNav__filterButton catNav__filterButton--active" 
                    : "catNav__filterButton" }                    
                    value="kabel"
                    onClick={(e) => filterHandler(e.target.value)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="nav-main__icon"
                        enableBackground="new 0 0 24 24"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill={props.activeFilters.includes("kabel") ?  "#000" : "#fff"}
                    >
                        <g>
                            <path d="M0,0h24v24H0V0z" fill="none" />
                        </g>
                        <g>
                            <g>
                                <path d="M20,5V4c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1v1h-1v4c0,0.55,0.45,1,1,1h1v7c0,1.1-0.9,2-2,2s-2-0.9-2-2V7 c0-2.21-1.79-4-4-4S5,4.79,5,7v7H4c-0.55,0-1,0.45-1,1v4h1v1c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-1h1v-4c0-0.55-0.45-1-1-1H7 V7c0-1.1,0.9-2,2-2s2,0.9,2,2v10c0,2.21,1.79,4,4,4s4-1.79,4-4v-7h1c0.55,0,1-0.45,1-1V5H20z" />
                            </g>
                        </g>
                    </svg>
                    Kabel
                </button>
                <button
                    className={props.activeFilters.includes("print") 
                    ? "catNav__filterButton catNav__filterButton--active" 
                    : "catNav__filterButton" }
                    value="print"
                    onClick={(e) => filterHandler(e.target.value)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="nav-main__icon"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill={props.activeFilters.includes("print") ?  "#000" : "#fff"}
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" />
                    </svg>
                    Print
                </button>
                <button
                    className={props.activeFilters.includes("randapparatuur") 
                    ? "catNav__filterButton catNav__filterButton--active" 
                    : "catNav__filterButton" }
                    value="randapparatuur"
                    onClick={(e) => filterHandler(e.target.value)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="nav-main__icon"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill={props.activeFilters.includes("randapparatuur") ?  "#000" : "#fff"}
                    >
                        <path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z" />
                        <path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none" />
                    </svg>
                    Randapparatuur
                </button>
                <button
                    className={props.activeFilters.includes("werkplek") 
                    ? "catNav__filterButton catNav__filterButton--active" 
                    : "catNav__filterButton" }
                    value="werkplek"
                    onClick={(e) => filterHandler(e.target.value)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="nav-main__icon"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill= {props.activeFilters.includes("werkplek") ?  "#000" :  "#fff" }
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                    </svg>
                    Werkplek
                </button>
            </section>

            <div className="botNav" id="botNav">
                <NavLink
                    exact
                    className="navLink"
                    to="/users/add"
                    activeStyle={{ backgroundColor: "#2b2d2e" }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24"
                        className="nav-main__icon"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#FFFFFF"
                    >
                        <g>
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <g>
                                <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z" />
                            </g>
                        </g>
                    </svg>
                    Gebruikers
                </NavLink>
                <NavLink
                    exact
                    className="navLink"
                    to="/products/add"
                    activeStyle={{ backgroundColor: "#2b2d2e" }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24"
                        className="nav-main__icon"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#FFFFFF"
                    >
                        <g>
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <g>
                                <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z" />
                            </g>
                        </g>
                    </svg>
                    Producten
                </NavLink>
                <NavLink
                    className="navLink"
                    to="#"
                    onClick={() =>
                        api()
                            .post("/logout")
                            .then(() => logOut())
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="nav-main__icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" />
                    </svg>
                    Uitloggen
                </NavLink>
            </div>
        </nav>
    );
};

export default Sidebar;
