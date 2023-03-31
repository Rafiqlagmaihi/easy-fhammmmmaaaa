import React from "react";
import './Noseleve.css';
import backgeleve from './backgeleve.png'


function Noseleve() {
    return (
      <div>
        <div>
            <center><hr/></center><p className="feedback">Feedback</p>
            <p className="title">Ce que nos élèves disent</p>
            <p className="text1">
                Easy Fhama a reçu plus de 100 000 évaluations positives de la part<br/>
                de nos utilisateurs à travers le Maroc.
            </p>
            <p className="text2">
                Certains élèves et enseignants ont été grandement<br/>
                aidés par la stratégie.
            </p>
            <p className="text3">
                Êtes-vous aussi? Merci de donner votre appréciation
            </p>
            <button className="button">Rédigez votre évaluation</button>
        </div>
        <div>
            <img className="backgeleve" src={backgeleve} />
        </div>
      </div>
    );
  }
  
  export default Noseleve;