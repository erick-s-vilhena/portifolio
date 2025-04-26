import  './MenuLateral.scss';
import Tema from '../Theme/Tema';
import { useState } from 'react';

export default function MenuLateral(){ 
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
        <div className="menu_lateral">
            
            <Tema/>

            <section className='slides'>
                <div className='ponto'>
                    <a  className={slideAtivo === '.home' ? 'select' : ''} 
                        href='.home' 
                        onClick={(e)=> {selectSlide(e)}}><br/>
                    </a>
                    <p>Início</p>
                </div>

                <div className='ponto'>
                    <a  className={slideAtivo === '.sobre' ? 'select' : ''}  
                        href='.sobre' 
                        onClick={(e)=> {selectSlide(e)}}><br/>
                    </a>
                    <p>Sobre mim</p>
                </div>

                <div className='ponto'>
                    <a className='a'  href='./'><br/></a>
                    <p>Habilidades</p>
                </div>

                <div className='ponto'>
                    <a  href='./'><br/></a>
                    <p>Projetos</p>
                </div>

                <div className='ponto'>
                    <a className='a'  href='./'><br/></a>
                    <p>Contatos</p>
                </div>

            </section>
        </div>
    )
}