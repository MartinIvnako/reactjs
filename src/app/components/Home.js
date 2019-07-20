import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
                homeLink: 'changed'
        };
    }
    
    onMakeOlder() {
        this.setState({  // react funkcia ktora zabezpeci livereloading
            age: this.state.age + 3
        })
    }

    onChangeName() {
        this.props.link(this.state.homeLink);
    }
    
    render() {
        return(
            <div>
                <p>This is working.</p>
                <p>{this.props.name}</p>
                <p>{this.state.age}</p>
                <p>{this.props.user.hobbies.map( (hobby, i) => <li key={i}>{hobby}</li>)}</p>
            
                <hr />
                {this.props.children}
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
                <button onClick={this.props.greet} className="btn btn-secondary">Click for alert message</button>
                <button onClick={this.onChangeName.bind(this)} className="btn btn-secondary">Change name</button>
                  
            </div>







        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    user: React.PropTypes.object,
    link: React.PropTypes.func,
    children: React.PropTypes.element.isRequired,
};

// vramci poli musim pri poliach pouzivat key

// this.onMakeOlder.bind(this) nereprezentuje classu ale odkazuje sa na metodu nasej classy
// <button onClick={this.onMakeOlder.bind(this)} ...
// 
// 
// https://www.youtube.com/watch?v=OcM__8q6p4c&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=8