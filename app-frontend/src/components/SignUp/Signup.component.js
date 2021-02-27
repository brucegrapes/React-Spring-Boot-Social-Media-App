import React, { Component } from "react";
function postData(url = ``, data = {}) {
    return fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache", 
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(data)
    }).then(response => response.json()); // parses response to JSON
}   
export default class SignUp extends Component {
    render() {
        return (
            <form name="myForm" onClick={this.formValidate}>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="First name" name="name"/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password"/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
    formValidate(){
        this.setState({
            isSend: !this.state.isOpen
        });
        var name = document.forms["myForm"]["name"].value;
        var email=document.forms["myForm"]["email"].value;
        var password=document.forms["myForm"]["password"].value;
        //alert(name);
        postData(`http://localhost:8080/api/register`, {
          "authorities": [
          "user"
          ],
          "createdBy": "NoOne",
          "createdDate": "2021-02-24T03:31:52.705Z",
          "email": ""+email+"",
          "id": 0,
          "lastModifiedBy": "NoOne",
          "lastModifiedDate": "2021-02-24T03:31:52.705Z",
          "password": ""+password+"",
          "userName": ""+name+""
        }).then(data => console.log(JSON.stringify(data))).catch(error => console.error(error));
    
    }
}