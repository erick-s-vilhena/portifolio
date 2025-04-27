import { useState } from 'react';
import './MenuMobile.scss';
import Tema from '../../Theme/Tema';

export default function MenuMobile(){
    const [menuOpen, setMenuOpen] = useState(false)

    const [slideAtivo, setSlideAtivo] = useState('.home');
    
    function selectSlide(e){
        e.preventDefault()

        let href = e.target.getAttribute('href');
        
        let setTop = document.querySelector(href).offsetTop;


        document.documentElement.style.scrollBehavior = "smooth";
        document.documentElement.scrollTop = setTop;

        setSlideAtivo(href);
    }

    return(
        <>  
            <div className={`cortina ${menuOpen && 'open'}`}
                onClick={()=> setMenuOpen(!menuOpen)}>
            </div>

            <div className={`menu_mobile ${menuOpen && 'open'}`}>

                <div className='btn_open_closed' onClick={()=> setMenuOpen(!menuOpen)}>

                    <span></span>
                    <span></span>
                </div>

                <Tema/>

                <div className='slides'>
                    <a className='slide_single' href='.home' onClick={(e)=> {selectSlide(e)}}>
                        <p>Início</p>
                        <div className={`ponto ${slideAtivo === '.home' ? 'select' : ''}`}></div>
                    </a>

                    <a className='slide_single' href='.sobre.mobile' onClick={(e)=> {selectSlide(e)}}>
                        <p>Sobre mim</p>
                        <div className={`ponto ${slideAtivo === '.sobre.mobile' ? 'select' : ''}`}></div>
                    </a>

                    <a className='slide_single' href='./'>
                        <p>Meus projetos</p>
                        <div className='ponto'></div>
                    </a>

                    <a className='slide_single' href='./'>
                        <p>Entre em contato</p>
                        <div className='ponto'></div>
                    </a>
                </div>
            </div>
        </>
    )
}