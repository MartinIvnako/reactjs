import React from "react";
import { render } from "react-dom";


import { Header } from "./components/Header";
import { Home } from "./components/Home";

// create components
class App extends React.Component {     // root compoment
  
}

// metoda render zoberie classsu app, napis kde a zrejnderuj ju
render(<App/>, window.document.getElementById("app"));

