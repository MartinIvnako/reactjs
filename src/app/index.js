import React from "react";
import { render } from "react-dom";


import { Header } from "./components/Header";
import { Home } from "./components/Home";

// create components
class App extends React.Component {     // root compoment


    constructor() {
        super();
        this.state = {
            homeLink: 'Home link'
        };
    }

    onChangeLink(newName) {
        this.setState({
            homeLink: newName
        });
    }
    
    onGreet() {
        alert('funguje to!');
    }
    render() { // render method
        // premenne tieto alebo aj priamo v kode si mozem zobrazit na inej 
        //komponente pomocou {this.props.name}
        var user = {
            name: 'anna',
            hobbies: ['Volleyball', 'eeee']
        };
        
        
        // vrat mi vyrenderovane
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        
                        <Home 
                            name={"Max"} 
                            initialAge={27} 
                            user={user} 
                            greet={this.onGreet} 
                            link={this.onChangeLink.bind(this)}> 
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


// Komunikacia medzi rodicom a dietatom - ak chcem poslat nieco z dietata do rodica, musim pouzit funkciu