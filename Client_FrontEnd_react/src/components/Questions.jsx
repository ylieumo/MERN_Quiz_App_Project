// import React from 'react'
// having a problem importing the useState:"Too many re-renders. React limits the number of renders to prevent an infinite loop."
import React, { useEffect, useState } from 'react'
import Data from '../database/Data'

const Questions = () => {

    const [checked, setChecked] = useState(undefined)

    const question = Data[0]

    useEffect(() =>{
        console.log(question)
    })

    function onSelect(){
       
        console.log('radio button change')
    }
  return (
    <div className='questions'>
    <h2 className="tex-light">{question.question}</h2>

        <ul key={question.id}>
          
               {
               question.options.map((q, i) => (
            <li key={i}>
                <input type="radio" 
                 value={false}
                 name='options'
                 id={`q${i}-option`}
                 onChange={onSelect()}
                />

                <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                 <div className="check "></div>
            </li>
                
               ))
               }
        </ul>
    </div>
  )
}

export default Questions