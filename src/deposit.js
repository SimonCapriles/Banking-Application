import React from 'react';
import {useFormik} from "formik";
import Card from './context';

function Deposit() {
    let [status, setStatus] = React.useState(false);
    let [balance, setBalance] = React.useState(100)

    const Formik = useFormik({
        // Form values definition
        initialValues: {
            depositAmount: 0,
        },
        // On Submit actions
        onSubmit: () => {
            if (Object.keys(Formik.errors).length === 0) {
                alert('Sucess')
                setBalance(balance + Formik.values.depositAmount)
                setStatus(true);
                Formik.resetForm();
            }
        },
        // Form values validation definition
        validate: values => {
            let errors = {};
            if (!values.depositAmount) {
                errors.depositAmount = 'Field required'
            }
            if (typeof(values.depositAmount) !== 'number'){
                errors.depositAmount = 'Must be a number'
            }
            if (values.depositAmount < 0){
                errors.depositAmount = 'Must be positive'
            }
            return errors;
        }
    })
    return (
        <Card
            bgcolor="primary"
            header="DEPOSIT"
            status={status}
            body={(
                <form onSubmit={Formik.handleSubmit}>
                    <div>BALANCE {balance}</div>
                    <div>DEPOSIT AMOUNT</div>
                    <input name="depositAmount" type="number" onChange={Formik.handleChange}
                           value={Formik.values.depositAmount}/>
                    <div style={{color: 'red'}}>{Formik.errors.depositAmount}</div>
                    <button type="submit">DEPOSIT</button>
                </form>)}
        />
    )
}

export default Deposit;