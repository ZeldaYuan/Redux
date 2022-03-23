import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addSkill } from '../actions';
import SkillForm from '../components/SkillForm';

class SkillFormContainer extends Component {
 state = {
  title: '',
  message: ''
 }
 handleChangeVal = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  handleSubmiter = (e) => {
    e.preventDefault();
    const { title, message } = this.state
    const data = {
      id: new Date(),
      title,
      message,
      editing: false
    }
    this.props.dispatch(addSkill(data))
   this.handleClearForm(e)
  }
  handleClearForm = e => {
      e.preventDefault()
      this.setState({ title: '', message: '' })
    }
  render() {

    return (
      <div className="skill-container">
      <SkillForm
      {...this.state}
      handleChange={this.handleChangeVal}
      handleSubmit={this.handleSubmiter} />
      </div>
    )
  }
}

export default connect()(SkillFormContainer);
