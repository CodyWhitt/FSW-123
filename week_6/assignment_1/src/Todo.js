import { useState, createContext, useContext, Component } from "react";


//class style useState
class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editing: true,
            newText:''
        }
    }

    render() {
        return (
            this.state.editing ?  // if true context rendering sets input value as newText on click passes input value and item id then sets editing value back to false to switch back
            <li key = {this.props.item.id}>
                <input onChange={(e) => this.setState({newText: e.target.value})}></input>
                <button onClick={() => {this.props.editItem(this.state.newText, this.props.item.id) ; this.setState({editing: false})}}>Accept</button>
                <button onClick={() => {this.setState({editing: false})}}>Cancel</button>
            </li> 
            :// if false context rendering with checkable setting that marks through object and calls delete function
            <li key = {this.props.item.id}>
                <input
                    type="checkbox"
                    checked = {this.props.item.completed}
                    onChange={() => this.props.completeItem(this.props.item.id)}
                />
                <span style={{ textDecoration: this.props.item.completed ? "line-through" : "" }}>
                    {this.props.item.text}
                </span>
                <button onClick={() => {this.setState({editing: true})}} disabled={(this.props.item.completed === true ? true : false)}>Edit</button>
                <button onClick={() => this.props.deleteItem(this.props.item.id)}>X</button>
            </li>
        )
    } // adds in visible delete button and is the back end function for line through if task already completed. 
}

export default Todo