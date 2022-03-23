import React, { Component } from 'react';
import SkillFormContainer from './containers/SkillFormContainer';
import AllSkill from './AllSkill';

class App extends Component {
 render() {
  return (
    <div className="App">
    <div className="navbar">
    <h2 className="center ">Input Skills</h2>
    </div>
        <SkillFormContainer />
        <AllSkill />
    </div>
  );
}
}
export default App;
