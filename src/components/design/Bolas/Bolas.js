import './Bolas.scss'

export default function Bolas(props){
    return(
        <div className='bolas'
            style={{top: props.tp, 
                    left: props.lf, 
                    right: props.rt, 
                    bottom: props.bt}}>
            
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className='bl'></div>
            ))}

        </div>
    )
}