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
          <Article imgURL={blog01} date='Dez 09, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>
        <div className='fd__blog-container_groupB'>
          <Article imgURL={blog02} date='Dez 09, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imgURL={blog03} date='Dez 09, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imgURL={blog04} date='Dez 09, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imgURL={blog05} date='Dez 09, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>
      </div>
    </div>
  )
}

export default Blog