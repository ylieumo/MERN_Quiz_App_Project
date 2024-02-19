import React from 'react'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable'

const Result = () => {

  function onRestart() {
    console.log('on Restart')
  }
  return (
    <div className='container'>
       <h1 className='title text-light'>Quiz Application</h1>

       <div className="result flex-ceneter">
        <div className="flex">
          <span>Usernema</span>
          <span className="bold">Daily Tuition</span>
        </div>
        <div className="flex">
          <span>Toatal Quiz Point : </span>
          <span className="bold">50</span>
        </div>
        <div className="flex">
          <span>Toatal Questions : </span>
          <span className="bold">05</span>
        </div>
        <div className="flex">
          <span>Toatal Attemptss : </span>
          <span className="bold">03</span>
        </div>
        <div className="flex">
          <span>Toatal Earn Points : </span>
          <span className="bold">30</span>
        </div>
        <div className="flex">
          <span>Quiz Result </span>
          <span className="bold"> Passed </span>
        </div>
        
       </div>
       <div className="start">
        <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
       </div>

       <div className="container">
        {/* result table  */}
        <ResultTable></ResultTable>
       </div>
    </div>
  )
}

export default Result