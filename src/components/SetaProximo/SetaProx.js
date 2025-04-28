import { RiArrowDownDoubleFill } from 'react-icons/ri'
import './SetaProx.scss'
import { useContext } from 'react';
import { SectionContext } from '../../context/SectionContext';

export default function SetaProx(props){

    const { proxSlide } = useContext(SectionContext)

    return(
        <div className='seta'>
            <div className='center'>
                <button onClick={()=> proxSlide()}>{props.text}</button>

                <div className='icon_seta'>
                    <button onClick={()=> proxSlide()}><RiArrowDownDoubleFill /></button>
                </div>
            </div>
        </div>
    )
}