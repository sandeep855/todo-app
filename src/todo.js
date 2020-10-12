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
            startClientX: '',
            allTodos: [],
            finishTodos: [],
            showGreen: false
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
                showGreen: false
            })
        }
    }

    mouseDown = (e) => {
        var startX = e.clientX;
        this.setState({
            startClientX: startX
        })
    }

    mouseUp = (event, value, index) => {
        var clientX = event.clientX;
        this.calcDifference(clientX, value, index)
    }

    calcDifference = (clientX, value, index) => {
        let startClientX = this.state.startClientX
        let differ = clientX - startClientX
        this.moveToFinish(differ, value, index)
    }

    moveToFinish = (differ, value, index) => {

        let finishTodosCopy = this.state.finishTodos
        let allTodosCopy = this.state.allTodos

        if (differ > 60 && this.state.showGreen === false) {
            finishTodosCopy.unshift(value)
            allTodosCopy.splice(index, 1)
            this.setState({
                finishTodos: finishTodosCopy,
                allTodos: allTodosCopy
            })
        } else if (differ > 60 && this.state.showGreen === true) {
            let finishTodosCopy = this.state.finishTodos
            finishTodosCopy.splice(index, 1)
            this.setState({ finishTodos: finishTodosCopy })
        }
    }

    finishTodos = () => {
        this.setState({ showGreen: true })
    }

    tickRed = () => {
        this.setState({ showGreen: false })
    }


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
                                this.state.showGreen
                                    ?
                                    this.state.finishTodos.map((value, i) => {
                                        return (
                                            <div key={i}>
                                                <ul className="setUl grabbable" style={{ color: 'green' }}>
                                                    <li
                                                        onMouseDown={this.mouseDown}
                                                        onMouseUp={(event) => this.mouseUp(event, value, i)}
                                                        onMouseLeave={this.mouseLeave}
                                                    >
                                                        {value}
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    })
                                    :
                                    this.state.allTodos.map((value, i) => {
                                        return (
                                            <div key={i}>
                                                <ul className="setUl grabbable">
                                                    <li
                                                        onMouseDown={this.mouseDown}
                                                        onMouseUp={(event) => this.mouseUp(event, value, i)}
                                                        onMouseLeave={this.mouseLeave}
                                                    >
                                                        {value}
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    })
                            }

                        </div>
                        <form className="inputContainer">
                            <input type="text"
                                maxLength="25"
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
                                    onClick={this.tickRed}
                                >
                                </img>
                            </div>
                            <div className="tickIcon">
                                <img src={tick} alt=""
                                    className="tick"
                                    onClick={this.finishTodos}
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
