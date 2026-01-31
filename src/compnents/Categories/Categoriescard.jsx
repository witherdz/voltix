import React from 'react'
import './Categoriescard'; 
import './Categoriescard.css';
function Categoriescard({ url, title}) {
  const handleClick = () => {
    console.log('Category clicked:', title);
    // Add your navigation or action here
  };

  return (
    <div className='categoriescard' onClick={handleClick}>
        <div className='categorycard_img'>
            <img src={url} alt={title} />
            <div className='category_title'>
                <h3>{title}</h3>
            </div>
        </div>

    </div>
  )
}
export default Categoriescard
