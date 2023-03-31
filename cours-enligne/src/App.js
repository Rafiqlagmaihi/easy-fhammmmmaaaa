import './App.css';
import Header from './header/Header.js';
import Apprentissage from './apprentissage/Apprentissage.js';
import Cours from './cours/Cours';
import Packs from './packs/Packs';
import Noseleve from './noseleve/Noseleve';
import Footer from './footer/Footer';

function App() {
  return (
    <>
    <Header/>
    <Apprentissage className='apprentissage'/>
    <Cours/>
    <Packs/>
    <Noseleve/>
    <Footer/>
  </>
  );
}

export default App;
