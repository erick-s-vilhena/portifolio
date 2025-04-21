import { useState } from 'react';
import '../styles/mobile/MenuMobile.scss';
import Tema from './Tema';

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

                <div className='slides'>
                    <a className='slide_single' href='./'>
                        <p>Início</p>
                        <div className='ponto select'></div>
                    </a>

                    <a className='slide_single' href='./'>
                        <p>Sobre mim</p>
                        <div className='ponto'></div>
                    </a>

                    <a className='slide_single' href='./'>
                        <p>Meus projetos</p>
                        <div className='ponto'></div>
                    </a>

                    <a className='slide_single' href='./'>
                        <p>Entre em contato</p>
                        <div className='ponto'></div>
                    </a>
                </div>
            </div>
        </>
    )
}