import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <div className="AppBar" >
            <img className="TitleFav" src="http://info.org.il/club/blogim-logo-small.png" alt="glasses illustration" />
            <div className="Title">
                כתיבה עצמאית מעניינת בעברית
            </div>
        </div>
    )
}