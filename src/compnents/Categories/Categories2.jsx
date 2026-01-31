import React from 'react';
import Categoriescard from './Categoriescard';
import'./Categories.css';
import './Categories2'; 
function Categories2() {
  return (
    <><div className='h'>
      <h2>Categories</h2>
    </div>
    <div className='categories'>
        <Categoriescard url="/images/per.jpg" title="Performence" />
        <Categoriescard url="/images/dek.png" title="Office" />
        <Categoriescard url="/images/access.png" title="Accessoires" />
        <Categoriescard url="/images/monit.png" title="Monitors" />

      </div></>
  )
}

export default Categories2