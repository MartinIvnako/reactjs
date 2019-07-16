import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    render() {
        return(
            <div>
                <p>This is working.</p>
                <p>{this.props.user.name}</p>
                <p>{this.props.user.hobbies.map( (hobby, i) => <li key={i}>{hobby}</li>)}</p>
            
                <hr />
                {this.props.children}
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired
};

// vramci poli musim pri poliach pouzivat key
