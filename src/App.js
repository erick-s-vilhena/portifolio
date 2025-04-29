import './styles/index.scss'
import React from 'react';
import Header from './components/Header/Header';
import SectionContextProvider from "./context/SectionContext";
import Section from './components/Sections/Section';
import MenuLateral from './components/MenuLateral/MenuLateral';
import SetaProx from './components/SetaProximo/SetaProx'

function App() {
    return (
        <div className="App">
            <SectionContextProvider>
                <Header/>

                <main>
                    <Section/>

                    <MenuLateral/>
                </main>

                <SetaProx/>
            </SectionContextProvider>
        </div>
    );
}

export default App;
