import React, { Component } from 'react';
import { updateSkill } from './actions';
import { connect } from 'react-redux';

class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newTitle = this.getTitle.value;
  const newMessage = this.getMessage.value;

  const data = {
    newTitle,
    newMessage
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })

}
render() {
return (
  <div key={this.props.skill.id} className="post">
  <form className="form" onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.skill.title} placeholder="Enter Skill Title" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getMessage = input}
    defaultValue={this.props.skill.message} cols="28" placeholder="Enter Skill Detail" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);
//this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
