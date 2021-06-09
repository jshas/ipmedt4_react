import React from "react";

import Navcomp from "./Navcomp"

import "./Sidebar.css";


const Sidebar = () =>{
  return <nav>
    <svg xmlns="http://www.w3.org/2000/svg" class="nav-main__logo" width="193.7"  height="28.4" ><path id="logo_jungheinrich-u" d="M18.6 21.5c-.3.9-.5 1.9-.5 2.6 0 2.7 2.1 4.4 6.3 4.4 5.7 0 7.8-2.1 9.1-6.5l3.7-12.6h-5.3l-3.7 12.5c-.4 1.4-1.2 2-2.9 2-1.5 0-2.1-.8-1.7-2l3.7-12.5H22l-3.4 12.1z"></path><path id="logo_jungheinrich-e" d="M89.6 28.2h12.5l1.3-4.5h-7.2l.8-2.8h6.4l1.3-4.4h-6.4l.9-2.9h7.2l1.3-4.3H95.2z"></path><path id="logo_jungheinrich-c" d="M171.1 9.1c-5.1 0-9 .6-11.5 10.1-.4 1.6-.7 3.1-.7 4.3 0 3 1.6 4.9 6.8 4.9 1.3 0 3-.2 4.2-.6l1.3-4.4s-1.4.3-3.5.3c-2.4 0-3-.8-3-2 0-.7.2-1.6.5-2.6 1.3-5 2.7-5.6 5.3-5.6 2.2 0 3.4.3 3.4.3l1.3-4.5c-.8 0-2.8-.2-4.1-.2"></path><path id="logo_jungheinrich-j" d="M.9 28c.7.2 2.6.4 4.1.4 6.7 0 9.4-1.8 10.9-7l3.6-12.1h-5.3L11 20.1c-.1.3-.3 1-.6 1.6-.9 1.6-2.6 2-4.6 2s-3.7-.2-3.7-.2L.9 28z"></path><path id="logo_jungheinrich-r" d="M140 17.9l1.2-4.2h2.4c.9 0 1.4.5 1.4 1.2 0 1.7-.9 3-2.7 3H140zm-8.2 10.3h5.2l1.9-6.3h1.4l1.6 6.3h5.6l-2.1-7.2c1.6-.5 3.4-1 4.6-5.2.3-1.1.5-2.3.5-2.8 0-2.3-1.3-3.6-4.7-3.6h-8.4l-5.6 18.8z"></path><path id="logo_jungheinrich-g" d="M71 17.3h-7l-1.1 3.5h2.2l-.9 3s-.8.1-1.6.1c-1.9 0-2.2-.8-2.2-2 0-.7.2-1.6.4-2.6 1.3-5 2.8-5.7 5.4-5.7 2.7 0 4.9.5 4.9.5l1.4-4.4c-.8-.2-3.2-.7-5.5-.7-5.1 0-9 .6-11.5 10.1-.4 1.6-.6 3-.6 4.3 0 3 1.8 5 6.9 5 2.5 0 5.1-.4 6.3-.8L71 17.3z"></path><path id="logo_jungheinrich-i1" d="M110.4 9.3h5.3l-5.6 18.9h-5.2z"></path><path id="logo_jungheinrich-n1" d="M40.4 9.3h4.4l2.7 10h.1s.4-1.6.8-3l2.1-7h5.2l-5.6 18.8h-4.4l-2.8-9.9h-.1s-.4 1.5-.8 3.1l-2 6.8h-5.2l5.6-18.8z"></path><path id="logo_jungheinrich-n" d="M118.8 9.3h4.4l2.7 10h.1s.4-1.6.8-3l2.1-7h5.2l-5.6 18.8h-4.4l-2.8-9.9h-.1s-.4 1.5-.8 3.1l-2 6.8h-5.2l5.6-18.8z"></path><path id="logo_jungheinrich-i" d="M154.6 9.3h5.3l-5.6 18.9h-5.2z"></path><path id="logo_jungheinrich-h1" d="M76.2 9.3h5.3l-2.2 7.3h5.2l2.2-7.3h5.2l-5.5 18.9h-5.3l2.1-7.2h-5.1l-2.2 7.2h-5.2z"></path><path id="logo_jungheinrich-h" d="M178 9.3h5.3l-2.2 7.3h5.2l2.1-7.3h5.3l-5.6 18.9h-5.2L185 21h-5.2l-2.1 7.2h-5.3z"></path><path fill="#C00" d="M20.2 7.7l-8-7.7L0 7.7h6.9l-4.2 14s1.4.2 3.3.2c1.5 0 2.4-.5 2.8-1.2.2-.4.3-.6.5-1.2l3.6-11.9 7.3.1z"></path>
    </svg>

    <div class="topNav">
    	<Navcomp title="Home" icon={<svg xmlns="http://www.w3.org/2000/svg" class="nav-main__icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>} link="" />
      <Navcomp title="Winkelmandje" icon={<svg xmlns="http://www.w3.org/2000/svg" class="nav-main__icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>} link="" />
    </div>


    <div class="catNav">
      <Navcomp title="Communicatie" icon={<svg xmlns="http://www.w3.org/2000/svg" class="nav-main__icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>} link="" />
      <Navcomp title="Ergonomie" icon={<svg xmlns="http://www.w3.org/2000/svg" class="nav-main__icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>} link="" />
      <Navcomp title="Kabel" icon={<svg xmlns="http://www.w3.org/2000/svg" class="nav-main__icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>} link="" />
      <Navcomp title="Print" icon={<svg xmlns="http://www.w3.org/2000/svg" class="nav-main__icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>} link="" />
      <Navcomp title="Randapperatuur" icon={<svg xmlns="http://www.w3.org/2000/svg" class="nav-main__icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>} link="" />
      <Navcomp title="Werkplek" icon={<svg xmlns="http://www.w3.org/2000/svg" class="nav-main__icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>} link="" />
    </div>

    <div class="adminNav">
      <Navcomp title="Gebruikers" icon={<svg xmlns="http://www.w3.org/2000/svg" class="nav-main__icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>} link="" />
      <Navcomp title="Producten" icon={<svg xmlns="http://www.w3.org/2000/svg" class="nav-main__icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>} link="" />
    </div>

    <div class="botNav">
      <Navcomp title="Account" icon={<svg xmlns="http://www.w3.org/2000/svg" class="nav-main__icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>} link="" />
    </div>


  </nav>
}

export default Sidebar;
