import { RiArrowDownDoubleFill } from 'react-icons/ri'
import './SetaProx.scss'

export default function SetaProx(props){
    const slide = ['.home', '.sobre'];

    function proxSlide(e){
        e.preventDefault();

        let atual = document.querySelector('a.select');

        let posicao = slide.indexOf(atual.getAttribute('href'))

        let setTop = 0

        if(document.querySelector(`${slide[posicao + 1]}`).offsetTop){
            setTop = document.querySelector(`${slide[posicao + 1]}`).offsetTop;
        }else{
            setTop = document.querySelector(`${slide[posicao + 1]}.mobile`).offsetTop;
        }

        document.documentElement.style.scrollBehavior = "smooth";
        document.documentElement.scrollTop = setTop;
    }

    return(
        <div className='seta'>
            <div className='center'>
                <button onClick={(e)=> proxSlide(e)}>{props.text}</button>

                <div className='icon_seta'>
                    <button onClick={(e)=> proxSlide(e)}><RiArrowDownDoubleFill /></button>
                </div>
            </div>
        </div>
    )
}