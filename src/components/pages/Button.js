import React from 'react'
import '../../styles/button.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Button extends React.Component{
  render() {
    const icon_styles = this.props.styles || { color: 'white' };
    const size = this.props.size || '2x';
    const btnStyles = this.props.btnStyles || 'btn-secondary';
    const btnTitle = this.props.btnTitle || '';

    return (
      <a href={this.props.link} class='link_btn' target='_blank'>
        <button className={'btn ' + btnStyles} title={btnTitle}>
          <FontAwesomeIcon icon={this.props.icon} size={size} style={icon_styles}/>
          <span > {this.props.body } </span>
        </button>
      </a>
    )
  }
}

export default Button 