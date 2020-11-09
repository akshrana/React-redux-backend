import React, { Component } from 'react';
import logo from '../src/Images/Capg logo.png'
import va from '../src/Images/VA.jpg'
import  {Link,withRouter} from "react-router-dom";
class Meetings extends Component
	{

	render=()=>
		{  
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
			      </div>
			      )	
		}
	}
export default Meetings;