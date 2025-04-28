export const insrt = "INSRT"
export const delet = "DELETE"
export const updat = "UPDATE"
 
export const Add = (data)=>{
    return{
        type:insrt,
        payload:data
    }
}
export const updetData = (id,data)=>{
    return{
        type:delet,
        payload:{id,data}
    }
}
export const deletData = (id)=>{
    return{
        type:updat,
        payload:id
    }
}