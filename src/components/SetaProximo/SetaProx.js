import { RiArrowDownDoubleFill } from 'react-icons/ri'
import './SetaProx.scss'

export default function SetaProx(props){
    const slide = ['.home', '.sobre'];

    function proxSlide(e){
        e.preventDefault();

        let atual = document.querySelector('a.select');

        console.log(atual)

    }

    return(
        <div className='seta'>
            <div className='center'>
                <a href='0'
                    onClick={(e)=> proxSlide(e)}>{props.text}</a>

                <div className='icon_seta'>
                    <a href='0'><RiArrowDownDoubleFill /></a>
                </div>
            </div>
        </div>
    )
}