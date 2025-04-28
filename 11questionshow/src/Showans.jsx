import React, { useState } from 'react'
import { Question } from './Question'

const Showans = () => {
    const [display, setDisplay] = useState(Question[0].id)
    return (
        <div>
            <h1 className='head'>FAQ</h1>
            {Question.map((value, index) => {
                return (
                    <div className='main' key={value.id}>
                        <h1 onClick={() => setDisplay(value.id)}>{value.question}</h1>
                        <p className={(value.id == display) ? 'show' : ''}>{value.answer}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Showans