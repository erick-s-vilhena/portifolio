import './Escada.scss'

export default function Escada(props){
    return(
        <div className={`escada ${props.st}`} 
            style={{top: props.tp, 
                    left: props.lf, 
                    right: props.rt, 
                    bottom: props.bt,}}
                >

            {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className='dg'></div>
            ))}

        </div>
    )
}