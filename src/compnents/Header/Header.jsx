import React from 'react';
import './Header.css';

function Header() {
  const [search, setSearch] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search:', search);
    // Add your search logic here
  };

  return (
    <header>
      <div className='header'>
      <div className='logo'>
        <img src="/images/logo volt.png" alt="" />
      </div>

      <div className='searchBar'>
        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Search products..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className='but'>
      <ul className='item'>
          <li className='item'>Home</li>
          <li className='item'>Categories</li>
          <li className='item'>Top selled</li>
      </ul>
      </div>
      </div>
    </header>
  )
}

export default Header