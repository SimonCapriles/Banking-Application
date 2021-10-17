import {Link} from "react-router-dom";
import React from "react";
import {UserContext} from "./App";

// Context step 5: Consume Context
function NavBar() {
    const {user} = React.useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand m-2" data-toggle="tooltip" data-placement="bottom" title="Go to the home page" to="/">BadBank</Link>
            { !user &&
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" data-toggle="tooltip" data-placement="bottom" title="If you don't have and account, create it!" to="/CreateAccount/">Create Account</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Have an account? Just login" to="/login/">Login</Link>
                    </li>
                </ul>
            </div>
            }
            { user &&
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" data-toggle="tooltip" data-placement="bottom" title="If you don't have and account, create it!" to="/CreateAccount/">Create Account</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Have an account? Just login" to="/login/">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Excess money? Put it in!" to="/deposit/">Deposit</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Need money? Take only what you need" to="/withdraw/">Withdraw</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Shh...! don't tell anyone" to="/alldata/">AllData</Link>
                    </li>
                </ul>
            </div>
            }
            { user &&
            <div className="text-light m-2">
                Username: {user.name}<br/>
                Balance: {user.balance}
                <div className="form-check form-switch">
                    <div className="text-light">Dark <input className="form-check-input dark" type="checkbox" role="switch" id="themeSwitch">{user.theme}</input></div>
                </div>
            </div>
            }
        </nav>

    );
}

export default NavBar;