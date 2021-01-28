import React from 'react';
const SkillForm = props =>(
<div>
  <h1 className="skill_heading">Add Skills</h1>
  <form className="form" onSubmit={props.handleSubmit} >
   <input
   value={props.title}
   onChange={props.handleChange}
   required type="text"
    name="title"
   placeholder="Add Skills"/> <br /><br />
   <textarea
   onChange={props.handleChange}
   placeholder="Skills detail"
   required rows="4" value={props.message} cols="28"
    name="message"
    /><br /><br />
   <button>Add</button>
  </form>
  </div>
);
export default SkillForm;
