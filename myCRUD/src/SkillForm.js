import React, { Component } from 'react';
import {connect} from 'react-redux';

class SkillForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message =  this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message,
      editing: false
    }
    this.props.dispatch({
   type:'ADD_SKILL',
   data})
 this.getTitle.value = '';
 this.getMessage.value = '';
  //  console.log(data)
  }
render() {
return (
<div className="skill-container">
<h1 className="skill_heading">Add Skills</h1>
  <form className="form" onSubmit={this.handleSubmit} >

   <input required type="text" ref={(input)=>this.getTitle = input}
   placeholder="Add Skills"/> <br /><br />
   <textarea required rows="4" ref={(input)=>this.getMessage = input}cols="28"
   placeholder="Skills detail" /><br /><br />
   <button>Add</button>
  </form>
</div>
);
}
}

export default connect()(SkillForm);
