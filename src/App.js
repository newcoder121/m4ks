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
          text: "Zur Herstellung von Produkten werden verschiedene Materialien und Rohstoffe verwendet. Dabei wird zwischen erneuerbaren und nicht erneuerbaren sowie primären und sekundären Rohstoffen unterschieden. Rohstoffe wie Metall und Glas können mit geringen Qualitätsverlusten recycelt und somit als Sekundärrohstoff verwendet werden.",
          heading: "Rohstoffe"
        })}
        else{
          setText({
            text: "Zur Herstellung von Produkten werden verschiedene Materialien und Rohstoffe verwendet. Dabei wird zwischen erneuerbaren und nicht erneuerbaren sowie primären und sekundären Rohstoffen unterschieden. Rohstoffe wie Metall und Glas können mit geringen Qualitätsverlusten recycelt und somit als Sekundärrohstoff verwendet werden.",
            heading: "Rohstoffe"
          })
        }
        
      }} 
      onMouseLeave={() => {
        setText(textmain)
      }}
      onClick={() => {
        
        setTextFixed({
          text: "Zur Herstellung von Produkten werden verschiedene Materialien und Rohstoffe verwendet. Dabei wird zwischen erneuerbaren und nicht erneuerbaren sowie primären und sekundären Rohstoffen unterschieden. Rohstoffe wie Metall und Glas können mit geringen Qualitätsverlusten recycelt und somit als Sekundärrohstoff verwendet werden.",
          heading: "Rohstoffe"

        })
      }}></button>

      <button className="Design" onMouseEnter={() => {
        if (app===1){
          setText({
          text: "Das Produktdesign hat einen maßgeblichen Einfluß auf alle vorgelagerten und nachgelagerten Prozesse. In dieser Phase entscheidet sich beispielsweise, ob ein Produkt für eine lange Nutzung oder als Einwegprodukt konzipiert wird. Materialwahl, Verpackung, Produktion, zeitgemäßes oder zeitloses Design und viele weitere Parameter beeinflussen schon in der Designphase den weiteren Lebensweg des Produkts. Ein Produktdesigner hat viele Anforderungen zu erfüllen und viele Parameter zu beachten. Ein Ansatz Produkte und Prozesse nachhaltig zu gestalten ist EcoDesign. [Mehr Dazu]",
          heading: "Design"
        })}
        else{
          setText({
            text: "Eco Design ist ein Gestaltungsansatz für Produkte, mit dem Ziel Umweltbelastungen über den gesamten Produktlebenszyklus zu mindern. Durch verbesserte Produktgestaltung können Produzenten in der Produktplanungs- und -designphase einen positiven Einfluss auf den gesamten Lebensweg des Produktes nehmen. Eco Design ist ein systematischer und umfassender Gestaltungsansatz, der verschiedene Prinzipien und Methodiken bereitstellt, an denen sich Produzenten orientieren können.",
            heading: " Eco Design"
          })
        }
        
      }} 
      onMouseLeave={() => {
        setText(textmain)
      }}
      onClick={() => {
        if (app===1){
          setTextFixed({
            text: "Das Produktdesign hat einen maßgeblichen Einfluß auf alle vorgelagerten und nachgelagerten Prozesse. In dieser Phase entscheidet sich beispielsweise, ob ein Produkt für eine lange Nutzung oder als Einwegprodukt konzipiert wird. Materialwahl, Verpackung, Produktion, zeitgemäßes oder zeitloses Design und viele weitere Parameter beeinflussen schon in der Designphase den weiteren Lebensweg des Produkts. Ein Produktdesigner hat viele Anforderungen zu erfüllen und viele Parameter zu beachten. Ein Ansatz Produkte und Prozesse nachhaltig zu gestalten ist EcoDesign. [Mehr Dazu]",
            heading: "Design"
  
          })
        }
        else{
        setTextFixed({
          text: "Eco Design ist ein Gestaltungsansatz für Produkte, mit dem Ziel Umweltbelastungen über den gesamten Produktlebenszyklus zu mindern. Durch verbesserte Produktgestaltung können Produzenten in der Produktplanungs- und -designphase einen positiven Einfluss auf den gesamten Lebensweg des Produktes nehmen. Eco Design ist ein systematischer und umfassender Gestaltungsansatz, der verschiedene Prinzipien und Methodiken bereitstellt, an denen sich Produzenten orientieren können.",
          heading: "Eco Design"

        })
      }
      }}></button>

      <button className="Produktion" onMouseEnter={() => {
        if (app===1){
          setText({
          text: "Je nach Funktion und Form des Produktes, eignen sich verschiedene Herstellungsverfahren. Bei der Wahl des geeigneten Herstellungsverfahren, sollten die Ressourcenverbräuche verglichen werden. Additive Herstellungsmethoden, wie der 3D Druck sind durch die geringen Nebenprodukte aus Umweltsicht attraktiv.",
          heading: "Produktion"
        })}
        else{
          setText({
            text: "Je nach Funktion und Form des Produktes, eignen sich verschiedene Herstellungsverfahren. Bei der Wahl des geeigneten Herstellungsverfahren, sollten die Ressourcenverbräuche verglichen werden. Additive Herstellungsmethoden, wie der 3D Druck sind durch die geringen Nebenprodukte aus Umweltsicht attraktiv.",
            heading: "Produktion"
          })
        }
        
      }} 
      onMouseLeave={() => {
        setText(textmain)
      }}
      onClick={() => {
        if (app===1){
          setTextFixed({
            text: "Je nach Funktion und Form des Produktes, eignen sich verschiedene Herstellungsverfahren. Bei der Wahl des geeigneten Herstellungsverfahren, sollten die Ressourcenverbräuche verglichen werden. Additive Herstellungsmethoden, wie der 3D Druck sind durch die geringen Nebenprodukte aus Umweltsicht attraktiv.",
            heading: "Produktion"
  
          })
        }
        else{
        setTextFixed({
          text: "Je nach Funktion und Form des Produktes, eignen sich verschiedene Herstellungsverfahren. Bei der Wahl des geeigneten Herstellungsverfahren, sollten die Ressourcenverbräuche verglichen werden. Additive Herstellungsmethoden, wie der 3D Druck sind durch die geringen Nebenprodukte aus Umweltsicht attraktiv.",
          heading: "Produktion"
        })
      }
      }}></button>

      <button className="Vertrieb" onMouseEnter={() => {
        if (app===1){
          setText({
          text: "In linearen Wirtschaftssystemen konzertriert sich der Vertrieb vor allem darauf Waren und Dienstleistungen zum Kunden zu bringen. Dazu wird, je nach Produkt, ein entsprechendes Logistiknetz genutzt oder aufgebaut. In der Kreislaufwirtschaft erweitern sich die Aufgaben des Vertriebs. Der Kunde wird stärker eingebunden, Rücknahmesysteme werden etabliert und neue Services und Vertriebskanäle entstehen, die dem Kunden eine umfassendere User Experience bieten. Moderne, innovative Vertriebswege bieten großes Potential Kunden zu binden und die steigende Nachfrage nach nachhaltigen Produkten und Dienstleistungen zu befriedigen.",
          heading: "Vertrieb"
        })}
        else{
          setText({
            text: "In linearen Wirtschaftssystemen konzertriert sich der Vertrieb vor allem darauf Waren und Dienstleistungen zum Kunden zu bringen. Dazu wird, je nach Produkt, ein entsprechendes Logistiknetz genutzt oder aufgebaut. In der Kreislaufwirtschaft erweitern sich die Aufgaben des Vertriebs. Der Kunde wird stärker eingebunden, Rücknahmesysteme werden etabliert und neue Services und Vertriebskanäle entstehen, die dem Kunden eine umfassendere User Experience bieten. Moderne, innovative Vertriebswege bieten großes Potential Kunden zu binden und die steigende Nachfrage nach nachhaltigen Produkten und Dienstleistungen zu befriedigen.",
            heading: "Vertrieb"
          })
        }
        
      }} 
      onMouseLeave={() => {
        setText(textmain)
      }}
      onClick={() => {
        if (app===1){
          setTextFixed({
            text: "In linearen Wirtschaftssystemen konzertriert sich der Vertrieb vor allem darauf Waren und Dienstleistungen zum Kunden zu bringen. Dazu wird, je nach Produkt, ein entsprechendes Logistiknetz genutzt oder aufgebaut. In der Kreislaufwirtschaft erweitern sich die Aufgaben des Vertriebs. Der Kunde wird stärker eingebunden, Rücknahmesysteme werden etabliert und neue Services und Vertriebskanäle entstehen, die dem Kunden eine umfassendere User Experience bieten. Moderne, innovative Vertriebswege bieten großes Potential Kunden zu binden und die steigende Nachfrage nach nachhaltigen Produkten und Dienstleistungen zu befriedigen.",
            heading: "Vertrieb"
  
          })
        }
        else{
        setTextFixed({
          text: "In linearen Wirtschaftssystemen konzertriert sich der Vertrieb vor allem darauf Waren und Dienstleistungen zum Kunden zu bringen. Dazu wird, je nach Produkt, ein entsprechendes Logistiknetz genutzt oder aufgebaut. In der Kreislaufwirtschaft erweitern sich die Aufgaben des Vertriebs. Der Kunde wird stärker eingebunden, Rücknahmesysteme werden etabliert und neue Services und Vertriebskanäle entstehen, die dem Kunden eine umfassendere User Experience bieten. Moderne, innovative Vertriebswege bieten großes Potential Kunden zu binden und die steigende Nachfrage nach nachhaltigen Produkten und Dienstleistungen zu befriedigen.",
          heading: "Vertrieb"
        })
      }
      }}></button>

      <button className="Nutzung" onMouseEnter={() => {
        if (app===1){
          setText({
          text: "In vielen Anwendungen wird der Umwelteinfluss der Nutzungsphase unterschätzt. Für die meisten Produkte gilt jedoch, je länger die Produkte genutzt werden, umso geringer der Materialaufwand und damit der Ressourcenverbrauch. Im Hinblick auf die Kreislaufwirtschaft bedeutet das, dass mit einer Verlängerung der Nutzungsphase die Neuproduktion von Gütern verringert wird aber sich der Servicebedarf erhöht. Somit werden Dienstleistungspotenziale geschaffen, die Raum für innovative Serviceleistungen bieten. Kunden werden gebunden und Ressourcenintensive Industrien minimiert.",
          heading: "Nutzung"
        })}
        else{
          setText({
            text: "In vielen Anwendungen wird der Umwelteinfluss der Nutzungsphase unterschätzt. Für die meisten Produkte gilt jedoch, je länger die Produkte genutzt werden, umso geringer der Materialaufwand und damit der Ressourcenverbrauch. Im Hinblick auf die Kreislaufwirtschaft bedeutet das, dass mit einer Verlängerung der Nutzungsphase die Neuproduktion von Gütern verringert wird aber sich der Servicebedarf erhöht. Somit werden Dienstleistungspotenziale geschaffen, die Raum für innovative Serviceleistungen bieten. Kunden werden gebunden und Ressourcenintensive Industrien minimiert.",
            heading: "Nutzung"
          })
        }
        
      }} 
      onMouseLeave={() => {
        setText(textmain)
      }}
      onClick={() => {
        if (app===1){
          setTextFixed({
            text: "In vielen Anwendungen wird der Umwelteinfluss der Nutzungsphase unterschätzt. Für die meisten Produkte gilt jedoch, je länger die Produkte genutzt werden, umso geringer der Materialaufwand und damit der Ressourcenverbrauch. Im Hinblick auf die Kreislaufwirtschaft bedeutet das, dass mit einer Verlängerung der Nutzungsphase die Neuproduktion von Gütern verringert wird aber sich der Servicebedarf erhöht. Somit werden Dienstleistungspotenziale geschaffen, die Raum für innovative Serviceleistungen bieten. Kunden werden gebunden und Ressourcenintensive Industrien minimiert.",
            heading: "Nutzung"
  
          })
        }
        else{
        setTextFixed({
          text: "In vielen Anwendungen wird der Umwelteinfluss der Nutzungsphase unterschätzt. Für die meisten Produkte gilt jedoch, je länger die Produkte genutzt werden, umso geringer der Materialaufwand und damit der Ressourcenverbrauch. Im Hinblick auf die Kreislaufwirtschaft bedeutet das, dass mit einer Verlängerung der Nutzungsphase die Neuproduktion von Gütern verringert wird aber sich der Servicebedarf erhöht. Somit werden Dienstleistungspotenziale geschaffen, die Raum für innovative Serviceleistungen bieten. Kunden werden gebunden und Ressourcenintensive Industrien minimiert.",
          heading: "Nutzung"
        })
      }
      }}></button>

      <button className="Nutzungsende" onMouseEnter={() => {
        if (app===1){
          setText({
          text: "Das Nutzungsende eines Produktes ist dann erreicht, wenn es von niemanden weitergenutzt wird. Das heißt, wenn es weder vom Erstnutzer noch von einem anderen Nutzer weiterverwendet wird. Dies kann beispielsweise bei einem nicht reparierbaren Defekt eines Produktes der Fall sein, bei dem das Produkt nicht mehr den gewünschten Zweck erfüllt. Ein anderer Grund für das Nutzungsende kann die Ablösung des Produktes durch ein moderneres sein, beispielsweise wenn es nicht mehr dem aktuellen Trend entspricht. Durch die Gestaltung von ästhetisch zeitlosen oder modularen Produkten kann dieser Grund für das Nutzungsende hinausgezögert werden.",
          heading: "Nutzungsende"
        })}
        else{
          setText({
            text: "Das Nutzungsende eines Produktes ist dann erreicht, wenn es von niemanden weitergenutzt wird. Das heißt, wenn es weder vom Erstnutzer noch von einem anderen Nutzer weiterverwendet wird. Dies kann beispielsweise bei einem nicht reparierbaren Defekt eines Produktes der Fall sein, bei dem das Produkt nicht mehr den gewünschten Zweck erfüllt. Ein anderer Grund für das Nutzungsende kann die Ablösung des Produktes durch ein moderneres sein, beispielsweise wenn es nicht mehr dem aktuellen Trend entspricht. Durch die Gestaltung von ästhetisch zeitlosen oder modularen Produkten kann dieser Grund für das Nutzungsende hinausgezögert werden.",
            heading: "Nutzungsende"
          })
        }
        
      }} 
      onMouseLeave={() => {
        setText(textmain)
      }}
      onClick={() => {
        if (app===1){
          setTextFixed({
            text: "Das Nutzungsende eines Produktes ist dann erreicht, wenn es von niemanden weitergenutzt wird. Das heißt, wenn es weder vom Erstnutzer noch von einem anderen Nutzer weiterverwendet wird. Dies kann beispielsweise bei einem nicht reparierbaren Defekt eines Produktes der Fall sein, bei dem das Produkt nicht mehr den gewünschten Zweck erfüllt. Ein anderer Grund für das Nutzungsende kann die Ablösung des Produktes durch ein moderneres sein, beispielsweise wenn es nicht mehr dem aktuellen Trend entspricht. Durch die Gestaltung von ästhetisch zeitlosen oder modularen Produkten kann dieser Grund für das Nutzungsende hinausgezögert werden.",
            heading: "Nutzungsende"
  
          })
        }
        else{
        setTextFixed({
          text: "Das Nutzungsende eines Produktes ist dann erreicht, wenn es von niemanden weitergenutzt wird. Das heißt, wenn es weder vom Erstnutzer noch von einem anderen Nutzer weiterverwendet wird. Dies kann beispielsweise bei einem nicht reparierbaren Defekt eines Produktes der Fall sein, bei dem das Produkt nicht mehr den gewünschten Zweck erfüllt. Ein anderer Grund für das Nutzungsende kann die Ablösung des Produktes durch ein moderneres sein, beispielsweise wenn es nicht mehr dem aktuellen Trend entspricht. Durch die Gestaltung von ästhetisch zeitlosen oder modularen Produkten kann dieser Grund für das Nutzungsende hinausgezögert werden.",
          heading: "Nutzungsende"
        })
      }
      }}></button>

      <button className="Entsorgung" onMouseEnter={() => {
        if (app===1){
          setText({
          text: "Nach dem Nutzungsende eines Produktes, wird dieses, sofern nicht einzelne Komponenten oder Materialien wiederverwendet oder recycelt werden, entsorgt. In Bezug auf die Abfallwirtschaft ist das Ziel der Kreislaufwirtschaft die stoffliche Verwertung nicht vermeidbarer Abfälle. Weiterhin sollen Innovation dazu beitragen die Abfallwirtschaft zu einer Quelle für die Beschaffung von Rohstoffen für die Produktion von Gütern weiterzuentwickeln. Nicht verwertbare Abfälle müssen bevor sie in Deponien abgelagert oder thermisch verwertet werden, aufwendig mechanisch, biologisch oder thermisch behandelt werden, wodurch weitere Umweltwirkungen und Kosten entstehen.",
          heading: "Entsorgung"
        })}
        else{
          setText({
            text: "Nach dem Nutzungsende eines Produktes, wird dieses, sofern nicht einzelne Komponenten oder Materialien wiederverwendet oder recycelt werden, entsorgt. In Bezug auf die Abfallwirtschaft ist das Ziel der Kreislaufwirtschaft die stoffliche Verwertung nicht vermeidbarer Abfälle. Weiterhin sollen Innovation dazu beitragen die Abfallwirtschaft zu einer Quelle für die Beschaffung von Rohstoffen für die Produktion von Gütern weiterzuentwickeln. Nicht verwertbare Abfälle müssen bevor sie in Deponien abgelagert oder thermisch verwertet werden, aufwendig mechanisch, biologisch oder thermisch behandelt werden, wodurch weitere Umweltwirkungen und Kosten entstehen.",
            heading: "Entsorgung"
          })
        }
        
      }} 
      onMouseLeave={() => {
        setText(textmain)
      }}
      onClick={() => {
        if (app===1){
          setTextFixed({
            text: "Nach dem Nutzungsende eines Produktes, wird dieses, sofern nicht einzelne Komponenten oder Materialien wiederverwendet oder recycelt werden, entsorgt. In Bezug auf die Abfallwirtschaft ist das Ziel der Kreislaufwirtschaft die stoffliche Verwertung nicht vermeidbarer Abfälle. Weiterhin sollen Innovation dazu beitragen die Abfallwirtschaft zu einer Quelle für die Beschaffung von Rohstoffen für die Produktion von Gütern weiterzuentwickeln. Nicht verwertbare Abfälle müssen bevor sie in Deponien abgelagert oder thermisch verwertet werden, aufwendig mechanisch, biologisch oder thermisch behandelt werden, wodurch weitere Umweltwirkungen und Kosten entstehen.",
            heading: "Entsorgung"
  
          })
        }
        else{
        setTextFixed({
          text: "Nach dem Nutzungsende eines Produktes, wird dieses, sofern nicht einzelne Komponenten oder Materialien wiederverwendet oder recycelt werden, entsorgt. In Bezug auf die Abfallwirtschaft ist das Ziel der Kreislaufwirtschaft die stoffliche Verwertung nicht vermeidbarer Abfälle. Weiterhin sollen Innovation dazu beitragen die Abfallwirtschaft zu einer Quelle für die Beschaffung von Rohstoffen für die Produktion von Gütern weiterzuentwickeln. Nicht verwertbare Abfälle müssen bevor sie in Deponien abgelagert oder thermisch verwertet werden, aufwendig mechanisch, biologisch oder thermisch behandelt werden, wodurch weitere Umweltwirkungen und Kosten entstehen.",
          heading: "Entsorgung"
        })
      }
      }}></button>
    </>
  );
}

export default App;
