import React from 'react';
import {UsersContext, ThemeContext} from './context';
import {useFormik} from "formik";
import Card from './context';
import {validateEmail} from "./context";

function CreateAccount() {
    let [status, setStatus] = React.useState(false);
    let ctx = React.useContext(UsersContext);
    let theme = React.useContext(ThemeContext);

    const Formik = useFormik({
        // Form values definition
        initialValues: {
            name: '',
            email: '',
            password: '',
            showPassword: false,
        },
        // On Submit actions
        onSubmit: () => {
            if (Object.keys(Formik.errors).length === 0) {
                ctx.users.push({
                    name: Formik.values.name,
                    email: Formik.values.email,
                    password: Formik.values.password,
                    balance: 0
                });
                setStatus(true);
                alert('Account created');
                Formik.resetForm();
            }
        },
        // Form values validation definition
        validate: values => {
            let errors = {};
            if (!values.email) {
                errors.email = 'Field required'
            } else {
                if (!validateEmail(values.email)) {
                    errors.email = 'Username should be an email'
                }
            }
            if (!values.password) errors.password = 'Required';
            return errors;
        }
    })
    return (
        <Card
            txtcolor={theme.txtcolor}
            bgcolor={theme.bgcolor}
            header="CREATE ACCOUNT"
            status={status}
            body={(
                <form onSubmit={Formik.handleSubmit}>
                    <div>NAME</div>
                    <input name="name" type="text" onChange={Formik.handleChange} value={Formik.values.name}/>
                    <div>EMAIL</div>
                    <input name="email" type="text" onChange={Formik.handleChange} value={Formik.values.email}/>
                    <div style={{color: 'red'}}>{Formik.errors.email}</div>
                    <div>PASSWORD</div>
                    <input name="password" type={Formik.values.showPassword ? 'text' : 'password'}
                           onChange={Formik.handleChange} value={Formik.values.password}/>
                    <input name="showPassword" type="checkbox" onChange={Formik.handleChange}/>
                    <div style={{color: 'red'}}>{Formik.errors.password}</div>
                    {
                        (status !== false) &&
                        <button type="submit">CREATE ANOTHER ACCOUNT</button>
                    }
                    {
                        (status === false) &&
                        <button type="submit">CREATE ACCOUNT</button>
                    }
                </form>)}
        />
    )
}

export default CreateAccount;