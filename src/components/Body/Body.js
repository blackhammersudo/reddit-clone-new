import React from 'react'
import Left from '../left/Left'
import Right from '../Right/Right'
import './Body.css'
const Body = () => {
  return (
    <div className='container main ' id='main'>
        <div className='left'>
            <Left/>
        </div>
        <div className='right'>
          <Right/>

        </div>
    </div>
  )
}

export default Body
