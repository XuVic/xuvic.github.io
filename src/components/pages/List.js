import React from 'react'
import '../../styles/list.scss'

class List extends React.Component{
  list_content(content) {
    if (content.includes(' -')){
      const [head, body] = content.split(' -')
      return (<li> <div className='head'> {head + ' - '} </div> <div className='body'> {body} </div>  </li>)
    }else{
      return (<li> {content} </li>)
    }
 }

  render() {
    return (
      <ul className={this.props.class_name}>
        { this.props.contents.map(this.list_content) }
      </ul>
    )
  }
}

export default List 