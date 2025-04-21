import Home from "./components/Home";
import MenuLateral from "./components/MenuLateral";
import MenuMobile from "./components/MenuMobile";
import Sobre from "./components/Sobre";
import React from 'react';


function App() {

  return (
    <div className="App">
      <main>
        <Home/>
        <Sobre/>
      </main>
      
      <MenuLateral/>
      <MenuMobile/> 
    </div>
  );
}

export default App;
