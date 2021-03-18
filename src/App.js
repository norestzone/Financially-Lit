// import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { useState } from 'react'

import Navbar from './components/partials/Navbar'
import Header from './components/partials/Header'
import Learn from './components/pages/Learn'


export default function Trivia() {
  const questions = [
    {
      questionText: 'What factor(s) impact your credit score?',
      answerChoices: [
        { answerText: 'Payment History & Account Balances', isCorrect: false },
        { answerText: 'Length of Credit History', isCorrect: false },
        { answerText: 'Credit Inquiries & Types of Credit', isCorrect: false },
        { answerText: 'All of the Above', isCorrect: true },
      ],
    },
    {
      questionText: 'Name the only 2 types of tax-free retirement accounts available?',
      answerChoices: [
        { answerText: '401k and HSA', isCorrect: false },
        { answerText: 'Roth IRA and IUL/LIRP', isCorrect: true },
        { answerText: '403b and Roth IRA', isCorrect: false },
        { answerText: 'HSA and IUL/LIRP', isCorrect: false },
      ],
    },
    {
      questionText: 'How many tax brackets are there?',
      answerChoices: [
        { answerText: '7', isCorrect: true },
        { answerText: '8', isCorrect: false },
        { answerText: '5', isCorrect: false },
        { answerText: '3', isCorrect: false },
      ],
    },
    {
      questionText: 'What should be included in a personal budget?',
      answerChoices: [
        { answerText: 'Projected Income', isCorrect: false },
        { answerText: 'Fixed, Variable, and Miscellaneous Expenses', isCorrect: false },
        { answerText: 'Totaling Discretionary Income', isCorrect: false },
        { answerText: 'All of the Above', isCorrect: true },
      ],
    },
    {
      questionText: 'Which is true?',
      answerChoices: [
        { answerText: `Almost 70% of Americans don't have $1,000 saved`, isCorrect: false },
        { answerText: `25% have no emergency savings at all`, isCorrect: false },
        { answerText: 'Both A and B', isCorrect: true },
        { answerText: 'Neither A or B', isCorrect: false },
      ],
    },
    {
      questionText: 'What of the following is a type of market you can trade?',
      answerChoices: [
        { answerText: 'Futures & Options', isCorrect: false },
        { answerText: 'Currencies', isCorrect: false },
        { answerText: 'Stocks', isCorrect: false },
        { answerText: 'All of the Above', isCorrect: true },
      ],
    },
    {
      questionText: 'What is the minimum amount of months of basic living expenses should you have saved?',
      answerChoices: [
        { answerText: '6 months', isCorrect: false },
        { answerText: '12 months', isCorrect: false },
        { answerText: '3 months', isCorrect: true },
        { answerText: '9 months', isCorrect: false },
      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [finalScore, setFinalScore] = useState(false)

  const [score, setScore] = useState(0)

  const handleButtononClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setFinalScore(true)
    }
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="triviaPage">
      {/* <Router>
        <div className="App">
          <Header />
          <Route path="/learn" component={Learn} />
        </div>
      </Router> */}

      <div className='gameTitle'>
        <img className="logo" src={process.env.PUBLIC_URL + "/P4-Logo.png"} alt='Logo'></img>
      </div>
      <div className='game'>
        {finalScore ? (
          <div className='score'>You answered {score} out of {questions.length} correctly!</div>
        ) : (
          <>
            <div className='questionSec'>
              <div className='questionNum'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='questionText'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answerSec'>
              {questions[currentQuestion].answerChoices.map((answerChoice) => <button className='answers' onClick={() => handleButtononClick(answerChoice.isCorrect)}>{answerChoice.answerText}</button>)}
            </div>
          </>
        )}
      </div >
        <div>
          <button className="restartButton" onClick={refreshPage}>Restart</button>
        </div>
    </div>
  )
}