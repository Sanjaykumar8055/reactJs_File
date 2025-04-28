import { decrement, increment } from './CounterAction'
const initialState={
    count:0
}

 export const CounterReducer = (state=initialState,action) => {
    
    switch (action.type) {
        case increment:{
            return{
                count:state.count+1
            }
        }
        case decrement:{
            return{
                count:state.count-1
            }
        }
        default: {
            return state
        }
  
    }
    
}

export default CounterReducer