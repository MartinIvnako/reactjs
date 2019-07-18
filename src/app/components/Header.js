import React from "react";
import PropTypes from 'prop-types';

export class Header extends React.Component {

    constructor(props) {
        super();
        this.state = {
            money: props.initialMoney
        }
    }

    onAddMoney() {
        this.setState({
            money: this.state.money + 3
        })
    }

    render() {
        return(
            <header>
                <a href="#">Logo</a>
                <nav>
                    <ul>
                       <p>{this.props.navigation.links.map( (links, i) => <li key={i}>{links}</li> )}</p>
                    </ul>
                        <p>User: {this.props.navigation.name}</p>
                        <p>Money: {this.state.money}</p>
                </nav>

                <button onClick={ this.onAddMoney.bind(this) } >Add money</button>
                <button onClick={ this.props.getMoney } >Alert</button>
            </header>
        );
    }
}

Header.propTypes = {
    navigation : React.PropTypes.object,
    initialMoney : React.PropTypes.number,
    getMoney : React.PropTypes.func
};
