const defaultState = {
  result: {},
  loading:false,
  error:null
}

const searchReducer= (state = defaultState, action)=>{
  switch (action.type){
    case "SEARCH_REQUEST":
    return{
      ...state,
      loading:true,
      error:null
    };
    case "SEARCH_SUCCESS":
    return{
      ...state,
      loading:false,
      result:action.payload,
    };
    case "SEARCH_FAILURE":
    return{
      ...state,
      loading:false,
      error:action.error,
      result:{}
    };
    default:
    return state;
}
}

export default searchReducer;
