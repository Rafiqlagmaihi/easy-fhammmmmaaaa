import React from "react";
import './Packs.css';
import { BsCheckCircle } from "react-icons/bs";

function Packs() {
    return (
        <div>
            <p className="textpacks">Nos packs</p>
            <div className="packs">

                <div className="pack">
                    <p className="basic">Basic</p>
                    <p className="free">Free</p><p className="forever">/forever</p>
                    <ul>
                        <li><BsCheckCircle className="listicon" /><span>Accès à des cours de soutien</span></li><br/>
                        <li><BsCheckCircle className="listicon" /><span>Telechargement des resume</span></li><br/>
                        <li><BsCheckCircle className="listicon" /><span>Aucun engagement financier requis</span></li><br/>
                    </ul>
                </div>
                <div className="pack2">
                    <p className="Individuel">👤 Individuel</p>
                    <p className="best">best</p>
                    <p className="free">180dh</p><p className="mois">/mois</p>
                </div>
                <div className="pack3">
                    <p className="Individuel">👥 Corporate</p>
                    <p className="free">100dh</p><p className="editor">/editor</p>
                </div>

            </div>
        </div>
      
      
    );
  }
  
  export default Packs;