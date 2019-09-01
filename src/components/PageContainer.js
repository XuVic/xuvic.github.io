import React, { useContext } from 'react';
import '../styles/page_container.scss'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import { PageContext } from '../contexts/PageContext'

class PageContainer extends React.Component{
  static contextType = PageContext

  render() {
    return (
      <main className='page-container '>
        <Home context={this.context[0]}/>
        <About context={this.context[0]}/>
        <Project context={this.context[0]}/>
      </main>
    );
  };
}

export default PageContainer;