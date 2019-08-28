// const { createStore } =require ("redux");

// const iniState={
//   age : 34,
// }
// const myReducer=(state = iniState,action)=>{
// const newState= {...state}; 
// if(action.type==='ADD')
// {
// newState.age +=1;
// }
// else if(action.type==='SUB')
// {
// newState.age -=1;
// }
// return newState
// }
// const store = createStore(myReducer)
// store.subscribe(()=>{
// console.log("final state"+JSON.stringify(store.getState()))  
// //console.log("state change"+JSON.stringify(store.getState()))

// })
// store.dispatch({
//   type : 'ADD',
// })
// store.dispatch({ 
//   type : 'SUB',
// })
// //console.log("initial state"+JSON.stringify(store.getState()))