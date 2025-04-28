import Home from "./components/Home/Home";
import MenuLateral from "./components/MenuLateral/MenuLateral";
import MenuMobile from "./components/mobile/MenuMobile/MenuMobile";
import Sobre from "./components/Sobre/Sobre";
import React from 'react';
import SectionContextProvider from "./context/SectionContext";

function App() {


    return (
        <div className="App">
            <SectionContextProvider>
                <main className="interface">
                    <Home/>
                    <Sobre/>
                </main>
                
                <MenuLateral/>
                <MenuMobile/> 
                
            </SectionContextProvider>
        </div>
    );
}

export default App;
