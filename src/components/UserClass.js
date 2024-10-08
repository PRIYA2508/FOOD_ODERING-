import React from "react";

class UserClass extends React.Component{

  constructor(props){
    super(props)
    console.log(props)

   //create state vairable with some dummy data
   this.state ={
    userinfo:{
      name: "Priya",
      location: "India",
    }}
  };

 //in class base component we have to make componentDidMount async 
  async componentDidMount(){
  const data = await fetch("https://api.github.com/users/PRIYA2508");

  const json = await data.json()
  console.log(json)

  this.setState({
    userinfo:json,
  })

  
    
  }
    render(){ 
      const {email , location} = this.props
      const {count,count2} = this.state
        return(
         <div className="user-cards">
          <h2>{count}</h2>
          <button onClick={()=>{
            if(count<20){
              this.setState({count:count+1})
            }
            else{
              this.setState({count:0})
            }
         }}>increase count</button>
         
          <h2>Name:{this.state.userinfo.name}</h2>
           <h2>Email:{email}</h2>
           <h2>Location:{this.state.userinfo.location} </h2> 
         </div>
        )
    }
}
export default UserClass;
