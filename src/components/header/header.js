import React, { Component } from "react"
import "./header.css"

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="hbox0">
                    <h1>It's really just a grid test</h1>
                </div>

                <div className="hbox1"><button>Clicking</button></div>

            </div >
        )
    }
}

export default Header;