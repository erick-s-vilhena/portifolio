import './styles/index.scss'
import React from 'react';
import Header from './components/Header/Header';
import SectionContextProvider from "./context/SectionContext";
import Section from './components/Sections/Section';
import MenuLateral from './components/MenuLateral/MenuLateral';
import HabilidadeContextProvider from './context/HabilidadeContext';

function App() {
    return (
        <div className="App">
            <SectionContextProvider>
                <HabilidadeContextProvider>

                    <Header/>

                    <main>
                        <Section/>

                        <MenuLateral/>
                    </main>

                </HabilidadeContextProvider>
            </SectionContextProvider>
        </div>
    );
}

export default App;
