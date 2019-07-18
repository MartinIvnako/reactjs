import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge
        }
    }
    
    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        })
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
                <button onClick={ () => this.onMakeOlder() } className="btn btn-primary">Make me older!</button>
                  
            </div>







        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired,
};

// vramci poli musim pri poliach pouzivat key

// this.onMakeOlder.bind(this) nereprezentuje classu ale odkazuje sa na metodu nasej classy
// <button onClick={this.onMakeOlder.bind(this)} ...
// 
// 
// https://www.youtube.com/watch?v=OcM__8q6p4c&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=8