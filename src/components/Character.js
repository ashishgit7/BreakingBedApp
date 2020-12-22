import React from 'react'
import { Link} from 'react-router-dom';

const Character = ({items}) => {
    return (
        <div className = "container-fluid">
           <table className="table">
                        <thead>
                            <tr>
                            <th scope="col" className="text-danger">Name</th>
                            <th scope="col" className="text-success">Occupation</th>
                            <th scope="col" className="text-info">DOB</th>
                            <th scope="col" className="text-warning">Status</th>
                            </tr>
                        </thead>
                {items.map((item)=>(
                    
                        <tbody key = {item.char_id}>
                            <tr>
                           <Link to={`/char/${item.char_id}`}> <th>{item.name}</th></Link>
                            <td>{item.occupation[0]}</td>
                            <td>{item.birthday}</td>
                            <td>{item.status}</td>
                            </tr>
                            
                        </tbody>
                    
                ))}
                </table>
        </div>
    )
}

export default Character
