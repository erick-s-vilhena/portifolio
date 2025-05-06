import Home from '../Home/Home';
import Sobre from '../Sobre/Sobre';
import Habilidades from '../Habilidades/Habilidades';
import Projetos from '../Projetos/Projetos'
import './Section.scss';
import { useContext, useEffect, useState } from 'react';
import { SectionContext } from '../../context/SectionContext';

export default function Section(){
    const { section } = useContext(SectionContext)

    const [sessao, setSessao] = useState(0)

    useEffect(()=>{
        if(document.querySelector(`.${section}`)){
            setSessao(document.querySelector(`.${section}`).offsetTop)
        }

    }, [section])

    return(
        <div className='Section'>
            <div className='interface' style={{top: `-${sessao}px`}}>
                
                <Home/>

                <div className='espaco'></div>

                <Sobre/>

                <div className='espaco'></div>

                <Habilidades/>

                <div className='espaco'></div>

                <Projetos/>
            </div>
        </div>
    )
}