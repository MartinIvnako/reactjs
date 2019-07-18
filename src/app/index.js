import React from "react";
import { render } from "react-dom";


import { Header } from "./components/Header";
import { Home } from "./components/Home";

// create components
class App extends React.Component {     // root compoment
    onGetMoney() {
        alert('na!');
    }



    render() {

        var navigation = {
            links : [
                'home',
                'about',
                'portfolio',
                'contact'],
            name: 'Martin Ivanko'
        }

        return(
            <div>
                <Header navigation={navigation} initialMoney={15687} getMoney={this.onGetMoney}/>
                <Home/>
            </div>
        );
    }
}

// metoda render zoberie classsu app, napis kde a zrejnderuj ju
render(<App/>, window.document.getElementById("app"));

