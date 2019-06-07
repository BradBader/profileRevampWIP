import React, { Component } from "react"
import "./header.css"

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="hbox0">
                    <h3>It's really just a grid & flextest</h3>
                    <div class="headerWrapper">

                        
                            <ul>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                          
                            </ul>
                      

                    </div>
                </div>

            </div >
        )
    }
}

export default Header;