import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <div className="AppBar" onClick={() => window.location.href = '/'}>
            <div className="TitleFav">
                <img src="https://info.org.il/club/blogim-logo-small.png" alt="glasses illustration" />
            </div>
            <div className="Title">
                כתיבה עצמאית מעניינת בעברית
            </div>
        </div>
    )
}