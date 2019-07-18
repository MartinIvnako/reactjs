import React from "react";
import { render } from "react-dom";


import { Header } from "./components/Header";
import { Home } from "./components/Home";

// create components
class App extends React.Component {     // root compoment
    render() { // render method
        // premenne tieto alebo aj priamo v kode si mozem zobrazit na inej 
        //komponente pomocou {this.props.name}
        var user = {
            name: 'anna',
            hobbies: ['Volleyball', 'eeee']
        };

        var xxx = 15;
        
        
        // vrat mi vyrenderovane
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={'15'} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        
                        <Home name={"Max"} initialAge={27} user={user}> 
                        <p>This is children</p>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}

// metoda render zoberie classsu app, napis kde a zrejnderuj ju
render(<App/>, window.document.getElementById("app"));



// https://www.youtube.com/watch?v=GIU8ekYndKw&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=7




// extend - rozsirenie
// props - data prichadzajuce z inej komponenty, ak mame componentu, v inej komponente, ktora je v inej componente a tu chceme nadefnovat
// state - data ktore su dostupne priamo v danej komponente, do something with this
// prop type - tell react, typ of props
// bind - svazat
// executed - odkazuje na
