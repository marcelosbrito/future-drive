import React from 'react'
import './whatFutureDrive.css'
import { Feature } from '../../components'

const WhatFutureDrive = () => {
  return (
    <div className='fd__whatfd section__margin' id='wfd'>
      <div className='fd__whatfd-feature'>
        <Feature title="What is FutureDrive" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
      </div>
      <div className='fd__whatfd-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='fd__whatfd-container'>
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "/>
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"/>
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"/>
      </div>
    </div>
  )
}

export default WhatFutureDrive