import './App.css';
import { useState, useEffect } from 'react';
import StartPage from './components/StartPage';
import QuizPage from './components/QuizPage';

function App() {
  const [isQuiz, setIsQuiz] = useState(false)
  const [dataArray, setDataArray] = useState([])
  const [quiz, setQuiz] = useState("")

  useEffect(() => {
    console.log('effect ran')
    const randomNumber = Math.floor(Math.random() * 5)
    fetch('https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple')
      .then(res => res.json())
      .then(data => setDataArray(JSON.stringify(data.results[0].question)))
  }, [isQuiz])


  function startQuiz() {
    setIsQuiz(true)
  }

  function getQuestion() {
    // const randomNumber = Math.floor(Math.random() * 5)
    // const question = dataArray.map(data => data[randomNumber].question)
    // console.log(question)

    // const randomNumber = Math.floor(Math.random() * 5)
    // setQuiz(dataArray[0].question)
    // console.log(quiz)
  }
  

  return (
    <>
      <span className="top-shape"></span>
      {
        isQuiz ?
        <QuizPage quiz={dataArray} /> :
        <StartPage startQuiz={startQuiz}/>
      }
      <span className="bottom-shape"></span>
    </>
  );
}

export default App;
