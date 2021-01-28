import { createStore } from "redux";  
import reducer from "../reducers";

const initialState = { tech: "Zelda " };
export const store = createStore(reducer,initialState);   //this has been updated to include the created reducer 
