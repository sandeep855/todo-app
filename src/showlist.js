import React, { Component } from 'react';
import './todo.css';
import cross from './cross.png';
import tick from './tick.png';
import menu from './menu.png';

export default class showlist extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className="todoContainer">
                    {
                        this.props.todos.map((v, i) => {
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
            </>
        )
    }
}
