import '../styles/Home.scss'
import Perfil from '../img/perfil.png';
import { RiLinkedinFill , RiGithubFill } from "react-icons/ri";
import { CgMail } from "react-icons/cg";
import { TbFileCv } from "react-icons/tb";
import SetaProx from './SetaProx';
import Logo from './Logo';


export default function Home(){

    return (
        <div className="home">
            <header>
                <Logo/>
            </header>
            
            <main>
                <div className='apresentacao'>
                    <div className='center'>
                        <h2>Olá,</h2>
                        <h1>Meu nome é Erick</h1>
                        <p>Sou desenvolvedor Front-End e tenho paixão por 
                            criar interfaces escaláveis e responsivas.
                        </p>
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
                </div>

                <div className='perfil'>
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

                </div>
            </main>

            <SetaProx text='click aqui!'/>
        </div>
    )
}