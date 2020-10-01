import React, { Component } from 'react'

export default class FormDemo extends Component {
    state={
        userName: "",
        city:""
    }
    changeName= (event) => {
        //this.setState({userName: event.target.value})
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value})

    }
    onSubmit = (event) => {
        event.preventDefault();
        alert(this.state.userName)
    }

    

    render() {
        return (
            <div>
                <form onSubmit= {this.onSubmit}>
                    <h3>User Name</h3>
                    <input name = "userName" type="text" onChange={this.changeName}></input>
                    <h3>User Name : {this.state.userName} </h3>

                    <h3>City</h3>
                    <input name="city" type="text" onChange={this.changeName}></input>
                    <h3>City : {this.state.city} </h3>

                    <input type = "submit" value="Save"></input>
                </form>
            </div>
        )
    }
}
