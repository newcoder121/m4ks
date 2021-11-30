import LinearerVerlauf1 from "./Linearer Verlauf 1.svg";
import KompetenzzentreneStandards2 from "./Kompetenzzentren eStandards 2.svg";
import Ressourcen from "./Ressourcen.png";
import React, {useState} from "react";

import "./App.css";
import react from "react";

const App = () => {

  const textmain = {
    text:  "Während ihres Lebenszyklus durchlaufen Produkte verschiedene Phasen. In jeder dieser Phasen werden Ressourcen verbraucht, wodurch sogenannte Umweltwirkungen, z. B. Treibhausgasemissionen, entstehen. Viele Produkte durchlaufen ihren Lebenszyklus in kurzer Zeit und werden danach entsorgt, wodurch große Umweltlasten und oftmals auch ein starker Wertverfall entstehen. Die lineare Wertschöpfungskette wird aus diesen Gründen oft mit „take, make, dispose“, also „nehmen, produzieren,entsorgen“, beschrieben.",
    heading: "Denken in Lebenszyklen"
  }

  const textmainKreis = {
    text:  "This is Kreis text",
    heading: "Denken in Kreiszyklen"
  }

  const [text, setText] = useState(textmainKreis);
  const [textFixed, setTextFixed] = useState();
  const [app, setApp] = useState(2);

  React.useEffect(()=>{
    if (app===1)
      {setText(textmain)}
    else
      {setText(textmainKreis)}
    setTextFixed(false)
  },[app])

  

  return (
    <>
      <div id="container">
        <div id="image" className={app===1?"linear":"kreis"}></div>
      </div>
      
      <img
        src={KompetenzzentreneStandards2}
        alt="KompetenzzentreneStandards2"
        className="KompetenzzentreneStandards2"
      />

      <div>
        <p className="headerLine1">
          {
            textFixed?.heading || text.heading
          }
        </p>
        <p className="para">
          {textFixed?.text || text.text}
        </p>
        
      </div>

      <fieldset id="group">
      <input className="radio-button-1" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" onClick={() => setApp(1)} checked={app===1}/>
      <label className="Linearwirtschaft" for="flexRadioDefault1">
      Linearwirtschaft
      </label>
      
      <input className="radio-button-2" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" onClick={() => setApp(2)} checked={app===2}/>
      <label className="Kreislaufwirtschaft" for="flexRadioDefault2">
      Kreislaufwirtschaft
      </label>
      </fieldset>

      <p className="KlickeLine1">Klicke auf die Grafik für</p>
      <p className="KlickeLine2">mehr Informationen</p>

      <p className="intro">INTRO--</p>
      <button className="ecodesign">ECO DESIGN</button>
      <button className="strategien">STRATEGIEN</button>
      <button className="partnerschaften">PARTNERSCHAFTEN</button>

      <button className="Ressourcen" onMouseEnter={() => {
        if (app===1){
          setText({
          text: "Resources text1",
          heading: "reosurce heading"
        })}
        else{
          setText({
            text: "Resources text2",
            heading: "reosurce heading"
          })
        }
        
      }} 
      onMouseLeave={() => {
        setText(text)
      }}
      onClick={() => {
        
        setTextFixed({
          text: "Resources text",
          heading: "reosurce heading"

        })
      }}><img src={Ressourcen} alt="Ressourcen" className="Ressourcen"/></button>
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
