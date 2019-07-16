import React from "react";

export class Header extends React.Component { 
    render() {

        console.log(this.props);
        return(
            <nav className="navbar navbar-default">
                <div className="container">
                    <ul className="nav navbar-nav">
                        <li><a href="#">Home</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}



