import React, { Component } from 'react';
import {connect} from 'react-redux';

class Skill extends Component {
  render() {
  return (
  <div className="skill">
  <h2 className="skill_title">{this.props.skill.title}</h2>
  <p className="skill_message">{this.props.skill.message}</p>
  <div className="control-buttons">
    <button className="edit"
      onClick={()=>this.props.dispatch({type:'EDIT_SKILL',id:this.props.skill.id})}
      >Edit</button>
      <button className="delete"
      onClick={() => this.props.dispatch({ type: 'DELETE_SKILL', id: this.props.skill.id })}
      >Delete</button>
    </div>
  </div>
  );
 }
}
export default connect()(Skill);
