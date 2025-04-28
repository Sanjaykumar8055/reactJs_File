import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add, deletData} from './redux/Useraction'

const Crud = () => {
  const deta = useSelector((state) => state.data ||[])
  const dispatch = useDispatch()
  const [data, setData] = useState({
    name: '',
    age: ''
  })
  const [id , setId]=useState('')
  const handelChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }
  const saveData = (e) => {
    e.preventDefault()
      dispatch(Add(data))

      setData({
        name:'',
        age:''
      })
  }
  return (
    <>
      <form action="" onSubmit={saveData}>
        <input type="text" name="name" id="" placeholder='Enter name' value={data.name} onChange={handelChange} />
        <input type="text" name="age" id="" placeholder='Enter Age' value={data.age} onChange={handelChange} />
        <input type="submit" name="" id="" value='Save' />
      </form>
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
          {deta.map((i, v) => {
            return (
              <tr key={v}>
                <td>{v + 1}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>
                  <button onClick={()=> dispatch(deletData(v))}>Delete</button>
                  <button onClick={()=>editData(v)}>Edit</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Crud