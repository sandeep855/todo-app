// import React, { Component } from 'react';
// import './todo.css';

// export default class showlist extends Component {

//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <>
//                 <div className="todoContainer">
//                     {
//                         this.props.todos.map((v, i) => {
//                             return (
//                                 <div key={i}>
//                                     <ul className="setUl grabbable">
//                                         <li
//                                             onMouseDown={this.mouseDown}
//                                             onMouseUp={(event) => this.mouseUp(event, i, v)}
//                                             // onMouseLeave={this.mouseLeave}
//                                         >
//                                             {v}
//                                         </li>
//                                     </ul>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </>
//         )
//     }
// }




//     moveDone = (value) => {
//         // console.log('moveDone',  value)
//         // console.log('todoDone', todosDone)
//         let todosDone = this.state.doneTodos
//         todosDone.unshift({ 'status': 'done', 'value': value })
//         this.setState({ doneTodos: todosDone },
//             () => { console.log(this.state.doneTodos) })
//     }

//     movePending = (value) => {
//         // console.log('movePending',  value)
//         // console.log('todoPending', todosPending)
//         let todosPending = this.state.pendingTodos
//         todosPending.unshift({ 'status': 'pending', 'value': value })
//         this.setState({ pendingTodos: todosPending },
//             () => { console.log(this.state.pendingTodos) })
//     }

//     deleteTodo = (differ, index) => {
//         if (differ > 60) {
//             let newArray = this.state.allTodos
//             newArray.splice( 1)
//             this.setState({
//                 allTodos: newArray,
//             })
//         }
//         else console.log('shorter swipe')