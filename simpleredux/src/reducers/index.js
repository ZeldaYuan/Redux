/* index.js in reducers folder Nov 8,2018*/

function reducer (state, action) {
	switch (action.type) {
		case "is_open":
			return;  //return new state
		case "is_clicked":
			return; //return new state
		default:
		return state;
	}
}
export default (state, action) => {
  switch (action.type) {
    case "SET_TECHNOLOGY":
      return {
        ...state,     //This object has all the properties of the previous state object. Thanks to the ES6 spread operator, ...state 
        tech: action.tech   //This works by return new state
      };

    default:
      return state;
  }
};

/*export default (state, action) => {
  console.log(action);  //Shows in View/Developer/JavaScript Console
  return state;
};*/ //This is after Actions Dispatche,but don't display button actiond

/*export default (state) => {
	return state
} *///initial one
