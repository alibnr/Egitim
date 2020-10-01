import React, { Component } from 'react'

export default class FormDemo extends Component {
    state={
        userName: ""
    }
    changeName= (event) => {
        this.setState({userName: event.target.value})

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
                    <input type="text" onChange={this.changeName}></input>
                    <h3>User Name : {this.state.userName} </h3>
                    <input type = "submit" value="Save"></input>
                </form>
            </div>
        )
    }
}
