import React from 'react'

const Localstor = () => {
  return (
    <>
     <form action="" method='post'>
        <input type="text" name="name" id="" placeholder='Enter Name'/> <br /><br />
        <input type="text" name="age" id="" placeholder='Enter Age'/><br /><br />
        <input type="text" name="city" id="" placeholder='Enter city'/><br /><br />
        <input type="text" name="language" id="" placeholder='Language'/><br /><br />
        <input type="text" name="salary" id="" placeholder='Salary'/> <br /><br />
        <input type="submit" />
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
            
    
              
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>Delet</button>
                                <button>Edit</button>
                            </td>
                        </tr>
                
        </tbody>
    </table>
    </>
  )
}

export default Localstor