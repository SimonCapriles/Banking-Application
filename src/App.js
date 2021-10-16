import React from 'react';
import {Route, HashRouter} from "react-router-dom";
import {UserContext, UsersContext, ThemeContext} from "./context";
import NavBar from "./navbar";
import CustomCard from './home';
import CreateAccount from './createaccount';
import Login from './login';
import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './alldata';
import './App.css';


function App() {
    return (
        <HashRouter>
            <NavBar/>
            <ThemeContext.Provider value={{txtcolor: 'black', background: 'white'}}>
            <UserContext.Provider value={null}>
                <div className="container">
                    <Route path="/" exact component={CustomCard}/>
                    <UsersContext.Provider
                        value={{users: []}}>
                        <Route path="/CreateAccount/" component={CreateAccount}/>
                        <Route path="/login/" component={Login}/>
                        <Route path="/alldata/" component={AllData}/>
                    </UsersContext.Provider>
                    <Route path="/deposit/" component={Deposit}/>
                    <Route path="/withdraw/" component={Withdraw}/>
                </div>
            </UserContext.Provider>
            </ThemeContext.Provider>
        </HashRouter>
    );
}

export default App;
