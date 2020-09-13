import {Reducer} from 'redux';

export enum Types {
    ADD_TODO = 'ADD_TODO',
    ORDER_TODO = 'ORDER_TODO'
  }

export interface State {
    readonly data: string[],
    order:boolean
  
  }

const INITIAL_STATE:State={
    data:[],
    order:false
};


export const reducer:Reducer = (state = INITIAL_STATE, action)=> { 

    switch(action.type){

        case Types.ADD_TODO:
            return {...state, data:[...state.data, action.payload]}

        case Types.ORDER_TODO:
            const reorder = state.order ? state.data.sort() : state.data.reverse();
            return {...state, data:[ ...reorder], order:!state.order}
        default:
            return state;

    }

    
};

 //******************************************************actions********************************** */
 
export function addTodo(todo:string){
    return(
        {
            type:Types.ADD_TODO,
            payload:todo 
        }
    )
}

export function order(){
    return(
        {
            type:Types.ORDER_TODO,
        }
    )
}
