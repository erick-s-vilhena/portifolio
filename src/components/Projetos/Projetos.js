import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import './Projetos.scss';

export default function Projetos(){
    
    function BoxProjeto(){
        return (
            <div className='box-projeto'>
                <div className='decoracao sup'>

                </div>

                <div className='projeto-sigle'>
                    
                </div>

                <div className='decoracao bot'>
                    <div className='plug-anterior'></div>

                    <div className='aux'>
                        <div className='plug-atual'></div>

                        <div className='linha'></div>
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