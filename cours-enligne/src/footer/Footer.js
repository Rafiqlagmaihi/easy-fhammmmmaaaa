import React from "react";
import './Footer.css';
import logo2 from './logo2.png'

function Footer() {
    return (
      <div>
        <footer>
            <center><img className="imgfooter" src={logo2} /></center>
            <p className="text1foot">|Classe virtuelle pour <br/> |cours de soutien</p>
            <p className="text2foot">Abonnez-vous à notre <br/> newsletter</p>
            <input className="inputfoot" type='email' placeholder="votre email" />
            <button className="buttonfoot">S'abonner</button>
            <p className="text3foot">Carrières | Politique de confidentialité | termes et conditions</p>
            <p className="text4foot">©2023 Easy fahma. Tous droits reservés.</p>
        </footer>
      </div>
    );
  }
  
  export default Footer;