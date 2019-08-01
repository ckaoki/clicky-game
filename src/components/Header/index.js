import React from "react";
import "./style.css";

const Header = props => {
    return(
        <div className="container bg-primary">
            <div className="row">
                <div className="col-4" id="title">
                    Clicky Game
                </div>
                <div className="col-4 text-center" id="message">
                    {props.message}
                </div>
                <div className="col-4 text-right" id="scores">
                 Score: {props.score} | Top Score: {props.topScore}
                </div>
            </div>
        </div>
    )
}

export default Header;