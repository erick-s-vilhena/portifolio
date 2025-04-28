import './Header.scss';
import Logo from '../design/Logo/Logo'
import Tema from '../Theme/Tema';
import MenuMobile from '../mobile/MenuMobile/MenuMobile';

export default function Header(){
    return(
        <div className='Header'>
            <div className='logo'>
                <Logo/>
            </div>

            <div className='btn-tema'>
                <Tema/> 
            </div>

            <MenuMobile/>
        </div>
    )
}