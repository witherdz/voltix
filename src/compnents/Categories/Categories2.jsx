import React from 'react'
import Categoriescard from './Categoriescard'
import './Categories2'; 
function Categories2() {
  return (
    <div className='categories'>
        <h2>Categories</h2>
        <Categoriescard url="/images/negga.jpg" title="Office"/>
        <Categoriescard url="/images/negga.jpg" title="Office"/>
        <Categoriescard url="/images/negga.jpg" title="Office"/>
        <Categoriescard url="/images/negga.jpg" title="Office"/>

    </div>
  )
}

export default Categories2