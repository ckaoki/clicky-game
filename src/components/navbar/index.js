import React from "react";
import "./style.css";

function Navbar(){
    return(
        <nav class="navbar navbar-dark bg-primary fixed-top">
            <ul>
                <li class="navbar-brand" id="title">Clicky Game</li>
                <li class="navbar-brand" id="direction">Click an image to begin!</li>
                <li class="navbar-brand">Score: 0 | Top Score: 0</li></ul>
        </nav>
    )
}

export default Navbar;