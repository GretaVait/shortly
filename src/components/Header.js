import React from "react"
import logo from "../images/logo.svg"
import menu from "../images/menu.svg"
import Nav from "./Nav"

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            navOpen: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            navOpen: !this.state.navOpen
        })
    }

    render() {
        return (
            <header>
                <img src={logo} alt="Logo"/>
                <div className="menu">
                    <img onClick={this.handleClick} src={menu} alt=""/>
                </div>
                <Nav isOpen={this.state.navOpen} handleClickNav={this.handleClick}/>
            </header>
        )
    }
}

export default Header;