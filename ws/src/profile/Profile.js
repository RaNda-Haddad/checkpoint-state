import React, { Component } from "react";


export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.Profile= {
        fullName:"randa",
        bio:"Hi im a Fullstack Js Developper",
        profession:"Web Developper",
        
        }

        this.state={count:0}
      }

      componentDidMount(){
          setInterval(()=>{
              this.setState(prevState=>({
                  count: prevState.count+1
              }))
            },1000)
    }
    
    
      render() {

  return (
    <div>

      <img
        src={this.Profile.img}
        alt="i"
        style={{
          width: "500px",
          height: "250px",
          display: "flex",
          margin: "auto",
          border: "5px solid #555",
        }}
      />
      <div style={{ color: "grey", textAlign: "center" }}>
        <h1>{this.Profile.fullName}</h1>
        <h3>{this.Profile.bio}</h3>
        <h4>{this.Profile.profession}</h4>
      <h2>{this.state.count} Sec...</h2>
      </div>
    </div>
  )
}
}

