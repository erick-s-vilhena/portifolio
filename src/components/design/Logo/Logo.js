import { useState } from 'react';
import './Logo.scss'

export default function Logo(){
  const [tipoLogo, setTipoLogo] = useState(true)

  window.addEventListener('scroll', () => {
      if(window.scrollY != 0){
        setTipoLogo(false)
      }
      else{
        setTipoLogo(true)
      }
  });

  return(
    <div className="logo">
      <div className="menor">{'<'}</div>
      <a className={`esv ${tipoLogo}`} href='./'>ESV</a>
      <div className="menor">{'/>'}</div>
    </div>
  )
}