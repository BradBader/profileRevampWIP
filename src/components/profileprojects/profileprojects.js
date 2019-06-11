import React, { Component } from "react";



class ProfileProject extends Component {

    render() {
        return (
            <div>

                <img alt={this.props.name} src={this.props.image} key={this.props.id} href={this.props.link} />
                <span className="card-title">{this.props.alt}</span>

                <a href={this.props.link} />

            </div>


        );
    }
}

export default ProfileProject;
