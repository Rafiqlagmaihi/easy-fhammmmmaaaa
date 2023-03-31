import React from 'react';
import './Header.css';
import logo from './logo.png';
import imghread from './imghread.png'

function Header() {
    return (
        <div> 
            <header className='head'>          
                <nav className='nav'>
                    <a href='header.js'> <img src={logo} className='imghead' /></a>
                    <ul className="liste">
                        <li ><a className="href" href="#Cours">Cours</a></li>
                        <li ><a className="href" href="#Packs">Packs</a></li>
                        <li ><a className="href" href="#Qui somme-nous"> Qui somme-nous</a></li>
                        <li ><a className="href" href="#Mon compte"><button className='moncompte'>Mon compte</button></a></li>
                    </ul>
                </nav>
                <div>
                    <p className="texthead">Apprendre en ligne</p> <p className='texthead2'>avec des</p>
                    <p className="texthead3">cours de qualité</p>
                    <p className="textmotivation">
                        Notre site web offre une vaste sélection de cours en ligne pour<br/>
                        vous aider à acquérir de nouvelles compétences et à améliorer<br/>
                        votre carrière. Nos cours accrédités sont conçus pour vous offrir<br/>
                        une formation de qualité professionnelle avec des instructeurs<br/>
                        experts qui vous guideront tout au long du processus<br/>
                        d'apprentissage
                    </p>
                    <button className="rejoignez"> Rejoignez gratuitement </button>
                    <img className="imgheader" src={imghread} />
                </div>
                
            </header> 
        </div>
    );
  }
  
  export default Header;