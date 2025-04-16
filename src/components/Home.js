import '../styles/Home.scss'
import '../styles/mobile/Home-mobile.scss'
import Logo from '../img/logo.svg';
import Perfil from '../img/perfil.png';
import { RiLinkedinFill , RiGithubFill, RiArrowDownDoubleFill } from "react-icons/ri";
import { CgMail } from "react-icons/cg";
import { TbFileCv } from "react-icons/tb";
import { FaMoon, FaSun  } from "react-icons/fa";
import MenuLateral from './MenuLateral';


export default function Home(){

    return (
        <div className="home container-xxl ">
            <MenuLateral/>

            <header className='row'>
                <div className='col'>a</div>

                <div className='col'>a</div>
            </header>
        </div>
    )
}