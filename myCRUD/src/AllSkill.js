import React, { Component } from 'react';
import { connect } from 'react-redux';
import Skill from './Skill';
import UpdateContainer from './containers/UpdateContainer';

class AllSkill extends Component{
  render() {
    return (
    <div>
    <h1 className="skill_heading">All Skills</h1>
       {this.props.skills.map((skill) =>(
         <div key={skill.id}>
          {skill.editing ? <UpdateContainer skill={skill} key={skill.id} /> : <Skill skill={skill}
          key={skill.id}/>}
         </div>
       ))}
    </div>
    );
   }
}
const mapStateToProps = (state) => {
    return {
        skills: state
    }
}
export default connect(mapStateToProps)(AllSkill);
