import './Sobre.scss'
import SetaProx from '../SetaProximo/SetaProx'
import Pontos from '../design/Pontos/Pontos'
import Bolas from '../design/Bolas/Bolas'
import SobreMobile from '../mobile/SobreMobile/SobreMobile'

export default function Sobre(){
    return(
        <div className="sobre page">
            <SobreMobile/>

            <div className='desktop'>

                <header>

                </header>

                <main>
                    <section className='sup'>
                        <div className='texto'>
                            <h1>
                                Um pouco sobre mim
                                <div className='traco'></div>
                            </h1>

                            <br/>
                            <p>
                            Olá! Sou o Erick, um desenvolvedor em formação com paixão por tecnologia, música, animais e jogos. Desde criança, sempre fui curioso para entender como as coisas funcionam, desmontando aparelhos eletrônicos só para explorar seus segredos. Essa curiosidade se transformou em um interesse genuíno por programação, que começou em setembro de 2022 com o desenvolvimento Front-End, área onde encontrei o equilíbrio ideal entre criatividade, lógica e resolução de problemas.
                            </p>
                        </div> 

                        <div className='fig'>

                            <Pontos rt={0}/>

                            <Bolas bt={0} lf={`20%`}/>
                        </div> 
                    </section>

                    <section className='bot'>
                        <div className='fig'>

                            <Pontos lf={0} />

                            <Bolas bt={0} rt={0}/>
                        
                        </div> 

                        <div className='texto'>
                            <h1>
                                Onde estou
                                <div className='traco'></div>
                            </h1>
                            <br/>
                            <p>
                            Atualmente, sou estagiário na NUMA-UFPA, contribuindo para a criação e manutenção de sistemas que impactam positivamente a vida das pessoas. Estou em constante evolução, aprimorando minhas habilidades por meio de cursos e projetos pessoais, com foco na stack JavaScript (Node.js e React). Acredito no poder das pequenas atitudes diárias e na importância do aprendizado em equipe para o crescimento pessoal e profissional. Meu sonho é liderar uma equipe de desenvolvedores e inspirar outras pessoas nessa jornada de transformação digital.
                            </p>  
                        </div> 
                    </section>

                </main>

                <SetaProx text='continue'/>

            </div>
        </div>
    )
}