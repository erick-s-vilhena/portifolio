import { createContext, useEffect, useState } from "react";

export const SectionContext = createContext({})

export default function SectionContextProvider({ children }){
    const [section, setSection] = useState('Home');
    const slide = ['Home', 'Sobre'];


    function proxSlide(){
        let proxPosicao = slide.indexOf(section)

        setSection(slide[proxPosicao + 1])
    }

    useEffect(()=>{

    //let setTop = document.querySelector(`.${section}`).offsetTop;

    console.log(section)

    //document.documentElement.style.scrollBehavior = "smooth";
    //document.documentElement.scrollTop = setTop;

    }, [section])

    return(
        <SectionContext.Provider value={{ section, setSection, proxSlide }}>
            {children}
        </SectionContext.Provider>
    )
}