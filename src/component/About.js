import React from 'react'
import { json } from 'react-router-dom';
import { useState } from 'react';

class About extends React.Component{

  constructor(props){
    super(props);

    this.state={
      userinfo:{login:"dummy",
    location:"dummy",
    
  
  },
count:0   }
  }
 
  async componentDidMount(){
    

    
      const data = await fetch("https://api.github.com/users/ARUNKUMARNINGANBAD");
      const json = await data.json();
      console.log(json.name);

      this.setState({
        userinfo:json,
        
      })
  
    
  }



  render(){
    const {login,name,bio} = this.state.userinfo;
    const {count}= this.state;
    return (
      <>
      <img src={this.state.userinfo.avatar_url} alt='photo'/>
      <div>{login}</div>
      <div>{name}</div>
      <div>{bio}</div>
      <h1>{count}</h1>
     <button onClick={()=>{
     this.setState( {count : count +2});
     }} >count</button>
      
      </>
    );

  }

}


export default About