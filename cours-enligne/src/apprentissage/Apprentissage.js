import React from "react";
import './Apprentissage.css';
import  icon1 from './icon1.png';
import  icon2 from './icon2.png';
import  icon3 from './icon3.png';

function Apprentissage() {
    return (
        <div>
            <p className="title1"> Pourquoi l’apprentissage</p><p className="title2">en ligne</p>
            <p className="textapprentissage">
            L'apprentissage en ligne offre une flexibilité sans pareil et vous permet d'accéder à une variété<br/>
            de cours et de programmes provenant du monde entier, le tout à un coût souvent plus<br/>
            abordable que les programmes d'études traditionnels.
            </p>
            <div className="apprentissage">
                <div className="appren">
                    <center><img className="iconsapp" src={icon1} /></center>
                    <p className="textappren">Gérer votre propre <br/> emploi du temps</p>
                    <p className="textappren1">
                    ravailler à votre propre rythme et
                    d'accéder à une variété de cours 
                    et de programmes
                    </p>
                </div>
                <div className="appren">
                <center><img className="iconsapp" src={icon2} /></center>
                    <p className="textappren">Expérience d’apprentissage complète accessible 24/24</p>
                    <p className="textappren1">
                    Vidéos, fiches de cours, exercices, quiz,
                    annales… Le tout accessible 24/24, 7j/7,
                    pour apprendre en toute liberté​ sur PC
                    ou sur notre application mobile.
                    </p>
                </div>
                <div className="appren">
                <center><img className="iconsapp" src={icon3} /></center>
                    <p className="textappren">Accéder à des enseignants <br/> et à des experts</p>
                    <p className="textappren1">
                    Plus besoin d'apprendre par cœur... Tu
                    vas comprendre tes cours en toute
                    facilité grâce à la pédagogie ludique
                    et efficace de nos professeurs.
                    </p>
                </div>
            </div>
        </div>
    );
  }
  
  export default Apprentissage;