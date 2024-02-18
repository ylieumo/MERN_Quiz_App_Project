import React, { useState } from 'react'

const Questions = () => {

    const [checked, setChecked] = useState(undefined)

    function onSelect(){
        setChecked(true)
        console.log('radio button change')
    }
  return (
    <div className='questions'>
        <h2 className="tex-light">Simple question 1 </h2>

        <ul>
            <li>
                <input 
                type="radio" 
                value={false}
                name='options'
                id='q1-option'
                onChange={onSelect()}
                />

                <label className='text-primary' htmlFor="q1-option">Options</label>
                <div className="check checked"></div>

            </li>
        </ul>
    </div>
  )
}

export default Questions