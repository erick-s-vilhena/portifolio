import './Pontos.scss'

export default function Pontos(props){

    return (
        <div className={`pontos ${props.st}`} 
            style={{top: props.tp, 
                    left: props.lf, 
                    right: props.rt, 
                    bottom: props.bt}}>

            {Array.from({ length: props.num ? props.num : 144 }).map((_, index) => (
                <div key={index} className='pt'></div>
            ))}

        </div>
    )
}