import React, { Component } from 'react';
// import Showlist from "./showlist";
import './todo.css';
import cross from './cross.png';
import tick from './tick.png';
import menu from './menu.png';


// const animateButton = {
//     scale1: { transform: 'scale(1.2)' },
//     scale0: { transform: 'scale(1)' }
// }

export default class todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todo: '',
            allTodos: [],
            startClientX: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    addTodo = (e) => {
        e.preventDefault()
        if (this.state.todo.length !== 0) {
            let todoArray = this.state.allTodos;
            todoArray.unshift(this.state.todo)
            this.setState({
                allTodos: todoArray,
                todo: '',
            })
        }
    }

    animateSubmitButton = () => {
        this.setState({ animateSubmit: false })
    }

    mouseDown = (e) => {
        var startX = e.clientX;
        this.setState({
            startClientX: startX
        })
    }

    mouseUp = (event, index) => {

        // console.log("clientX=", clientX)
        var clientX = event.clientX;
        this.calcDifference(clientX, index)
    }

    calcDifference = (clientX, index) => {
        let startClientX = this.state.startClientX
        let differ = clientX - startClientX
        this.deleteTodo(differ, index)
    }

    deleteTodo = (differ, index) => {
        // console.log("Id", index)
        differ > 60 ? this.deleteTodo(index) : console.log('shorter swipe')
        let newArray = this.state.allTodos
        newArray.splice(index, 1)
        this.setState({
            allTodos: newArray,
        })
    }

    // mouseLeave = () => {
    //     console.log("mouse Leave")
    //     // this.setState({
    //     //     listId: ""
    //     // })
    // }


    render() {
        // console.log('listID', this.state.listId)
        return (
            <>
                <div className="mainContainer">
                    <div className="innerContainer">
                        <div className="headingTodo">
                            Todos
                        </div>
                        <div className="todoContainer">
                            {
                                this.state.allTodos.map((v, i) => {
                                    return (
                                        <div key={i}>
                                            <ul className="setUl grabbable">
                                                <li
                                                    onMouseDown={this.mouseDown}
                                                    onMouseUp={(event) => this.mouseUp(event, i, v)}
                                                    onMouseLeave={this.mouseLeave}
                                                >
                                                    {v}
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <form className="inputContainer">
                            <input type="text"
                                maxLength="20"
                                className="input"
                                id="todo"
                                value={this.state.todo}
                                onChange={(e) => this.handleChange(e)}
                            >
                            </input>
                            <button
                                type="submit"
                                onClick={this.addTodo}
                                className="button"
                            >
                            </button>
                        </form>
                        <div className="menubar">
                            <div className="menuIcon">
                                <img src={menu} alt=""
                                    className="menu"

                                >
                                </img>
                            </div>
                            <div className="crossIcon">
                                <img src={cross} alt=""
                                    className="cross"

                                >
                                </img>
                            </div>
                            <div className="tickIcon">
                                <img src={tick} alt=""
                                    className="tick"

                                >
                                </img>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}
