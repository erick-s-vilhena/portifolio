import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import Escada from '../design/Escada/Escada'
import './Projetos.scss';
import Nivelamento from '../../img/nivelamento.png';

export default function Projetos(){
    
    function BoxProjeto(){
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
                    <img src={ Nivelamento }/>
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
                    A jornada até aqui
                    <div className='traco'></div>
                </h1>

                <section>
                    <div className='container-projetos'>

                        <BoxProjeto/>

                        <BoxProjeto/>

                        <BoxProjeto/>

                        <BoxProjeto/>

                        <BoxProjeto/>   

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