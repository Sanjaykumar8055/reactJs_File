import React, { useState } from 'react'

const Card = () => {
    const[name,setName]=useState("")
    const[age,setAge]=useState(0)
    const[id,setId]=useState('')
    const[data,setData]=useState([])
    const saveData=(i)=>{
        i.preventDefault()
        if (id!="") {
            let updat = data.map((i,index)=>{
                if (id==index) {
                    i.name=name,
                    i.age=age
                }
             return i 
            })
            setData(updat)
        } else {
            setData([
                ...data,
               { 
                name:name, 
                age:age
               }
            ])
        }
      
        setName('')
        setAge('')
        setId('')
    }
    const deletData=(index)=>{
         let del = data.filter((v,id)=>{
            return index !=id
         })
         setData(del)
    }
    const editData=(index)=>{
        let edit = data.find((v,id)=>{
            return index=id
        })
        setName(edit.name)
        setAge(edit.age)
        setId(index)
        
    }
        
  return (
    <>
    <form action="" method='post' onSubmit={saveData}>
        <label htmlFor="">Name:</label><input type="text" name="Name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/> <br />
        <label htmlFor="">Age:</label><input type="number" name="Age" id="age" value={age} onChange={(e)=>setAge(e.target.value)} /> <br />
        <input type="submit" name="" id="" />
    </form>
    <br /><br />
    <table>
    <thead>
        <tr>
            <th>No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
        </tr>
     </thead>
     <tbody>
     {
            data.map((value,index)=>{
             return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{value.name}</td>
                    <td>{value.age}</td>
                    <td>
                        <button onClick={()=>deletData(index)}>Delet</button>
                        <button onClick={()=>editData(index)}>Edit</button>
                    </td>
                </tr>
             )
            })
        }
     </tbody>


    </table>

    </>
  )
}

export default Card