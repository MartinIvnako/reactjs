import React from "react";
import { render } from "react-dom";

// create components
class App extends React.Component {     // root compoment
    render() { // render method

        // vrat mi vyrenderovane
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1>Hello!</h1>
                    </div>
                </div>
            </div>
        );
    }
}

// metoda render zoberie classsu app, napis kde a zrejnderuj ju
render(<App/>, window.document.getElementById("app"));











// extend - rozsirenie