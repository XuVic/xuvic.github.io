import React from 'react';
import PageContainer from './components/PageContainer';
import Nav from './components/Nav'
import Favicon from 'react-favicon';
import './styles/app.scss';
import Avator from '../public/favicon.ico'
import { PageProvider } from './contexts/PageContext';


class App extends React.Component{
  
  render() {
    console.log('11')

    return (
      <PageProvider>
        <div className='app'>
          <Favicon url={Avator} />
          <Nav />
          <PageContainer />
        </div>
      </PageProvider>
    );
  }
}

export default App;