import React, { useContext } from 'react'
import Appcontext from './react-context'

const Loging = () => {
    const { dark, SetDark } = useContext(Appcontext)
    return (
        <>
            <div style={{
                backgroundColor: (!dark) ? "white" : "black",
                color: (!dark) ? "black" : "white"
            }}>
                <form action="">
                    <h2>Login</h2>
                    <input type="email" placeholder="Email" />
                    <br /><br />
                    <input type="password" placeholder="Password" />
                    <br /><br />
                    <button type="submit">Log In</button>
                </form>
            </div >
            <button onClick={() => SetDark(!dark)}>change bg color</button>

        </>
    )
}

export default Loging