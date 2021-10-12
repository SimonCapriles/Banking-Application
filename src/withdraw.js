import React from 'react';
import {useFormik} from "formik";
import Card from "./context";

function Withdraw(){
    const [status, setStatus] = React.useState(false);
    const [balance, setBalance] = React.useState(100);
    const [invalid, setInvalid] = React.useState(false)

    const Formik = useFormik({
        // Form values definition
        initialValues: {
            withdrawAmount: 0,
        },
        // On Submit actions
        onSubmit: () => {
            if (Object.keys(Formik.errors).length === 0) {
                if (Formik.values.withdrawAmount > balance){
                    setInvalid(true)
                    alert('Transaction Failed')
                } else{
                    setBalance(balance - Formik.values.withdrawAmount)
                    alert('Success')
                }
                setStatus(true);
                Formik.resetForm();
            }
        },
        // Form values validation definition
        validate: values => {
            let errors = {};
            if (!values.withdrawAmount) {
                errors.withdrawAmount = 'Field required'
            }
            if (typeof(values.withdrawAmount) !== 'number'){
                errors.withdrawAmount = 'Must be a number'
            }
            if (values.withdrawAmount < 0){
                errors.withdrawAmount = 'Must be positive'
            }
            return errors;
        }
    })
    return (
        <Card
            bgcolor="primary"
            header="WITHDRAW"
            status={status}
            body={(
                <form onSubmit={Formik.handleSubmit}>
                    <div>BALANCE {balance}</div>
                    <div>WITHDRAW AMOUNT</div>
                    <input name="withdrawAmount" type="number" onChange={Formik.handleChange}
                           value={Formik.values.withdrawAmount}/>
                    <div style={{color: 'red'}}>{Formik.errors.withdrawAmount}</div>
                    <button type="submit" disabled={invalid}>WITHDRAW</button>
                </form>)}
        />
    )
}

export default Withdraw;