import './App.css';
import freeCodeCampLogo from "./img/freeCodeCampLogo.png";
import Btn from "./components/btn";
import Counter from "./components/counter";
import { useState } from "react"; 

function App() {

  const [clicksNum, setClicksNum] = useState(0);

  const countUp = () => {
    setClicksNum(clicksNum + 1);
  }

  const resetCount = () => {
    setClicksNum(0);
  }

  return (
    <div className="App">
      <div className="imgContainer">
        <img 
        className='freeCodeCampLogo'
        src={freeCodeCampLogo}
        alt='freeCodeCamp Logo'/>
      </div>
      <div className='mainContainer'>
        <div className='counter'>
          <Counter 
          clicksNum={clicksNum}/>
        </div>
        <div className='btnContainer'>
          <Btn 
          text={"Click"}
          ifClickBtn={true}
          clickFunction={countUp}
          />  
          <Btn 
          text={"Reset"}
          ifClickBtn={false}
          clickFunction={resetCount}
          />      
        </div>
      </div>
    </div>
  );
}

export default App;
