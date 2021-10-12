import React from 'react';
import {Route, HashRouter} from "react-router-dom";
import NavBar from "./navbar";
import Home from './home';
import CreateAccount from './createaccount';
import Login from './login';
import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './alldata';
import './App.css';

const UserContext = React.createContext(undefined);
const UsersContext = React.createContext(null);

function App() {
    return (
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value={null}>
                <div className="container">
                    <Route path="/" exact component={Home}/>
                    <UsersContext.Provider
                        value={{users: [{name: 'abel', email: 'abel@mit.edu', password: 'secret', balance: 100}]}}>
                        <Route path="/CreateAccount/" component={CreateAccount}/>
                        <Route path="/login/" component={Login}/>
                        <Route path="/alldata/" component={AllData}/>
                    </UsersContext.Provider>
                    <Route path="/deposit/" component={Deposit}/>
                    <Route path="/withdraw/" component={Withdraw}/>
                </div>
            </UserContext.Provider>
        </HashRouter>
    );
}

export default App;
export {UserContext, UsersContext};
