import React from 'react';
const Update = props =>(
<div className="skill">
<form className="form" onSubmit={props.handleClick}>

    <input required type="text"
     name="title"
     defaultValue={props.title}
     onChange={props.handleChange}
     value={props.title}
     placeholder="Enter Skill Title" /><br /><br />
    <textarea required rows="5" cols="28"
     name="message"
     defaultValue={props.message}
     onChange={props.handleChange}
     value={props.message}
     placeholder="Enter Skill Detail" /><br /><br />
    <button>Update</button>
</form>
</div>
);

export default Update;
