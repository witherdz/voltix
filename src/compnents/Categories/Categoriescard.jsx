import React from 'react'
import './Categoriescard'; 
function Categoriescard({ url, title}) {
  return (
    <div className='categoriescard'>
        <div className='categorycard_img'>
            <img src={url} alt="" />
        </div>
        <div className='category_title'>
            <h3>{title}</h3>
        </div>

    </div>
  )
}

export default Categoriescard