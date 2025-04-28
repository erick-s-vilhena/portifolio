import { useContext, useState } from 'react';
import './MenuMobile.scss';
import Tema from '../../Theme/Tema';
import { SectionContext } from '../../../context/SectionContext';

function Ponto({texto, sessao}){
    const { section, setSection} = useContext(SectionContext)

    return(
        <div className='ponto' onClick={()=> {setSection(sessao)}}>
            <p>{texto}</p>
            <div className={`quadrado ${section === sessao && 'select'}`}></div>
        </div>
    )
}

export default function MenuMobile(){
    const [menuOpen, setMenuOpen] = useState(false)

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

                <div className='container'>
                    <Ponto texto={'Início'} sessao={'Home'}/>

                    <Ponto texto={'Sobre mim'} sessao={'Sobre'}/>

                    <Ponto texto={'Habilidades'} sessao={'Habilidades'}/>

                    <Ponto texto={'Projetos'} sessao={'Projetos'}/>

                    <Ponto texto={'Contato'} sessao={'Contato'}/>
                </div>
            </div>
        </>
    )
}