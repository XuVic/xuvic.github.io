import React from 'react';
import NavItem from './NavItem';
import '../styles/nav.scss'

class Nav extends React.Component{
  items = ['HOME', 'ABOUT', 'PROJECT'];

  render() {
    return (
      <nav>
        <ul className='nav'>
          <div className='logo'>
            <NavItem name='Logo' />
          </div>

          <div className='items'>
            {this.items.map(item => <NavItem name={item}/>)}
          </div>
        </ul>
      </nav>
    );
  };
}

export default Nav;