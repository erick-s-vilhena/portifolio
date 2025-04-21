import { RiArrowDownDoubleFill } from 'react-icons/ri'
import '../styles/SetaProx.scss'

export default function SetaProx(props){
    return(
        <div className='seta'>
            <div className='center'>
                <a href='./'>{props.text}</a>

                <div className='icon_seta'>
                    <a href='./'><RiArrowDownDoubleFill /></a>
                </div>
            </div>
        </div>
    )
}