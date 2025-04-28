import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import './Tema.scss';


export default function Tema(){
    // Estado para armazenar o tema atual
    const [theme, setTheme] = useState('light');

    // Efeito para aplicar o tema quando ele mudar
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    // Função para alternar entre temas
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');

    };

    return(
        <div className='tema'>
            <div className='box' onClick={toggleTheme}>
                <span><FaMoon/></span>
                <span><FaSun/></span>

                <div className={`interruptor ${theme}`}></div>
            </div>
        </div>
    )
}