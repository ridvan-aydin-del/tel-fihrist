import { Action } from "./action"


export interface AdState{
    adlar: string[],
    soyadlar: string[]
}
const initialState = {
    adlar:[],
    soyadlar:[]
}

export const adlarReducer = (state:AdState = initialState, action: Action) => {
    switch(action.type){
        case "ADD_AD": {
            return {...state, adlar:[...state.adlar,action.payload],soyadlar:[...state.soyadlar,action.payloadd]}
            
        }
        default:
            return state
    }
}

