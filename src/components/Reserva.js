import '../styles/Home.scss'
import '../styles/mobile/Home-mobile.scss'
import Logo from '../img/logo.svg';
import Perfil from '../img/perfil.png';
import { RiLinkedinFill , RiGithubFill, RiArrowDownDoubleFill } from "react-icons/ri";
import { CgMail } from "react-icons/cg";
import { TbFileCv } from "react-icons/tb";



export default function Home(){

    return (
        <div className="home">

            <header>
                <div className='logo'>
                    <img src={Logo} alt='logo'/>
                </div>

                <nav>
                    <a className='select' href='./'><p>Início</p></a>
                    <a href='./'><p>Sobre mim</p></a>
                    <a href='./'><p>Projetos</p></a>
                    <a href='./'><p>Contatos</p></a>

                    <div className='tema'>
                        <span><FaMoon/></span>
                        <span><FaSun/></span>

                        <div className='interruptor'></div>
                    </div>
                </nav>


            </header>

            <main>
                <section className='apresentacao'>
                    <div className='center'>
                        <h2>Olá,</h2>
                        <h1>Meu nome é Erick</h1>
                        <p>e sou desenvolverdor Front-End</p>
                        <div className='icons_contato'>
                            <a  
                                href='https://linkedin.com/in/erick-vilhena/' 
                                target='_blank'
                                rel="noopener noreferrer">
                                <RiLinkedinFill/>
                            </a>
                            
                            <a href='./'><RiGithubFill/></a>

                            <a href='./'><CgMail/></a>

                            <a href='./'><TbFileCv/></a>
                            
                            <div className='line'>
                                <div className='line_roxa'></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='perfil'>
                    <div className='aux' >

                        <div className='foto'>
                            <img src={Perfil} alt='foto de perfil'/>
                        </div>

                        <div className='giro'>
                            <div className='quadrado um'>
                                <div className='linha um'></div>
                            </div>

                            <div className='quadrado dois'>
                                <div className='linha dois'></div>
                            </div>
                        </div>
                    </div>

                </section>
            </main>

            <section className='seta'>
                <div className='center'>
                    <p>click aqui!</p>

                    <div className='icon_seta'>
                        <a href='./'><RiArrowDownDoubleFill /></a>
                    </div>
                </div>
            </section>
        </div>
    )
}