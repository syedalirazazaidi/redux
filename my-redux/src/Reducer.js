const iniState = {
    age : 21,
    history:[]
}
const reducer =(state = iniState,action)=>{
    const newState  = {...state};
    switch (action.type) {
        case "ADD":
            // newState.age +=1;
            return {
                ...state,
                age: state.age + 1,
                history: state.history.concat({
                    id: Math.random(),
                    age: state.age + 1,
                })
            }
            break;
        case "SUB":
            newState.age -= 1;
            history: state.history.concat({
                id: Math.random(),
                age: state.age - 1,
            })
            break;
        case "DEL":
            return {
                ...state,
                history: state.history.filter(el => (
                    el.id !==action.key

                ))
            }
            break;

    }
    return newState;
    
}
   
export default reducer;