import React from 'react'

export default function QuizPage(props) {
   const style = {
    backgroundColor: props.isClicked === true ? "#D6DBF5" : "white"
   }

  return (
    <>
      <div className="questions__container">
        <div className="question__wrapper">
          <h3>{props.question}</h3>
          <div className="answer__wrapper">
            <span
             onClick={props.isClicked}
             style={style}
             >
              {props.correctAnswer}
            </span>
            {props.incorrectAnswers.map(ans => (
              <span onClick={props.isClicked} style={style}>{ans}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
