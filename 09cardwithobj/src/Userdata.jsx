import React, { useState } from 'react'

const Userdata = () => {

    const [data, setData] = useState({
        id: '',
        name: '',
        age: '',
        city: '',
        language: '',
        salary: ''
    })
    const handalChange = (e) => {
        let nem = e.target.name
        let val = e.target.value
        setData({
            ...data,
            [nem]: val
        })
    }
    const [alldata, setAlldata] = useState([])

    const saveData = (i) => {
        i.preventDefault()
        if (data.id != "") {
            let updat = alldata.map((i) => {
                if (data.id == i.id) {
                    return { ...i, ...data }
                }
                return i
            })
            setAlldata(updat)
        } else {
            data.id = (alldata.length > 0) ? alldata.length + 1 : 1;
            setAlldata([
                ...alldata,
                data
            ])
        }

        setData({
            id: '',
            name: '',
            age: '',
            city: '',
            language: '',
            salary: '',
        });
    }
    const delet = (id) => {
        let deletData = alldata.filter((i) => {
            return id != i.id;
        })
        setAlldata(deletData)
    }
    const edit = (id) => {
        let editData = alldata.find((i) => {
            return id == i.id
        })
        setData(editData)
    }
    return (
        <>
            <form action="" method='post' onSubmit={saveData}>
                <input type="text" name="name" id="" placeholder='Enter Name' value={data.name} onChange={handalChange} /> <br /><br />
                <input type="text" name="age" id="" placeholder='Enter Age' value={data.age} onChange={handalChange} /><br /><br />
                <input type="text" name="city" id="" placeholder='Enter city' value={data.city} onChange={handalChange} /><br /><br />
                <input type="text" name="language" id="" placeholder='Language' value={data.language} onChange={handalChange} /><br /><br />
                <input type="text" name="salary" id="" placeholder='Salary' value={data.salary} onChange={handalChange} /> <br /><br />
                <input type="submit" value='save' />
            </form>
            <table border={2} cellPadding={5}>
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>City</td>
                        <td>Languega</td>
                        <td>Salary</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        alldata.map((i) => {
                            return (
                                <tr key={i.id}>
                                    <td>{i.id}</td>
                                    <td>{i.name}</td>
                                    <td>{i.age}</td>
                                    <td>{i.city}</td>
                                    <td>{i.language}</td>
                                    <td>{i.salary}</td>
                                    <td>
                                        <button onClick={() => delet(i.id)}>Delet</button>
                                        <button onClick={() => edit(i.id)}>Edit</button>
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

export default Userdata