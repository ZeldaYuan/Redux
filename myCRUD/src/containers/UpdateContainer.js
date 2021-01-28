import React, { Component } from 'react';
import { connect } from 'react-redux';
import Update from '../components/Update';

class UpdateContainer extends Component {

  constructor(props) {
  super(props)
  this.state = {
    title : this.props.skill.title,  //Give select id skill title in the beginning
    message : this.props.skill.message
     }
  }
  handleEdit = event => {
     const { name, value } = event.target
     this.setState({ [name]: value })
   }

  handleUpdate = (e) => {
   e.preventDefault();
   const newTitle = this.state.title;
   const newMessage = this.state.message;

    const data = {

    newTitle,
    newMessage
   }
  this.props.dispatch({ type: 'UPDATE', id: this.props.skill.id, data: data })
  }

render() {
const { title, message } = this.state
return (
<div className="skill" >
<Update
 title={title}
 message={message}
 handleClick={this.handleUpdate}
 handleChange={this.handleEdit}

 />
</div>
) }
}
const mapStateToProps = (state, ownProps) => {
  return ownProps
}


export default connect(mapStateToProps)(UpdateContainer);
