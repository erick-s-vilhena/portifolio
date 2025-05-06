import './SobreMobile.scss';
import Pontos from '../../design/Pontos/Pontos'
import Bolas from '../../design/Bolas/Bolas'
import { useState } from 'react';

export default function SobreMobile(){
    const [slide, setSlide] = useState('Sobre mim');

    return(
        <div className="mobile">

            <main>
                <div className='fig'>
                    <Pontos rt={0} st={'st'}/>

                    <Bolas lf={0} bt={0}/>

                </div>

                <div className='texto'>
                    <div className="box_texto" 
                        style={{left: slide === 'Sobre mim' ? 0 : '-100%'}}>


                        <div className='texto_sobre'>
                            <h1>
                                Um pouco sobre mim
                                <div className='traco'></div>
                            </h1>

                            <p>Olá! Sou o Erick, um desenvolvedor em formação com paixão por tecnologia, música, animais e jogos. Desde criança, sempre fui curioso para entender como as coisas funcionam, desmontando aparelhos eletrônicos só para explorar seus segredos. Essa curiosidade se transformou em um interesse genuíno por programação, que começou em setembro de 2022 com o desenvolvimento Front-End, área onde encontrei o equilíbrio ideal entre criatividade, lógica e resolução de problemas.
                            </p>
                        </div>

                        <div className='texto_onde'>
                            <h1>
                                Onde estou
                                <div className='traco'></div>
                            </h1>

                            <p>
                                Atualmente, sou estagiário na NUMA-UFPA, contribuindo para a criação e manutenção de sistemas que impactam positivamente a vida das pessoas. Estou em constante evolução, aprimorando minhas habilidades por meio de cursos e projetos pessoais, com foco na stack JavaScript (Node.js e React). Acredito no poder das pequenas atitudes diárias e na importância do aprendizado em equipe para o crescimento pessoal e profissional. Meu sonho é liderar uma equipe de desenvolvedores e inspirar outras pessoas nessa jornada de transformação digital.
                            </p>
                        </div>
                    </div>

                    <button className={`${slide === 'Sobre mim' ? 't-um' : 't-dois'}`} 
                            onClick={()=> slide === 'Sobre mim' ? setSlide('Onde estou') : setSlide('Sobre mim')}>
                        {slide === 'Sobre mim' ? `Onde estou >>` : '<< Sobre mim'}

                    </button>
                </div>

                <div className='fig'>
                    <Pontos lf={0} st={'st'}/>

                    <Bolas tp={0} rt={0}/>

                </div>
                
            </main>
        </div>
    )
}