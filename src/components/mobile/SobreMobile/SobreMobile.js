import './SobreMobile.scss';
import SetaProx from '../../SetaProximo/SetaProx';
import Pontos from '../../design/Pontos/Pontos'
import Bolas from '../../design/Bolas/Bolas'

export default function SobreMobile(){
    return(
        <div className="sobre_mobile">
            <header>
                
            </header>

            <main>
                <div className='fig'>
                    <Pontos rt={0} st={'st'}/>

                    <Bolas lf={0} bt={0}/>

                </div>

                <div className='texto'>
                    <h1>Um pouco sobre mim</h1>
                    <p>Olá! Sou o Erick, um desenvolvedor em formação com paixão por tecnologia, música, animais e jogos. Desde criança, sempre fui curioso para entender como as coisas funcionam, desmontando aparelhos eletrônicos só para explorar seus segredos. Essa curiosidade se transformou em um interesse genuíno por programação, que começou em setembro de 2022 com o desenvolvimento Front-End, área onde encontrei o equilíbrio ideal entre criatividade, lógica e resolução de problemas.
                    </p>

                    <button>Proximo {'>>'}</button>
                </div>

                <div className='fig'>
                    <Pontos lf={0} st={'st'}/>

                    <Bolas tp={0} rt={0}/>

                </div>
                
            </main>

            <SetaProx text='continue'/>
        </div>
    )
}