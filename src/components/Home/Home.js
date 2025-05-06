import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri'
import './Home.scss'
import { CgMail } from 'react-icons/cg'
import { TbFileCv } from 'react-icons/tb'
import Escada from '../design/Escada/Escada'
import  Perfil  from '../../img/perfil.png'
import { useContext } from 'react'
import { SectionContext } from '../../context/SectionContext'
import SetaProx from '../SetaProximo/SetaProx'

export default function Home(){
    const { section } = useContext(SectionContext)

    return(
        <div className='Home'>
            <div className='desktop'>
                
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

                        </div>{/*icons_contato*/}

                    </div>
                </div>{/*apresentacao*/}

                <div className='perfil'>
                    <div className={`aux ${section === 'Home'}`} >
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

                        <Escada tp={0} rt={0} st={'st'}/>

                        <Escada bt={0} lf={0}/>
                    </div>

                </div>

            </div>

            <SetaProx/>
        </div>
    )
}