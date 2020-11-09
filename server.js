const express=require ('express')

const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
app.use(cors())

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const userDB=[{id:1,name:"Akshit",password:"123",task:[]}]
app.get('/',(req,res)=>{
	res.send('testtt')
})

app.get('/getdata',(req,res)=>{
	let uid=req.body.uid
    userDB.map(j=>{if(1)res.send(j.task)})
	
})



app.post('/submittask',(req,res)=>{
console.log("hello",userDB)
const userData={
task:req.body.task,
priority:req.body.priority,
deadline:req.body.deadline,
id:req.body.id,
idt:req.body.idt
}
userDB.map(i=>{if(userData.id=="1")i.task.push(userData)})
console.log(userDB[0].task)


})
app.post('/deletetask',(req,res)=>{
console.log(userDB[0].task[0].idt)
console.log('deleting id')
console.log(req.body.idt)

const did=req.body.idt
let tarr=[]
console.log("yahhhaha")
userDB.map(i=>{if(i.id==1){i.task= i.task.filter(task => task.idt != req.body.idt );console.log("ye chsllllllaa") }})


})

app.post('/reguser',(req,res)=>{

const user={
id:req.body.id,
name:req.body.name,
password:req.body.password,
task:{}
}
userDB.push(user);
})


app.listen(3001);