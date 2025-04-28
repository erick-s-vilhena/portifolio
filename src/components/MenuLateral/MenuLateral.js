import  './MenuLateral.scss';
import { useContext } from 'react';
import { SectionContext } from '../../context/SectionContext';

function Ponto({texto, sessao}){
    const { section, setSection} = useContext(SectionContext)

    return(
        <div className='ponto'>
            <div  className={`quadrado ${section === sessao && 'select'}`} 
                onClick={()=>{setSection(sessao)}}>
            </div>
            <p>{texto}</p>
        </div>
    )
}

export default function MenuLateral(){ 
    return(
        <div className="menu_lateral">

            <section className='container'>
                <Ponto texto={'Início'} sessao={'Home'}/>

                <Ponto texto={'Sobre mim'} sessao={'Sobre'}/>

                <Ponto texto={'Habilidades'} sessao={'Habilidades'}/>

                <Ponto texto={'Projetos'} sessao={'Projetos'}/>

                <Ponto texto={'Contato'} sessao={'Contato'}/>
            </section>
        </div>
    )
}