import React from 'react'
import { faMedium, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Button from './Button'
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
              Back end Developer / Ruby on Rails / React
            </p>
          </section>
          <section className='bottom links'>
            <Button link='https://medium.com/@xumingyo' icon={faMedium} body='Blog' size='4x'/>
            <Button link='https://github.com/XuVic?tab=repositories' icon={faGithubSquare} body='Github' size='4x' />
            <Button link='https://www.linkedin.com/in/mingyo-xu-6a7b15159/' icon={faLinkedin} body='Linkedin' size='4x' />
          </section>
        </div>
        <div className='left'>

        </div>
      </div>
    )
  }
}

export default Home 