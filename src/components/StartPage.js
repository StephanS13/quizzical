import React from 'react'

export default function StartPage(props) {
  return (
    <>
      <div className='main-container'>
        <h1>Quizzical</h1>
        <p>Let's challenge your general knowledge!</p>
        <button onClick={props.startQuiz} >Start quiz</button>
      </div>
    </>
  )
}
