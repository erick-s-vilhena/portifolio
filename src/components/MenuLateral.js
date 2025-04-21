import  '../styles/MenuLateral.scss';
import Tema from './Tema';

export default function MenuLateral(){ 
    return(
        <div className="menu_lateral">
            
            <Tema/>

            <section className='slides'>
                <div className='ponto'>
                    <a className='select' href='./'><br/></a>
                    <p>Início</p>
                </div>

                <div className='ponto'>
                    <a  href='./'><br/></a>
                    <p>Sobre mim</p>
                </div>

                <div className='ponto'>
                    <a  href='./'><br/></a>
                    <p>Projetos</p>
                </div>

                <div className='ponto'>
                    <a className='a'  href='./'><br/></a>
                    <p>Contatos</p>
                </div>

            </section>
        </div>
    )
}