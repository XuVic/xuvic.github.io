import React from 'react'
import { faMedium, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Button from './Button'
import cv from '../../../public/cv.png'
import '../../styles/pages/home.scss'

class Home extends React.Component{

  active(context) {
    if(context['page'] == 'HOME'){
      return 'page-active'
    }else{
      return ''
    }
  }

  render() {
    return (
      <div className={'page ' + this.active(this.props.context)} id='home'>
        <div className=' right'>
          <section className='up '>
            <p className='self-intro'> 
              Hi, <br/> 
              I'm Vic, <br/> 
              Software Developer.
            </p>
            <p className='skills'>
              Back end Developer / Ruby on Rails
            </p>
          </section>
          <section className='bottom links'>
            <Button link='https://medium.com/@xumingyo' icon={faMedium} body='Blog' size='3x'/>
            <Button link='https://github.com/XuVic?tab=repositories' icon={faGithubSquare} body='Github' size='3x' />
            <Button link='https://www.linkedin.com/in/mingyo-xu-6a7b15159/' icon={faLinkedin} body='Linkedin' size='3x' />
          </section>
        </div>
        <div className='left'>
          <a class='cv' href='https://www.cakeresume.com/vic-xu' target='_blank'> 
            <img src={'./public/' + cv} />
          </a>
        </div>
      </div>
    )
  }
}

export default Home 