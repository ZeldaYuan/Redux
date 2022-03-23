/* index.js in actions folder,set an action setTechnology Nov 8,2018*/

export function setTechnology (text) {
  return {
     type: "SET_TECHNOLOGY",
     tech: text
   }
}

//const setTechnology = text => ({ type: "SET_TECHNOLOGY", text });
