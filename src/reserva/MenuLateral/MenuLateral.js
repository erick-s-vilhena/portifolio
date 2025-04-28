import  './MenuLateral.scss';
import Tema from '../Theme/Tema';
import { useContext } from 'react';
import { SectionContext } from '../../context/SectionContext';

export default function MenuLateral(){ 
    const { section, setSection} = useContext(SectionContext)

    return(
        <div className="menu_lateral">
            
            <Tema/>

            <section className='slides'>
                <div className='ponto'>
                    <div  className={`quadrado ${section === 'home' && 'select'}`} 
                        onClick={()=>{setSection('home')}}>
                    </div>
                    <p>Início</p>
                </div>

                <div className='ponto'>
                    <div className={`quadrado ${section === 'sobre' && 'select'}`} 
                        onClick={()=>{setSection('sobre')}}>
                    </div>

                    <p>Sobre mim</p>
                </div>

                <div className='ponto'>
                    <div className={`quadrado`} ></div>
                    <p>Habilidades</p>
                </div>

                <div className='ponto'>
                    <div className={`quadrado`}></div>
                    <p>Projetos</p>
                </div>

                <div className='ponto'>
                    <div className={`quadrado`} ></div>
                    <p>Contatos</p>
                </div>

            </section>
        </div>
    )
}