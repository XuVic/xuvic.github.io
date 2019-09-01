import React from 'react'
import ProjectDescription from './ProjectDescription'
import '../../styles/pages/project.scss'
import { projects, projects_description } from '../../data/project' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

class Project extends React.Component{
  constructor(props){
    super(props);
    this.state = { project: 'WiKey' }
    this.projectSelector = this.projectSelector.bind(this);
    this.project_element = this.project_element.bind(this);
  }

  projectSelector(e) {
    console.log(e.target.id)
    if (e.target.id){
      this.setState({project: e.target.id})
    }
  }

  active(context) {
    if(context['page'] == 'PROJECT'){
      return 'page-active'
    }else{
      return ''
    }
  }

  project_element(project) {
    return (
      <div className='project' id={project} onMouseEnter={this.projectSelector}  >
        <div className='icon'> <FontAwesomeIcon icon={faCode} size='lg' /> </div>
        <div className='name'>  {project} </div>
      </div>
    )
  }

  render() {
    return (
      <div className={'page ' + this.active(this.props.context)} id='project'>
        <div className='left'>
          <div className='title'>See My Projects</div>
          <div className='project-list'>
            { 
              projects.map(this.project_element)         
            }

          </div>
        </div>
        <div className='right'>
          <ProjectDescription description={projects_description[this.state['project']]} />
        </div>
      </div>
    )
  }
}

export default Project 