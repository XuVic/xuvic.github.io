import React from 'react';
import '../styles/nav.scss'
import Logo from '../../public/logo.ico'
import { PageContext } from '../contexts/PageContext'

class NavItem extends React.Component{
  constructor(props){
    super(props);

    this.switchContent = this.switchContent.bind(this);
  }

  static contextType = PageContext

  switchContent(e) {
    console.log(this.context[0]);
    this.context[1]({ page: e.target.dataset['page'] })
  }

  createItem() {
    if (this.props.name == 'Logo'){
      return (
        <React.Fragment >
          <img src={'public/' + Logo} />
          <span> Vic </span>
        </React.Fragment>
      )
    }else{
      return (
        <li className='nav-item'>
          <a className='nav-link' data-page={this.props.name} onClick={this.switchContent}> {this.props.name} </a>
        </li>
      )
    }
  }

  render() {
    return this.createItem()
  }
}

export default NavItem;