export function addSkill(data){
return {
  type:"ADD_SKILL",
  data
 }
}

export function update(id,data){
  return{
    type: "UPDATE",
    id: id,
    data: data
  }
}
