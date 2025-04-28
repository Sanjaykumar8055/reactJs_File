import React from 'react'

class Class extends React.Component{
     render(){
        return(
            <>
            <h1>My name is {this.props.data.name}</h1>
            <h1>My age is {this.props.data.age}</h1>
            </>
        )
     }
}

export default Class