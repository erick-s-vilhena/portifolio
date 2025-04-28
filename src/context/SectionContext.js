import { createContext, useEffect, useRef, useState } from "react";

export const SectionContext = createContext({})

export default function SectionContextProvider({ children }){
    const [section, setSection] = useState('home');
    const slide = ['home', 'sobre'];

    let lastScroll = window.scrollY;
    let isScrolling;

    function handleScroll() {

        const currentScroll = window.scrollY;
        const direction = currentScroll > lastScroll ? 'down' : 'up';
        lastScroll = currentScroll;
        
        clearTimeout(isScrolling);
        
        isScrolling = setTimeout(() => {
            if (direction === 'down') {
                console.log('para baixo')
            }else{
                console.log('para cima')
            }
        }, 100);

    }
    
    window.addEventListener('scroll', handleScroll);

    function antiSlide(){
        let proxPosicao = slide.indexOf(section)

        setSection(slide[proxPosicao - 1])
    }

    function proxSlide(){
        let proxPosicao = slide.indexOf(section)

        setSection(slide[proxPosicao + 1])
    }

    useEffect(()=>{

    let setTop = document.querySelector(`.${section}`).offsetTop;

    console.log(section)

    document.documentElement.style.scrollBehavior = "smooth";
    document.documentElement.scrollTop = setTop;

    }, [section])

    return(
        <SectionContext.Provider value={{ section, setSection, proxSlide }}>
            {children}
        </SectionContext.Provider>
    )
}