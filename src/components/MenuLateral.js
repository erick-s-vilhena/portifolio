import  '../styles/MenuLateral.scss';
import '../styles/mobile/MenuLateral.scss'
import { FaMoon, FaSun  } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";

export default function MenuLateral(){
    return(
        <div className="menu_lateral ">
            <div className='circu_mobi_open closed'>
                <CgMenuRight/>
            </div>

            <div className='tema'>
                <div className='box'>
                    <span><FaMoon/></span>
                    <span><FaSun/></span>

                    <div className='interruptor'></div>
                </div>
            </div>

            <section className='slides'>
                <a className='ponto'>
                    <a className='select' href='./'><br/></a>
                    <p>Início</p>
                </a>

                <a className='ponto' href='./'>
                    <a  href='./'><br/></a>
                    <p>Sobre mim</p>
                </a>

                <a className='ponto' href='./'>
                    <a  href='./'><br/></a>
                    <p>Projetos</p>
                </a>

                <a className='ponto' href='./'>
                    <a className='a'  href='./'><br/></a>
                    <p>Contatos</p>
                </a>

            </section>
        </div>
    )
}