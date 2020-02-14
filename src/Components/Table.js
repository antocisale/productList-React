import React from 'react';


const Table = ({lista, setEditModal,deleteItem}) =>{

    return(
        <table>
            <thead>
                <th>Id</th>
                <th>Type</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Actions</th>
            </thead>
            <tbody>
            {lista.map(prod=>{
                return <tr>
                    <td>
                        {prod.id}
                    </td>
                    <td>
                        {prod.type}
                    </td>
                    <td>
                        {prod.brand}
                    </td>
                    <td>
                        {prod.price}
                    </td>
                    <td>
                        <button onClick={()=>{setEditModal(prod.id)}}>Edit</button>
                        <button onClick={()=>{deleteItem(prod.id)}}>Delete</button>
                    </td>
                </tr>
                })}
            </tbody>
        </table>

    )

}

export default Table;
