import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import './Projetos.scss'

export default function Projetos(){
    return(
        <div className='Projetos'>
            
            <main>
                <h1>
                    A jornada até aqui
                    <div className='traco'></div>
                </h1>

                <section>
                    <div className='container-projetos'>
                        
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