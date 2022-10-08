import React, { Fragment, useState } from "react";
import './App.css';
import Question from './data/questions.json'

  const Quiz = Question

function App() {

  const [curQuestion, setCurQuestion] = useState(0)
  const [points, setPoints] = useState(0)
  const [isShown, setIsShown] = useState(false);

  if (points === -5) {
    alert("Skjerp deg!!!!")
  }
  if (curQuestion === 4) {
    console.log("u won")
  }
//Logikk XD
  const checkAnswer = (correct) => {
    if (correct) {
      console.log("Correct!")
      setCurQuestion(curQuestion +1);
      setPoints(points + 1);

      setIsShown(current => false);


    } else {
      console.log("Wrong!")
      setPoints(points - 1);
      setIsShown(current => true);
  }
}


  return (
    <>
    <span>Question {curQuestion + 1}</span>/{Quiz.length}     
    <br></br>     
    <span>Points : {points}</span>
        <div className="App">
          <h1>{Quiz[curQuestion].title}</h1>
 
          <div className='answer'>
						{Quiz[curQuestion].answers.map((answere) => (
							<button onClick={() => checkAnswer(answere.correct)}>{answere.answere}</button>
						))}
					</div>

          <div id="helper" className="helper" style={{display: isShown ? 'block' : 'none'}}>
            <p>Hjelpe tekst : </p>
            <p>{Quiz[curQuestion].helper.text}</p> 
            <p>😎😎😎😎😎😎😎😎😎</p>           
          </div>
        </div>
        </>
      );
    }
export default App;



