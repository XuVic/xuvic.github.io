import React from 'react'
import '../../styles/pages/about.scss'
import List from './List'
import HoverBtn from './HoverBtn'
import { experience, skillsets } from '../../data/about'

class About extends React.Component{
  active(context) {
    if(context['page'] == 'ABOUT'){
      return 'page-active'
    }else{
      return ''
    }
  }

  render() {
    console.log(skillsets)
    return (
      <div className={'page ' + this.active(this.props.context)} style={{color: 'white'}} id='about'>
        <div className='left'>
          <div className='title'>About Me </div>
          <List class_name='experience' contents={experience} />
        </div>
        <div className='right'>
          <div className='title'>Skills Set </div>
          <div className='skills'>
            { Array.from(skillsets).map(set => <HoverBtn head={set[0]} body={set[1]}/>) }
          </div>
        </div>
      </div>
    )
  }
}

export default About 