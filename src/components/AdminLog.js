import React from 'react';
import { adminLog } from '../repository';
import InputRange from 'react-input-range';
import "../customcss/menu.css"
import "react-input-range/lib/css/index.css"; 

export default class AdminLog extends React.Component{

  constructor() {
    super();
    this.state = { name: '',  value: {
      min: 5,
      max: 10,
    }};
    this.handleInputChange =this.handleInputChange.bind(this);
    this.submitLogin =this.submitLogin.bind(this);
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  submitLogin(event){
    event.preventDefault();
    adminLog(this.state)
      .then(response=>{this.handleResponse(response)})
      .catch(err => alert(err));
  }

  
  handleResponse(response)
  {
    var x=response.status
    console.log("status sis")
    console.log(x)
    if(x===200)
    {console.log("suscees response 1")
    console.log(response.data.name)
    const token = response.data;
    console.log("response name")
    console.log(token.name)
    var testObject = { 'one': 651, 'two': 2, 'three': 3 };
    console.log(testObject.one)
  localStorage.setItem("userObject980",JSON.stringify(token));
  localStorage.setItem("userObject980logstatus",true);
  localStorage.setItem("jwtToken1", "tokengraphy");
 
 // window.location = '/'
  
  
  }
  else if(x===274)
  {console.log("fail response  empty274")
    this.setState({
     
     emaillabel:"Email Already Exists"
     
    });
  }
    else{
      console.log("fail response  empty 1112")
      console.log(response.data.passwordmessage)
      // this.setState({
      //   namelabel: response.data.namemessage,
      //  emaillabel:response.data.emailmessage,
      //  passwordlabel:response.data.passwordmessage,
      //  rpasswordlabel:response.data.rpasswordmessage

      // });



    }

  }
  logOutUser()
    { console.log("LogOut000000000000000000000000000000000000000000000000000")
    localStorage.removeItem("userObject980");
    localStorage.removeItem("userObject980logstatus")
    localStorage.removeItem("cart")
  }



  

  tempfunc2()
      {
        window.location = '/AdminItems/'

     
      }

      tempfunc3()
      { 
       // alert.show(<div style={{ color: 'blue' }}>Some Message</div>)
        if(localStorage.userObject980)
        {
          var retrievedObject = localStorage.getItem('userObject980');
        var retrievedObject2 = localStorage.getItem('userObject980logstatus');//userObject980logstatus
        var z= JSON.parse(retrievedObject)
        console.log("zonet")
        console.log(z.name);
        console.log(z.email);
        console.log(z._id)
        console.log("logstatus")
        console.log(retrievedObject2)
        }
        else
        {console.log("user logged out")}
        
    }

  render() {
     return (
      <div className="container">
      <hr/>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 style={{Color: "lightblue"}}>Adminstrator Options </h3>
            </div>
            <div className="panel-body">
              <form className="form" onSubmit={this.submitLogin}>
                <div className="form-group">
                  <label>Name:</label>
                  <input type="text" className="form-control" name="name" onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input type="password" className="form-control" name="password" onChange={this.handleInputChange}/>
                </div>
                <InputRange
                draggableTrack
                maxValue={20}
                minValue={0}
                formatLabel={value => `RS ${value}.00`}
                value={this.state.value}
                onChange={value => this.setState({ value: value })}
                onChangeComplete={value => console.log(value)} />
                <input type="range" id="points" name="points" min="0" max="10"></input>
                <button type="submit" className="btn btn-default">Submit</button>
              
              </form>
              <button onClick={this.tempfunc2}>getnavigate</button>
              <button onClick={this.logOutUser}>logout</button>
               <button onClick={this.tempfunc3}>getstorage</button>
               





							</div>
            </div>
          </div>
        </div>
      
    );
  }
}
