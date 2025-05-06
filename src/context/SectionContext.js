import { createContext, useEffect, useState, useRef, useCallback, useMemo  } from "react";

export const SectionContext = createContext({})

export default function SectionContextProvider({ children }){
    const [section, setSection] = useState('Home');
    const slide =  useMemo(() => ['Home', 'Sobre', 'Habilidades', 'Projetos'], []);
    const isScrolling = useRef(false);


    const proxSlide = useCallback(() => {
        setSection(prev => {
            const proxPosicao = slide.indexOf(prev);
            if ((proxPosicao + 1) < slide.length) {
                return slide[proxPosicao + 1];
            } else {
                return slide[proxPosicao];
            }
        });
    }, [slide]);
    
    const antiSlide = useCallback(() => {
        setSection(prev => {
            const proxPosicao = slide.indexOf(prev);
            if ((proxPosicao - 1) < 0) {
                return slide[proxPosicao];
            } else {
                return slide[proxPosicao - 1];
            }
        });
    }, [slide]);

    useEffect(() => {
        const handleWheel = (event) => {
            if (!isScrolling.current) {
                isScrolling.current = true;
                
                const direction = event.deltaY > 0 ? 'down' : 'up';
                
                if(direction === 'down'){
                    proxSlide()
                }else{
                    antiSlide()
                }
                
                
                setTimeout(() => {
                    isScrolling.current = false;
                }, 2000);
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: true });
        
        return () => { 
            window.removeEventListener('wheel', handleWheel);
        };
    }, [antiSlide, proxSlide]);


    useEffect(() => {
        let touchStartY = 0;
        let touchEndY = 0;
        let prevTouchAndY = 0;
    
        const handleTouchStart = (event) => {
            touchStartY = event.touches[0].clientY;
        };
    
        const handleTouchEnd = () => {
            const deltaY = touchStartY - touchEndY;

            //console.log(touchStartY + ' ' + touchEndY + ' ' + prevTouchAndY + ' ' + deltaY)

            if (!isScrolling.current && touchEndY !== prevTouchAndY && Math.abs(deltaY) > 100) {
                isScrolling.current = true;
    
                const direction = deltaY > 0 ? 'down' : 'up';
    
                if (direction === 'down') {
                    proxSlide();
                } else {
                    antiSlide();
                }
    
                setTimeout(() => {
                    isScrolling.current = false;
                }, 1000);

                prevTouchAndY = touchEndY;
            }
        };
    
        const handleTouchMove = (event) => {
            touchEndY = event.touches[0].clientY;
        };
    
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchend', handleTouchEnd);
    
        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [antiSlide, proxSlide]);
    
    return(
        <SectionContext.Provider value={{ section, setSection, proxSlide }}>
            {children}
        </SectionContext.Provider>
    )
}