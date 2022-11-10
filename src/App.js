import './App.css';
import { useState, useEffect } from 'react';
import StartPage from './components/StartPage';
import QuizPage from './components/QuizPage';
import { nanoid } from 'nanoid'

function App() {
  const [isQuiz, setIsQuiz] = useState(false)
  const [dataResults, setDataResults] = useState([])
  const [quizzes, setQuizzes] = useState([])

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple')
      .then(res => res.json())
      .then(data => setDataResults(data.results))
  }, [])
   

  function startQuiz() {
    const questionArray = []
    const correctAnswerArray = []
    const incorrectAnswerArray = []
    const idArray = []

    for(let i = 0; i < 5; i++) {
      questionArray.push(dataResults[i].question)
      correctAnswerArray.push(dataResults[i].correct_answer)
      incorrectAnswerArray.push(dataResults[i].incorrect_answers)
      idArray.push(nanoid())
    }

    setQuizzes({
      question: questionArray,
      correct_answer: correctAnswerArray,
      incorrect_answers: incorrectAnswerArray,
      id: idArray,
      isClicked: false
    })
    setIsQuiz(true)
  }

  /* CAN'T MAP OVER QUIZZES bc IT'S AN OBJECT... */

  function handleIsClicked(id) {
    setQuizzes(oldQuiz => oldQuiz.map(quiz => (
      quiz.id === id ?
      {...quiz, isClicked: !quiz.isClicked} :
      quiz
    )))
  }

  // const quizElements = quizzes.map(quiz => (
  //   <QuizPage
  //     key={quiz.id}
  //     question={quiz.question} 
  //     correctAnswer={quiz.correct_answer}
  //     incorrectAnswers={quiz.incorrect_answers}
  //     isClicked={() => handleIsClicked(quiz.id)}
  //   />
  // ))

  console.log(quizzes)

  return (
    <>
      <span className="top-shape"></span>
      {
        isQuiz ?
        /* CAN'T MAP OVER QUIZZES bc IT'S AN OBJECT... */
        <div className='questions__container'>
          <QuizPage
            key={quizzes.id[0]}
            question={quizzes.question[0]} 
            correctAnswer={quizzes.correct_answer[0]}
            incorrectAnswers={quizzes.incorrect_answers[0]}
            isClicked={() => handleIsClicked(quizzes.id[0])}
          />
          <QuizPage
            key={quizzes.id[1]}
            question={quizzes.question[1]} 
            correctAnswer={quizzes.correct_answer[1]}
            incorrectAnswers={quizzes.incorrect_answers[1]}
            isClicked={() => handleIsClicked(quizzes.id[1])}
          />
          <QuizPage
            key={quizzes.id[2]}
            question={quizzes.question[2]} 
            correctAnswer={quizzes.correct_answer[2]}
            incorrectAnswers={quizzes.incorrect_answers[2]}
            isClicked={() => handleIsClicked(quizzes.id[2])}
          />
          <QuizPage
            key={quizzes.id[3]}
            question={quizzes.question[3]} 
            correctAnswer={quizzes.correct_answer[3]}
            incorrectAnswers={quizzes.incorrect_answers[3]}
            isClicked={() => handleIsClicked(quizzes.id[3])}
          />
          <QuizPage
            key={quizzes.id[4]}
            question={quizzes.question[4]} 
            correctAnswer={quizzes.correct_answer[4]}
            incorrectAnswers={quizzes.incorrect_answers[4]}
            isClicked={() => handleIsClicked(quizzes.id[4])}
          />
          <button className='check-answers'>Check answers</button>
        </div> :
        <StartPage startQuiz={startQuiz} />
      }
      <span className="bottom-shape"></span>
    </>
  );
}

export default App;
