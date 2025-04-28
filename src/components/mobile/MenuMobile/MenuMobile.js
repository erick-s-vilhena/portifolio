import { useContext, useState } from 'react';
import './MenuMobile.scss';
import Tema from '../../Theme/Tema';
import { SectionContext } from '../../../context/SectionContext';

export default function MenuMobile(){
    const [menuOpen, setMenuOpen] = useState(false)

    const { section, setSection} = useContext(SectionContext)

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

                <div className='slides'>
                    <div className='slide_single' onClick={()=> {setSection('home')}}>
                        <p>Início</p>
                        <div className={`quadrado ${section === 'home' && 'select'}`}></div>
                    </div>

                    <div className='slide_single' onClick={(e)=> {setSection('sobre')}}>
                        <p>Sobre mim</p>
                        <div className={`quadrado ${section === 'sobre' && 'select'}`}></div>
                    </div>

                    <div className='slide_single' href='./'>
                        <p>Meus projetos</p>
                        <div className='quadrado'></div>
                    </div>

                    <div className='slide_single' href='./'>
                        <p>Entre em contato</p>
                        <div className='quadrado'></div>
                    </div>
                </div>
            </div>
        </>
    )
}