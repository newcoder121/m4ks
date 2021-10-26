import LinearerVerlauf1 from "./Linearer Verlauf 1.svg";
import KompetenzzentreneStandards2 from "./Kompetenzzentren eStandards 2.svg";
import Ressourcen from "./Ressourcen.png";

import "./App.css";

function App() {
  return (
    <>
      <img src={LinearerVerlauf1} alt="LinearerVerlauf1" className="LinearerVerlauf1" />
      <img
        src={KompetenzzentreneStandards2}
        alt="KompetenzzentreneStandards2"
        className="KompetenzzentreneStandards2"
      />
      <p className="txt">Denken in Lebenszyklen</p>
      
      <p className="para">
        Während ihres Lebenszyklus durchlaufen Produkte verschiedene Phasen. In
        jeder dieser Phasen werden Ressourcen verbraucht, wodurch sogenannte
        Umweltwirkungen, z. B. Treibhausgasemissionen, entstehen. Viele Produkte
        durchlaufen ihren Lebenszyklus in kurzer Zeit und werden danach
        entsorgt, wodurch große Umweltlasten und oftmals auch ein starker
        Wertverfall entstehen. Die lineare Wertschöpfungskette wird aus diesen
        Gründen oft mit „take, make, dispose“, also „nehmen, produzieren,
        entsorgen“, beschrieben.
      </p>

      
      <input className="radio-button-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
      <label className="Linearwirtschaft" for="flexRadioDefault1">
      Linearwirtschaft
      </label>
      
      <input className="radio-button-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
      <label className="Kreislaufwirtschaft" for="flexRadioDefault2">
      Kreislaufwirtschaft
      </label>
   

      <p className="Klicke">Klicke auf die Grafik für mehr Informationen</p>
      <p className="intro">INTRO--</p>
      <button className="ecodesign">ECO DESIGN</button>
      <button className="strategien">STRATEGIEN</button>
      <button className="partnerschaften">PARTNERSCHAFTEN</button>

      <button className="Ressourcen"><img src={Ressourcen} alt="Ressourcen" className="Ressourcen"/></button>
      <button className="Design"><img src="./Design.png" alt="Design"/></button>
      <button className="Produktion"><img src="./Produktion.png" alt="Produktion"/></button>
      <button className="Vertrieb"><img src="./Vertrieb.png" alt="Vertrieb"/></button>
      <button className="Nutzung"><img src="./Nutzung.png" alt="Nutzung"/></button>
      <button className="Nutzungsende"><img src="./Nutzungsende.png" alt="Nutzungsende"/></button>
      <button className="Entsorgung"><img src="./Entsorgung.png" alt="Entsorgung"/></button>
    </>
  );
}

export default App;
