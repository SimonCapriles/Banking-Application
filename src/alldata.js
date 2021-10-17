import React from 'react';
import Account from './account'
import {UsersContext} from './App'

function AllData(){
    const {users} = React.useContext(UsersContext);
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Password</th>
                </tr>
            </thead>
            { users.userList &&
            <tbody>
                {users.userList.map((account, i) => (
                    <Account key={i} index={i} account={account}/>
                ))}
            </tbody>
            }

        </table>
    )
}

export default AllData;