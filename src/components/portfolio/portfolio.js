import React, { Component } from "react";
import Temp from "../../placeholder.json"
import ProfileProjects from "../profileprojects/profileprojects"


class Portfolio extends Component {

    state = {
        projects: Temp
    }

    render() {
        return (
            <div>
                <p>Portfolio</p>

                        {
                            this.state.projects.map(projects => (
                                <ProfileProjects 
                                    key={projects.id}
                                    id={projects.id}
                                    alt={projects.name}
                                    image={projects.image}
                                    link={projects.link}
                                />
                            ))
                        }
            </div >
        )
    }
}

export default Portfolio;