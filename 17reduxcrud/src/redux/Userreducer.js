import { delet, insrt, updat } from "./Useraction"

const userState= {
    data:[]
}
const Userreducer = (state=userState,action) => {
  switch(action.type){
    case insrt:{
        return{
            ...state,
            data:[...state.data,
                 action.payload
            ]
        }
    }
    case delet:{
        return{
            ...state,
            data:state.data.filter((val,indx)=>{
                return indx == action.payload
            })
        }
    } 
    case updat:{
        return{
            ...state,
            data:state.data.map((val,indx)=>{
                if (indx==action.payload.id) {
                    val.name=action.payload.data.name
                    val.age=action.payload.data.age
                }
            })
        }
    }
    default:
        return state;
  }
}

export default Userreducer