import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <div className="AppBar" >
            <img src="http://info.org.il/club/blogim-logo-small.png" alt="glasses illustration" />
            <p className="Title">
                כתיבה עצמאית מעניינת בעברית
            </p>
        </div>
    )
}