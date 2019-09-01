import React from 'react'
import List from './List'
import '../../styles/hover_btn.scss'

class HoverBtn extends React.Component{
  constructor(props){
    super(props);

    this.MousteIn = this.MousteIn.bind(this);
    this.MousteOut = this.MousteOut.bind(this);
    this.state = { hover: '' };
  }

  MousteIn() {
    this.setState({hover:'active'});
  }
  MousteOut() {
    this.setState({hover:''});
  }

  render() {
    return (
      <div className='hover-btn'>
        <div className='head' onMouseEnter={this.MousteIn} onMouseLeave={this.MousteOut}>
           { this.props.head } 
        </div>
        <List class_name={'body ' + this.state['hover']} contents={this.props.body}/>
      </div>
    )
  }
}

export default HoverBtn