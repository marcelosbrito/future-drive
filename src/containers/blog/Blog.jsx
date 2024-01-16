import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css';

const Blog = () => {
  return (
    <div className='fd__blog section__padding' id="blog">
      <div className='fd__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, <br />We are blogging about it.</h1>
      </div>
      <div className='fd__blog-container'>
        <div className='fd__blog-container_groupA'>
          <Article imgURL={blog01} date='Dez 09, 2023' title="FutureDrive is the Future: Let's Explore its Potential!" />
        </div>
        <div className='fd__blog-container_groupB'>
          <Article imgURL={blog02} date='Dez 16, 2023' title='Unlocking the Potential of FutureDrive: A Journey into the Future.' />
          <Article imgURL={blog03} date='Dez 24, 2023' title='Exploring the Future with FutureDrive: Unveiling its Power.' />
          <Article imgURL={blog04} date='Dez 30, 2023' title='The Future Unleashed: A Deep Dive into the Capabilities of FutureDrive.' />
          <Article imgURL={blog05} date='Jan 08, 2024' title="FutureDrive Unveiled: Navigating the Path to Tomorrow's Technology." />
        </div>
      </div>
    </div>
  )
}

export default Blog