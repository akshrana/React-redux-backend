const initialState={

loading:true,
tasks:[],
error:''
}
let arr=[]
const abc={"name":"aksh"}
export const taskReducer =(state=initialState,action)=>{
console.log("old state",state.tasks)

switch(action.type){

case "fetchtaskstatus":
return{
...state,loading:true}

case "fetchtasksuccess":

return{
loading:false,
tasks:action.payload,
error:''

}
case "fetchtaskfail":
return{
loading:false,
tasks:[],
error:action.payload
}
case "addtask":
arr=state.tasks;
arr.push(action.payload)
return{

...state,tasks:arr}
case "removetask":
console.log(action.payload.tidd)
arr=state.tasks;
arr = arr.filter(task => task.idt != action.payload.tidd) 

return{

...state,tasks:arr}

default: return state

}

}

 //default taskReducer