import React from "react";
import { render } from "react-dom";


import { Header } from "./components/Header";
import { Home } from "./components/Home";

// create components
class App extends React.Component {     // root compoment
    render() { // render method

        // vrat mi vyrenderovane
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home/>
                    </div>
                </div>
            </div>
        );
    }
}

// metoda render zoberie classsu app, napis kde a zrejnderuj ju
render(<App/>, window.document.getElementById("app"));











// extend - rozsirenie