import React from 'react';
import './Cours.css'

function Cours() {
    return (
        <div>
            <p className='textcours'>Les cours disponnible</p>
            <div className='cours'>
                <div className='cour1'>
                    <p className='textcour'>1ère année bac</p>
                    <p className='aboutcour'>
                    La première BAC est une
                    année importante car elle te
                    permet d'acquérir les bases
                    pour bien réussir la 2ème
                    année BAC. En plus, tu sais
                    que l'examen régional
                    compte pour 25% de la note
                    finale du BAC !.
                    </p>
                </div>
                <div className='cour2'>
                    <p className='textcour1'>1ère année bac <br/>(BIOF)</p>
                    <p className='aboutcour1'>
                    La première BAC est une
                    année importante car elle te
                    permet d'acquérir les bases
                    pour bien réussir la 2ème
                    année BAC. En plus, tu sais
                    que l'examen régional
                    compte pour 25% de la note
                    finale du BAC !.
                    </p>
                </div>
                <div className='cour3'>
                    <p className='textcour1'>2ème année bac</p>
                    <p className='aboutcour2'>
                    Nous vous donne tout ce qu’il
                    faut pour réussir tes matières
                    de 2ème année bac.
                    Peu importe où tu es team
                    Easy fhama te permet de
                    gagner du temps et de l’argent
                    avec une solution de révision
                    complète et accessible 24/24.
                    </p>
                </div>
                <div className='cour4'>
                    <p className='textcour1'>2ème année bac <br/>(BIOF)</p>
                    <p className='aboutcour1'>
                    Nous offrons à nos stagiaires
                    un espace relaxant pour se
                    concentrer et apprendre, en
                    veillant à ce qu'ils se sentent
                    à l'aise pendant leur période
                    de formation.
                    </p>
                </div>
            </div>
        </div>
      
      
    );
  }
  
  export default Cours;