import React from 'react';
import {ThemeContext, UsersContext} from './context'
import {UserContext} from "./App";
import {useFormik} from "formik";
import Card from './context';
import {validateEmail} from "./context";

function Login(){
    let [status, setStatus] = React.useState(false);
    const {user, setUser} = React.useContext(UserContext);
    const users = React.useContext(UsersContext).users;
    let theme = React.useContext(ThemeContext);

    const Formik = useFormik({
        // Form values definition
        initialValues: {
            email: '',
            password: '',
            showPassword: false,
        },
        // On Submit actions
        onSubmit: () => {
            if (Object.keys(Formik.errors).length === 0) {
                console.log(users)
                //Check from user context a user with same email and password
                const foundUser = (users.filter((user) => {return user.email === Formik.values.email})[0]);
                console.log(foundUser)
                if (foundUser) {
                    alert(`Welcome ${foundUser.name}`);
                    setStatus(true);
                    setUser({
                        name: foundUser.name,
                        email: foundUser.email,
                        balance: foundUser.balance
                    })
                    Formik.resetForm();
                }
                console.log(user);
            }
        },
        // Form values validation definition
        validate: values => {
            let errors = {};
            let foundUser = users.filter((user) => {return user.email === Formik.values.email})
            if (!values.email) {
                errors.email = 'Field required'
            } else if (!validateEmail(values.email)) {
                errors.email = 'Username should be an email'
            }
            if (!values.password) {
                errors.password = 'Required'
            }
            if (foundUser[0] === undefined || null){
                errors.email = 'Username not valid'
            } else if (foundUser[0].password !== values.password){
                errors.password = 'Wrong password'
            }
            return errors;
        }
    })
    return (
        <Card
            txtcolor={theme.txtcolor}
            bgcolor={theme.bgcolor}
            header="LOGIN"
            status={status}
            body={(
                <form onSubmit={Formik.handleSubmit}>
                    <div>EMAIL</div>
                    <input name="email" type="text" onChange={Formik.handleChange} value={Formik.values.email}/>
                    <div style={{color: 'red'}}>{Formik.errors.email}</div>
                    <div>PASSWORD</div>
                    <input name="password" type={Formik.values.showPassword ? 'text' : 'password'}
                           onChange={Formik.handleChange} value={Formik.values.password}/>
                    <input name="showPassword" type="checkbox" onChange={Formik.handleChange}/>
                    <div style={{color: 'red'}}>{Formik.errors.password}</div>
                    <button type="submit">LOGIN</button>
                </form>)}
        />
    )
}

export default Login;