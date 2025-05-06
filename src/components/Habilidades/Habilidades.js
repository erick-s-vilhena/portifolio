import './Habilidades.scss'
import LogoJs from '../../img/js.png';
import LogoHTML from '../../img/html.png';
import LogoCSS from '../../img/css.png';
import LogoREACT from '../../img/react.png';
import LogoBt from '../../img/Bootstrap.png';
import LogoSASS from '../../img/sass.png';
import LogoFIGMA from '../../img/Figma.png';
import LogoNODE from '../../img/node.png';
import { useContext } from 'react';
import { SectionContext } from '../../context/SectionContext'
import PopHabilidade from '../PopHabilidade/PopHabilidade';
import { HabilidadeContext } from '../../context/HabilidadeContext';


function BoxHabilidade({img, titulo}){
    const { section } = useContext(SectionContext)
    
    const { setHabilidade } = useContext(HabilidadeContext)
    
    return(
        <div className={`aux-box ${section === 'Habilidades'}`}>

                <div className={`box ${section === 'Habilidades'}`}
                onClick={()=>{ setHabilidade({titulo: titulo, img: img}) }}>
                    <div className='img'>
                        <img src={img} alt={img}/>
                    </div>

                    <p>{titulo}</p>

                </div>
        </div>
    )
}

export default function Habilidades(){   
    
    return(
        <div className='Habilidades'>

            <div className='main'>
                <PopHabilidade/>

                <div className='titulo'>
                    <h1>Minhas habilidades</h1>

                    <div className='traco'></div>
                </div>

                <div className='container-box'>
                    <BoxHabilidade titulo={'JavaScript'} img={LogoJs}/>

                    <BoxHabilidade titulo={'HTML'} img={LogoHTML}/>

                    <BoxHabilidade titulo={'CSS'} img={LogoCSS}/>

                    <BoxHabilidade titulo={'React'} img={LogoREACT}/>

                    <BoxHabilidade titulo={'Bootstrap'} img={LogoBt}/>

                    <BoxHabilidade titulo={'Sass'} img={LogoSASS}/>

                    <BoxHabilidade titulo={'Figma'} img={LogoFIGMA}/>

                    <BoxHabilidade titulo={'Node'} img={LogoNODE}/>
                </div>
            </div>
        </div>
    )
}