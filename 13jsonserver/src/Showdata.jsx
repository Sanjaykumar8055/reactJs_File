import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Showdata = () => {
    const styles = {
        table: {
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "20px",
        },
        th: {
            backgroundColor: "#fffff",
            border: "1px solid #ddd",
            padding: "10px",
        },
        td: {
            border: "1px solid #ddd",
            padding: "10px",
            textAlign: "center",
        },
        button: {
            padding: "5px 10px",
            backgroundColor: "#d9534f",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
        }
    };
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3000/user')
            .then((res) => {
                // console.log(res);
                setData(res.data)

            })
    }, [])

    const deleteData = (id) => {
        axios.delete(`http://localhost:3000/user/${id}`, data)
            .then(() => {
                setData(data.filter((i) => i.id !== id));
            })
            .catch((err) => {
                alert('NOt delted data', err)
            })
    }
    const editData = (id) => {
        navigate(`/`, { state: { id } });
    }
    return (
        <>
            <table border={2} cellPadding={10} style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>No</th>
                        <th style={styles.th}>Name</th>
                        <th style={styles.th}>Age</th>
                        <th style={styles.th}>Salary</th>
                        <th style={styles.th}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((i, v) => {
                            return (
                                <tr key={i.id}>
                                    <td style={styles.td}>{v + 1}</td>
                                    <td style={styles.td}>{i.name}</td>
                                    <td style={styles.td}>{i.age}</td>
                                    <td style={styles.td}>{i.salary}</td>
                                    <td style={styles.td}>
                                        <button style={styles.button} onClick={() => deleteData(i.id)}> Delete</button> {' '}
                                        <button style={{ backgroundColor: 'green' }} onClick={() => editData(i.id)}> Edit</button>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to='/'>Add</Link>
        </>
    )
}

export default Showdata