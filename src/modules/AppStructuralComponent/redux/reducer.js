import {actionConstants } from './action'

const inital_state = {
    data:''
}
const Reducer = (state=inital_state,action)=>{
    switch (action.type)
    {
    case actionConstants.RESPONSE_DATA_FROM_SERVER:
   
    return Object.assign({} , state ,{data:action.data})
    
    // Case "":
    // return Object.assign({} ,state ,{})
    // break
    // Case "":
    // return Object.assign({} ,state ,{})
    // break
    default:
    return state
   

    }
}


export default Reducer