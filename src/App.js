import React from 'react';
import {Route, HashRouter} from "react-router-dom";
import {ThemeContext} from "./context";
import NavBar from "./navbar";
import CustomCard from './home';
import CreateAccount from './createaccount';
import Login from './login';
import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './alldata';
import './App.css';

// Context step 3: Create Context with default values
export const UserContext = React.createContext({
    name: null,
    mail: null,
    balance: 0,
    theme: 'light',
    setUser:() => {}
});
export const UsersContext = React.createContext({
    userList: [],
    setUsers: () => {}
})

// Context step 1: Create Parent Component
function App() {
    // Context step 2:Using the useSate to track changes on the user
    const [user, setUser] = React.useState(null)
    const [users, setUsers] = React.useState({userList: []})
    // Context step 4.1: Creating contextValue variable to pass with the Context.Provider
    const userValue = {user, setUser}
    const usersValues = {users, setUsers}
    let theme = React.useContext(ThemeContext);

    return (
        <HashRouter>
            <ThemeContext.Provider value={theme}>
            {/* Context step 5: Passing the contextValue as mentioned to Consumer child components */}
            <UserContext.Provider value={userValue}>
                <NavBar/>
                <div className="container">
                    <Route path="/" exact component={CustomCard}/>
                    <UsersContext.Provider value={usersValues}>
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
