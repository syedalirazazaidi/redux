// import React, { Component } from 'react';
// import './App.css';
 import { connect } from 'react-redux';
// class App extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = { age : 21 }
//   // }
//   // ADD =()=>{
//   //   this.setState({
//   //    ...this.state,

//   //     age : this.state.age + 1
//   //   })
//   // }
//   // SUB =()=>{
//   //   this.setState({
//   //     ...this.state,
//   //     age : this.state.age  - 1
//   //   })
//   // }
//   render() {

//     return (
//       <div className="App">
//         <h1>Todo App</h1>
//         <div>Age:{this.props.age}<span></span></div>
//         <button onClick={this.props.ADD}>ADD</button>
//         <button onClick={this.props.SUB}>minus</button>
//         <button onClick={this.props.DEL}>minus</button>
//         <hr/>
//         <div>History</div>
//         <div>
//           <ol>
//             {
//               this.props.history.map(el=>(
//                 <li key={el.id} onClick={()=>this.props.onDelete(el.id)}>
//                   {el.age}
//                 </li>

//               ))
//             }
//           </ol>
//         </div>
//       </div>
//     )
//   }
// }


// const mapStateToProps = (state)=>{
//   return{
//     age : state.age,
//     history :state.history
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return { 
//     ADD: () => {
//       dispatch({
//         type: "ADD"
//       })

//     },
//     SUB: () => {
//       dispatch({
//         type: "SUB"
//       })

//     },
//     onDelete :(id)=>{
//       dispatch({
//         type:"DEL",
//         key : id

//       })
//     }

//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(App)
import './App.css';
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <div className="col">
          <div><span>A:</span><span>{this.props.a}</span></div>
          <button onClick={this.props.updateA}>Update A</button>
        </div>
        <div className="col">
          <div><span>B:</span><span>{this.props.b}</span></div>
          <button onClick={this.props.updateB}>Update B</button>
        </div>
      </div>
    )
  }
}
const mapStoreToProps = (store) => {
  return {
    a: store.a,
    b: store.b,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateA: () =>
      dispatch({ type: 'UPDATE_A' }),
    updateB: () =>
      dispatch({ type: 'UPDATE_B' })
  }
}



export default connect(mapStoreToProps,mapDispatchToProps)(App)
