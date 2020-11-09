import React, { Component } from 'react';
import logo from '../src/Images/Capg logo.png'
import va from '../src/Images/VA.jpg'
import  {Link,withRouter} from "react-router-dom";
import {connect} from 'react-redux'
class Home extends Component
	{
    
	render=()=>
		{  
      let item=[];

          this.props.taskdata.tasks?this.props.taskdata.tasks.map(mapp=>{
                            item.push(<div>{mapp.task}</div>
                            )
                            }):item.push(<span></span>)
      console.log(this.props.taskdata)
			return(         <div>
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
                            <div style={{backgroundColor:"white",height:150,width:800,display:'inline-block'}}> 
                            <p>Welcome to the Employee Digital Assitant.We are here for you to provide different services to make your life as 
                               simpler as we can. Here you can enjoy various features provided by your assistant to make your professional life more 
                               comfortable.Here you can add your important meetings, notes and taks.Your assistant will help you remembering everthing on time.
                             </p>			
                            </div>
                            <img src={va} style={{height:400,width:350,float:"right",paddingTop:20}} />
                            <div style={{backgroundColor:"white",height:300,width:250,display:'inline-block',marginLeft:20,borderStyle:"solid"}}>
                            <h3 style={{marginLeft:40}}>Upcoming events</h3>
                            <div>{item}</div>
                            </div>
                              <div style={{backgroundColor:"white",height:300,width:250,display:'inline-block',marginLeft:20,borderStyle:"solid"}}>
                            <h3 style={{marginLeft:40}}>Upcoming meetings</h3>
                        
                            </div>
                             <div style={{backgroundColor:"white",height:300,width:250,display:'inline-block',marginLeft:20,borderStyle:"solid"}}>
                            <h3 style={{marginLeft:40}}>Important notes</h3>
                            </div>                            
                            </div>		

			      
			      )	
		}


	}
      const mapStateToProps=state=>{
    
    return{

      taskdata:state
    }
  }
export default connect(mapStateToProps)(Home);