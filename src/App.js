import React from 'react';
import {Route, HashRouter} from "react-router-dom";
import {UsersContext, ThemeContext} from "./context";
import NavBar from "./navbar";
import CustomCard from './home';
import CreateAccount from './createaccount';
import Login from './login';
import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './alldata';
import './App.css';

export const UserContext = React.createContext({
    name: null,
    mail: null,
    balance: 0,
    setUser:() => {}
});

function App() {
    const [user, setUser] = React.useState(null)
    const userValue = {user, setUser}
    let theme = React.useContext(ThemeContext);

    return (
        <HashRouter>
            <ThemeContext.Provider value={theme}>
            <UserContext.Provider value={userValue}>
                <NavBar/>
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
