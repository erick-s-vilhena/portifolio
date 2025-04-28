import { useContext } from 'react';
import './Logo.scss'
import { SectionContext } from '../../../context/SectionContext';

export default function Logo(){
  const { section, setSection } = useContext(SectionContext);

  return(
    <div className="logo" onClick={()=>{ setSection('Home') }}>
      <div className="menor">{'<'}</div>

      <div className={`esv ${section !== 'Home' && 'sumir'}`}>
          ESV
      </div>

      <div className="menor">{'/>'}</div>
    </div>
  )
}