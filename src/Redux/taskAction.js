import axios from 'axios'
export const fetchtaskstatus=()=>{
return {

	type:"fetchtaskstatus"
}


}

export const fetchtasksuccess=tasks=>{
return {

	type:"fetchtasksuccess",
	payload:tasks
}
}


export const fetchtaskfail=error=>{
return {

	type:"fetchtaskfail",
	payload:error
}
}

export const addtask=taskdata=>{
return{
	type:"addtask",
	payload:taskdata
}

}

export const deletetask=taskdata=>{
return{
	type:"removetask",
	payload:taskdata
}

}

export const fetchTasks=()=>{

	return(dispatch)=>{
		dispatch(fetchtaskstatus)
axios.get('http://localhost:3001/getdata')
.then(response=>{const data=response.data
				dispatch(fetchtasksuccess(data))					
})
.catch(error=>{const errorMsg=error.message
dispatch(fetchtaskfail(errorMsg))
})

	}
}

