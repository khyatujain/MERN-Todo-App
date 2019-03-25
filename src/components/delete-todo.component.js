import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class EditTodo extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    
    delete() {
        axios.delete('http://localhost:4000/todos/delete/'+this.props.match.params.id)
            .then( console.log('Todo deleted'))
            .catch(function(error) {
                console.log(error);
            })
        this.props.history.push("/");
    }
    
    render() {
        return (
            <div>
                <h3 align="center">Delete Todo</h3>
                <div>
                    <p>Todo will be deleted. Do you confirm?</p>
                    <button className="btn btn-success" onClick={this.delete}>Yes</button>&nbsp;
                    <Link to={"/"} className="btn btn-danger" onClick={this.delete}>No</Link>
                </div>
            </div>
        )
    }
}