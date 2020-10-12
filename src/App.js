import React from 'react';


import MenuComponent from './component/MenuComponent';

import { Navbar, NavbarBrand } from "reactstrap";
import { BrowserRouter } from 'react-router-dom';
import MainComponent from "./component/MainComponent";






function App() {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>

  );
}

export default App;
