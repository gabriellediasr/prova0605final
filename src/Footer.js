import React from 'react';
import './Footer.css';
import SESI from './SESI.png';

function Footer() {
    return (
      <footer>
      <div className='footer'>            
        <img src={SESI}  alt="logo" className='img-footer'/><br/>
      </div>
      <div className='text-footer'>
        <p>© 2024 Todos os direitos reservados </p><br></br>
        <p>Contato: (71) 9 9999-9999 </p>
      </div>
      </footer>

    );
}
   
export default Footer;