const skillReducer = (state = [], action) => {
switch(action.type) {
    case 'ADD_SKILL':
      return state.concat([action.data]);
    case 'DELETE_SKILL':
     return state.filter((skill)=>skill.id !== action.id);
     case 'EDIT_SKILL':
      return state.map((skill)=>skill.id === action.id ? {...skill,editing:!skill.editing}:skill)
    case 'UPDATE':
      return state.map((skill)=>{

           if(skill.id === action.id) {
             return {
                ...skill,
                title:action.data.newTitle,
                message:action.data.newMessage,
                editing: !skill.editing
             }
              } else return skill;
           })
    default:
      return state;
  }
}
export default skillReducer;
