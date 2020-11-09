import React, { Component,useEffect } from 'react';
import {connect} from 'react-redux'
import {fetchTasks} from '../src/Redux/taskAction.js'
import {addtask} from '../src/Redux/taskAction.js'
import {deletetask} from '../src/Redux/taskAction.js'
import logo from '../src/Images/Capg logo.png'
import va from '../src/Images/VA.jpg'
import './App.css';
import  {Link,withRouter} from "react-router-dom";
import axios from 'axios'
let task1=""
let taskp=""
let taskd=""
let idtt=""
function write(e){

	task1=e.target.value
	console.log(task1)
}


function taskpriority(e){
taskp=e.target.value
console.log(taskp)

}
function taskdate(e){
taskd=e.target.value
console.log(taskd)

}
function submitdata(){
idtt=Date().toLocaleString()
axios.post('http://localhost:3001/submittask',{


task:task1,
priority:taskp,
deadline:taskd,
id:"1",
idt:idtt




 })

}


function deletetaskf(nidt){

axios.post('http://localhost:3001/deletetask',{


idt:nidt




 })

}


	const Tasks=({fetchTasks,taskdata,addtask,deletetask})=>{


  useEffect(()=>{fetchTasks()

  },[])

    const item=[];
    console.log("this is task data")
    console.log(taskdata)
    taskdata.tasks?taskdata.tasks.map(mapp=>{
                            item.push(<div><div style={{height:100,width:650,borderStyle:"Solid",marginLeft:10,marginRight:40,display:'inline-block'}}><div style={{backgroundColor:"brown",position:'relative',top:0}}><span>task 1</span><span style={{float:"right"}}>priority: {mapp.priority}</span><span style={{float:"right"}}>Deadline: {mapp.deadline}</span></div></div><button onClick={()=>{deletetask(mapp.idt);deletetaskf(mapp.idt)}}>delete task</button><div style={{position:"relative",top:-80,left:12}}>{mapp.task}</div></div>
                            )
                            }):<span></span>
               

	            return(<div>
			            
				      	<div style={{backgroundColor:"#0099ff",display:'block',height:80}}>	
				      		<img src={logo} style={{height:70,width:170,display:"inline-block"}}/>	
			  				<button style={{float:"Right",backgroundColor:"#0099ff",color:"white",cursor:"pointer",border:"none",display:"inline-block",position:"relative",top:55}}>Sign Out</button>
			  				<h2 style={{float:"Right",color:"White",fontSize:15,display:"inline-block",position:"relative",top:40,left:-10}}>Welcome Akshit Rana</h2>
			  				<h1 style={{position:"absolute",top:0,left:400,color:"white"}}>Employee Digital Assistant</h1>
			  				</div>
			  				<div style={{backgroundColor:"#b3b3ff",height:30}}>	
			  				<Link to='/tasks'><button style={{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"}}>Tasks</button></Link>
			  				<Link to='/meetings'><button style={{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"}}>Meetings</button></Link>
			  				<Link to='/implinks'><button style={{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"}}>Important Links</button></Link>
			  				<Link to='/notes'><button style={{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"}}>Notes</button></Link>
                            </div>
                            <div  style={{height:450,width:800,backgroundColor:"white",borderStyle:"Solid",display:'inline-block',overflowY:'scroll',overflowX:'hidden'}}>
                            <div style={{position:'absolute',left:10,backgroundColor:"white",zIndex:10,width:"778px"}}><h3 style={{position:'relative',left:"40%",backgroundColor:"white",zIndex:10,width:"150px",display:'inline-block'}} >Pending tasks</h3><span></span></div>
                            <div style={{position:'relative',top:80}}>{item}</div>
                          
                            </div>
                            

                            <div style={{height:450,width:350,borderStyle:'Solid',display:'inline-block',position:"relative",left:40,top:-200}}>
                            <h3>Create Task</h3>  
                            <div><span>Enter Task:</span>
                            <textarea onChange={write} style={{width:300,height:100}}/></div>
                           <div> <span>Deadline:</span>
                            <input onChange={taskdate} type="date"/></div>
                             <div> <span>priority:</span>
                            <select id="cars" name="cars" onChange={taskpriority}>
   							<option value="high">High</option>
    						<option value="moderate">Moderate</option>
    						<option value="low">Low</option>
  							</select></div>
  							<button onClick={()=>{submitdata();addtask();}}>submit task</button>
                            

                            </div>

			      </div>
			      )	
		
	
}
const mapStateToProps=state=>{
		
		return{

			taskdata:state
		}
	}
	const mapDispatchToProps=dispactch=>{return{

		fetchTasks:()=>dispactch(fetchTasks()),
		addtask:()=>dispactch(addtask({"task":task1,"priority":taskp,"Deadline":taskd,idt:idtt})),
		deletetask:(tid)=>dispactch(deletetask({"task":task1,"priority":taskp,"Deadline":taskd,tidd:tid}))

	}
	}
export default connect(mapStateToProps,mapDispatchToProps)(Tasks);