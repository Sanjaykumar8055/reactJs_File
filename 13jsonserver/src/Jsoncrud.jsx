import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Jsoncrud = () => {
    const styles = {
        form: {
            maxWidth: "400px",
            margin: "20px auto",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        },
        input: {
            width: "95%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "4px",
        },
        button: {
            width: "50%",
            padding: "10px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
        },
        link: {
            display: "block",
            marginTop: "20px",
            textAlign: "center",
            textDecoration: "none",
            color: "#007bff",
        },
    };
    const navigate = useNavigate()
    const location = useLocation()
    const [data, setData] = useState({
        name: '',
        age: '',
        salary: ''
    })
    useEffect(() => {
        if (location.state?.id) {
            axios.get(`http://localhost:3000/user/${location.state.id}`).then((res) => {
                setData(res.data);
            });
        }
    }, [location.state]);
    const handelChange = (e) => {
        let Name = e.target.name
        let value = e.target.value
        setData({
            ...data,
            [Name]: value
        })
    }
    const saveInfo = (e) => {
        e.preventDefault()
        if (data.name == "" || data.age == "" || data.salary == "") {
            alert("Please fill in all fields.");
            return;
        }

        if (location.state?.id) {
            axios.put(`http://localhost:3000/user/${location.state.id}`, data)
                .then((res) => {
                    navigate('/showData')
                })
        } else {
            axios.post('http://localhost:3000/user', data)
            setData({
                name: '',
                age: '',
                salary: ''
            })
            navigate("/showdata");
        }
    }
    return (
        <>
            <form action="" onSubmit={saveInfo} style={styles.form}>
                <input type="text" name="name" id="" placeholder='Enter Name' onChange={handelChange} value={data.name} style={styles.input} />
                <input type="text" name="age" id="" placeholder='Enter Age' onChange={handelChange} value={data.age} style={styles.input} />
                <input type="text" name="salary" id="" placeholder='Enter salary' onChange={handelChange} value={data.salary} style={styles.input} />
                <input type="submit" name="" id="" value='save' style={styles.button} />
            </form>
            <Link to='/showdata' style={styles.link}>Show Data</Link>

        </>
    )
}

export default Jsoncrud