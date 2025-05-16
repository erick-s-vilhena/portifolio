import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import Escada from '../design/Escada/Escada'
import './Projetos.scss';
import Pri_LaniPage from '../../img/lg-1.png';
import Seg_LaniPage from '../../img/lg-2.png';
import Tri_LaniPage from '../../img/lg-3.png';

import Nivelamento from '../../img/nivelamento.png';



export default function Projetos(){
    
    function BoxProjeto({img, link, titulo, habilidade}){
        return (
            <div className='box-projeto'>

                <div className='decoracao sup'>
                    <div className='plug-anterior'></div>

                    <Escada st="st"/>

                    <div className='aux'>
                        <div className='plug-atual'></div>

                        <div className='linha'>

                            <div className='bola'>
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="0,0 
                                            10,0 
                                            20,10
                                            10,20
                                            0,20
                                            10,10
                                            "/>
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='projeto-sigle'>
                    <img src={ img }/>

                    <h3>{titulo}</h3>
                    
                    <div className='habilidades-usadas'>
            
                        {Array.isArray(habilidade) && habilidade.map((hab, index) => {
                            return(
                                <p className={hab} key={index}>{hab}</p>
                            )
                        })}

                    </div>

                    <a href={link} target='blank_'>Acessar</a>
                </div>

                <div className='decoracao bot'>
                    <div className='plug-anterior'></div>

                    <Escada st="st"/>

                    <div className='aux'>
                        <div className='plug-atual'></div>

                        <div className='linha'>

                            <div className='bola'>
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="0,0 
                                            10,0 
                                            20,10
                                            10,20
                                            0,20
                                            10,10
                                            "/>
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return(
        <div className='Projetos'>
            
            <main>
                <h1>
                    A estrada até aqui
                    <div className='traco'></div>
                </h1>

                <section>
                    <div className='container-projetos'>

                        <BoxProjeto
                            img={Pri_LaniPage}
                            titulo={'1º Landing Page'}
                            link={'https://erick-s-vilhena.github.io/1-Landing-Page/'}
                            habilidade={['HTML', 'CSS']}
                        />

                        <BoxProjeto
                            img={Seg_LaniPage}
                            titulo={'2º Landing Page'}
                            link={'https://erick-s-vilhena.github.io/2-Landing-Page/'}
                            habilidade={['HTML', 'CSS']}
                        />

                        <BoxProjeto
                            img={Tri_LaniPage}
                            titulo={'3º Landing Page'}
                            link={'https://erick-s-vilhena.github.io/3-Landing-Page/'}
                            habilidade={['JavaScript', 'HTML', 'CSS']}
                        />

                        <BoxProjeto
                            img={Nivelamento}
                            titulo={"Nivelamento 2025"}
                            link={'https://nivelamentoitec.ufpa.br/'}
                            habilidade={['JavaScript', 'HTML', 'CSS']}
                        />


                        <BoxProjeto
                            img={Pri_LaniPage}
                            titulo={'1º Landing Page'}
                            link={'https://erick-s-vilhena.github.io/1-Landing-Page/'}
                            habilidade={['HTML', 'CSS']}
                        />

                        <BoxProjeto
                            img={Seg_LaniPage}
                            titulo={'2º Landing Page'}
                            link={'https://erick-s-vilhena.github.io/2-Landing-Page/'}
                            habilidade={['HTML', 'CSS']}
                        />

                        <BoxProjeto
                            img={Tri_LaniPage}
                            titulo={'3º Landing Page'}
                            link={'https://erick-s-vilhena.github.io/3-Landing-Page/'}
                            habilidade={['JavaScript', 'HTML', 'CSS']}
                        />

                        <BoxProjeto
                            img={Nivelamento}
                            titulo={"Nivelamento 2025"}
                            link={'https://nivelamentoitec.ufpa.br/'}
                            habilidade={['JavaScript', 'HTML', 'CSS']}
                        />


                        <BoxProjeto
                            img={Pri_LaniPage}
                            titulo={'1º Landing Page'}
                            link={'https://erick-s-vilhena.github.io/1-Landing-Page/'}
                            habilidade={['HTML', 'CSS']}
                        />

                        <BoxProjeto
                            img={Seg_LaniPage}
                            titulo={'2º Landing Page'}
                            link={'https://erick-s-vilhena.github.io/2-Landing-Page/'}
                            habilidade={['HTML', 'CSS']}
                        />

                        <BoxProjeto
                            img={Tri_LaniPage}
                            titulo={'3º Landing Page'}
                            link={'https://erick-s-vilhena.github.io/3-Landing-Page/'}
                            habilidade={['JavaScript', 'HTML', 'CSS']}
                        />

                        <BoxProjeto
                            img={Nivelamento}
                            titulo={"Nivelamento 2025"}
                            link={'https://nivelamentoitec.ufpa.br/'}
                            habilidade={['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Sass', 'Firebase', 'Node', 'React']}
                        />
                        
                        
                    </div>

                    
                    <nav>

                        <button className='left'>
                            <MdKeyboardDoubleArrowLeft className='icon'/>
                            antes
                        </button>

                        <button className='right'>
                            agora 
                            <MdKeyboardDoubleArrowRight className='icon'/>
                        </button>

                    </nav>
                </section>
            </main>

        </div>
    )
}