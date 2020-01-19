import React from "react";
import close from "../images/close.svg"

function Nav(props) {
    const menuClass = props.isOpen === true ? "nav-active" : "";
    return (
        <nav className={menuClass}>
            <div className="close">
                <img onClick={props.handleClickNav} src={close} alt="Close" />
            </div>
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="#home" className="nav__link">Home</a>
                </li>
                <li className="nav__item">
                    <a href="#about" className="nav__link">Features</a>
                </li>
                <li className="nav__item">
                    <a href="#shorten" className="nav__link">Shorten</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;