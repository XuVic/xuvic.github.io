import React from 'react';
import Carousel from '../Carousel';
import Button from './Button';
import List from './List';
import '../../styles/pages/project_description.scss';


class ProjectDescription extends React.Component{
  render() {
    return (
      <div className='project-description'>
        <div className='top '>
          <div className='infos '>
            <div className='name'>
              {this.props.description['name']}
            </div>
            <div className='intro'>
              {this.props.description['intro']}
            </div>
          </div>
          <div className='links '>
            { 
              this.props.description.links.map(link => 
                <Button link={link.link} icon={link.icon} size='2x' btnStyles='btn-sm btn-link' btnTitle={link.title}/>
                ) 
            }
          </div>
        </div>
        <div className='mid'>
          <Carousel images={this.props.description['images']}/>
        </div>
        <div className='bottom'>
          <div className='technical-sheet'>
            <div className='title '>
              Technical Sheet
            </div>
            <div className='subtitle '>
              Code technologies I got involved with while working on this project.
            </div>
            <div className='body'>
              <div className='sheet '>
                <List contents={this.props.description['techs'].slice(0,5)}/>
              </div>
              <div className='sheet '>
                <List contents={this.props.description['techs'].slice(5)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectDescription 