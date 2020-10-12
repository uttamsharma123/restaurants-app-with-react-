import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import HeaderComponent from "./HeaderComponent";
import Home from "./Home";
import MenuComponent from "./MenuComponent";
import  FooterComponent from "./FooterComponent";
import Contact from "./Contact";
import SpecificFood from "./specificFood";
import About from "./About";


function MainComponent()
{
    return <div className="">
           <HeaderComponent></HeaderComponent>
          <Switch>
              <Route path='/home' component={Home} />
              <Route exact path='/menu' component={MenuComponent} />
              <Route exact path="/menu/:id" component={SpecificFood}/>
              <Route exact path='/contactus' component={Contact} />
              <Route ecact path="/aboutus" component={About}/>

              <Redirect to="/home" />
          </Switch>
          <FooterComponent/>


    </div>
}
export default MainComponent;
