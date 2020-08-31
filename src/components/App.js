import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Navbar } from "./Navbar/Navbar";
import Homepage from "./Homepage";
import Menu from "./Menu";
import CategoryMenu from './CategoryMenu'

function App() {
  return (
    <div>
      <BrowserRouter >
        <div className="ui container">
          <Navbar />

          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/menu/category/:id" exact component={CategoryMenu} />
           
          </Switch>
        </div>
      </BrowserRouter>
      {/* <Navbar/>
      <Banner></Banner>
      <Category></Category> */}
    </div>
  );
}

export default App;
