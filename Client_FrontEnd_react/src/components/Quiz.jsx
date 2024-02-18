import React from 'react'
import Questions from './Questions'
const Quiz = () => {

    /**Next button event handler */
    function onNext(){
        console.log('On next click')
    }

    /**Previous button event handler */
    function onPrev(){
        console.log('On onPrev click')
    }
  return (
    <div className='container'>
         <h1 className='title text-light'>Quiz Application</h1>

        {/* {display questions}  */}
        <Questions/>

        <div className="grid">
            <button className='btn prev'onClick={onPrev}>Previous</button>
            <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>
  )
}

export default Quiz