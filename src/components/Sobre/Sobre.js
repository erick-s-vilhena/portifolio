import './Sobre.scss';
import Pontos from '../design/Pontos/Pontos';
import Bolas from '../design/Bolas/Bolas';
import SobreMobile from '../mobile/SobreMobile/SobreMobile';
import { useContext } from 'react';
import { SectionContext } from '../../context/SectionContext';

export default function Sobre(){
    const { section } = useContext(SectionContext)

    return(
        <div className='Sobre'>

            <SobreMobile/>

            <div className='desktop'>
                <div className={`sobre-mim`}>

                    <div className={`texto ${section !== 'Sobre'}`}>
                        <h1>
                            Um pouco sobre mim
                            <div className='traco'></div>
                        </h1>

                        <p>
                            Olá! Sou o Erick, um desenvolvedor em formação com paixão por tecnologia, música, animais e jogos. Desde criança, sempre fui curioso para entender como as coisas funcionam, desmontando aparelhos eletrônicos só para explorar seus segredos. Essa curiosidade se transformou em um interesse genuíno por programação, que começou em setembro de 2022 com o desenvolvimento Front-End, área onde encontrei o equilíbrio ideal entre criatividade, lógica e resolução de problemas.
                        </p>
                    </div>

                    <div className='fig'>
                        
                        <Pontos lf={20} tp={60} st={'st'}/>

                        <Bolas bt={0} rt={20}/>

                    </div> 

                </div>

                <div className='onde-estou'>
                    <div className='fig'>

                        <Pontos rt={20} st={'st'}/>

                        <Bolas bt={0} lf={20}/>
                    
                    </div> 


                    <div className={`texto ${section !== 'Sobre'}`}>
                        <h1>
                            Onde estou
                            <div className='traco'></div>
                        </h1>
                        
                        <p>
                            Atualmente, sou estagiário na NUMA-UFPA, contribuindo para a criação e manutenção de sistemas que impactam positivamente a vida das pessoas. Estou em constante evolução, aprimorando minhas habilidades por meio de cursos e projetos pessoais, com foco na stack JavaScript (Node.js e React). Acredito no poder das pequenas atitudes diárias e na importância do aprendizado em equipe para o crescimento pessoal e profissional. Meu sonho é liderar uma equipe de desenvolvedores e inspirar outras pessoas nessa jornada de transformação digital.
                        </p>  
                    </div> 
                </div>
            </div>
        </div>
    )
}