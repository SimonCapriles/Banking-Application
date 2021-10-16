import React from 'react';
import Account from './account'
import {UsersContext} from './context'

function AllData(){
    const accounts = React.useContext(UsersContext).users;
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {accounts.map((account, i) => (
                    <Account key={i} index={i} account={account}/>
                ))}
            </tbody>
        </table>
    )
}

export default AllData;