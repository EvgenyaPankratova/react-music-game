import Title from './components/Title/Title'
import Blue from './components/Blue/Blue'
import Green from './components/Green/Green';
import Red from './components/Red/Red';
import Yellow from './components/Yellow/Yellow';
import StartButton from './components/StartButton/StartButton';
import Options from './components/Options/Options';
import { useState } from 'react';

function App() {

  const roundsDefault = {
    1: ['green', 'blue', 'red'],
    2: ['blue', 'green', 'red'],
    3: ['green', 'red', 'green', 'blue'],
    4: ['red,', 'blue', 'green', 'blue'],
    5: ['yellow,', 'blue', 'yellow', 'blue', 'red'],
  }
  
  const [rounds, setRounds] = useState(roundsDefault);
  const [colors, setColors] = useState(['green', 'blue', 'red']);
  const [activeColor, setActiveColor] = useState('');
  const [answer, setAnswer] = useState([]) //запоминаем, что ответил игрок

  const startGame = (currentRound) => {
      setColors(rounds[currentRound]); //устаавливаем, какие цвета должны загораться в текущем раунде  
      PromiseTimeOut();

      function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
        }
        
        async function PromiseTimeOut() {
        console.log("Старт");
        for (let elem of colors) {
        setActiveColor(elem);
        await delay(1000); // ждем одну секунду перед выполнением следующей итерации цикла
        }
        setActiveColor(''); //обнуляем цвет, иначе остаётся закрашенным последний цвет из массива
        console.log("Цикл завершен!");
        } 
  }
  
  console.log(activeColor)

  console.log(answer)

  return (
    <div className="App">
      <Title/>
      <div className='container'>
        <div className='picture'>
          <Blue colors={colors} activeColor={activeColor} setAnswer={setAnswer}/>
          <Green colors={colors} activeColor={activeColor} setAnswer={setAnswer}/>
          <Red colors={colors} activeColor={activeColor} setAnswer={setAnswer}/>
          <Yellow colors={colors} activeColor={activeColor} setAnswer={setAnswer}/>


        </div>
        <div className='text_info'>
          <StartButton rounds={rounds} setRounds={setRounds} startGame={startGame}/>
          
          { 
          
            
          ((answer.length >= 3) && (answer.length === colors.length && answer.every((v, i) => v === colors[i]))) ? <div>верно</div> : 
          (answer.length < 3) ? <div>...ожидание ответа от игрока</div> : <div>неверно</div>
            
          }

          <Options rounds={rounds} setRounds={setRounds}/>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
