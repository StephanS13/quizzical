import React from 'react'

export default function QuizPage(props) {
  return (
    <>
      <div className="questions__container">
        <div className="question__wrapper">
          <h2>{props.quiz}</h2>
          <div className="answer__wrapper">
            <span>Adios</span>
            <span>Hola</span>
            <span>Au revoir</span>
            <span>Salir</span>
          </div>
        </div>
        <div className="question__wrapper">
          <h2>How would one say goodbye in Spanish?</h2>
          <div className="answer__wrapper">
            <span>Adios</span>
            <span>Hola</span>
            <span>Au revoir</span>
            <span>Salir</span>
          </div>
        </div>
        <div className="question__wrapper">
          <h2>How would one say goodbye in Spanish?</h2>
          <div className="answer__wrapper">
            <span>Adios</span>
            <span>Hola</span>
            <span>Au revoir</span>
            <span>Salir</span>
          </div>
        </div>
        <div className="question__wrapper">
          <h2>How would one say goodbye in Spanish?</h2>
          <div className="answer__wrapper">
            <span>Adios</span>
            <span>Hola</span>
            <span>Au revoir</span>
            <span>Salir</span>
          </div>
        </div>
        <div className="question__wrapper">
          <h2>How would one say goodbye in Spanish?</h2>
          <div className="answer__wrapper">
            <span>Adios</span>
            <span>Hola</span>
            <span>Au revoir</span>
            <span>Salir</span>
          </div>
        </div>
        <button>Check answers</button>
      </div>
    </>
  )
}
