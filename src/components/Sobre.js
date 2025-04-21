import '../styles/Sobre.scss'
import Logo from './Logo'
import SetaProx from './SetaProx'

export default function Sobre(){
    return(
        <div className="sobre">
            <header>
                <Logo/>
            </header>

            <main>
                <div className='a'>
                    <h1>
                        Um pouco sobre mim
                        <div className='traco'></div>
                    </h1>

                    <br/>
                    <p>
                    Olá! Sou o Erick, um desenvolvedor em formação com paixão por tecnologia, música, animais e jogos. Desde criança, sempre fui curioso para entender como as coisas funcionam, desmontando aparelhos eletrônicos só para explorar seus segredos. Essa curiosidade se transformou em um interesse genuíno por programação, que começou em setembro de 2022 com o desenvolvimento Front-End, área onde encontrei o equilíbrio ideal entre criatividade, lógica e resolução de problemas.
                    </p>

                    <br/>

                    <p>
                    Atualmente, sou estagiário na NUMA-UFPA, contribuindo para a criação e manutenção de sistemas que impactam positivamente a vida das pessoas. Estou em constante evolução, aprimorando minhas habilidades por meio de cursos e projetos pessoais, com foco na stack JavaScript (Node.js e React). Acredito no poder das pequenas atitudes diárias e na importância do aprendizado em equipe para o crescimento pessoal e profissional. Meu sonho é liderar uma equipe de desenvolvedores e inspirar outras pessoas nessa jornada de transformação digital.
                    </p>  
                </div> 
                <div className='b'>
                <div className="container-carrossel">
                    <div className="ponto-central"></div>
                    <div className="item-carrossel">1</div>
                    <div className="item-carrossel">2</div>
                    <div className="item-carrossel">3</div>
                    <div className="item-carrossel">4</div>
                    <div className="item-carrossel">5</div>
                </div>
                </div> 

            </main>

             <SetaProx text='continue'/>
        </div>
    )
}