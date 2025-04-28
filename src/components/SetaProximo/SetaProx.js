import { RiArrowDownDoubleFill } from 'react-icons/ri'
import './SetaProx.scss'
import { useContext, useEffect, useMemo, useState } from 'react';
import { SectionContext } from '../../context/SectionContext';

export default function SetaProx(){

    const { section, proxSlide } = useContext(SectionContext);

    const [text, setText] = useState('')

    const texto = useMemo(() => ({
 
        Home: 'click aqui',
        Sobre: 'continue'
     
    }), [])

    useEffect(()=>{
        if (texto[section]) {
            setText(texto[section]);
        }
    }, [section, texto])

    return(
        <div className='seta'>
            <div className='center'>

                <button onClick={()=> proxSlide()}>
                    {text}
                </button>

                <div className='icon_seta'>
                    
                    <button onClick={()=> proxSlide()}>
                        <RiArrowDownDoubleFill />
                    </button>

                </div>
            </div>
        </div>
    )
}