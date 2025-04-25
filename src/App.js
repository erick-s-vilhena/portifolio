import Home from "./components/Home/Home";
import MenuLateral from "./components/MenuLateral/MenuLateral";
import MenuMobile from "./components/mobile/MenuMobile/MenuMobile";
import Sobre from "./components/Sobre/Sobre";
import SobreMobile from "./components/mobile/SobreMobile/SobreMobile"
import React from 'react';


function App() {

  return (
    <div className="App">
      <main>
        <Home/>

        <Sobre/>
        <SobreMobile/>
      </main>
      
      <MenuLateral/>
      <MenuMobile/> 
    </div>
  );
}

export default App;
