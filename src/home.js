import React from 'react';
import Card from './context';

function Home(){
    return (
        <Card
            txtcolor="black"
            bgcolor="white"
            header="BadBank Landing Module"
            title="Welcome to the bank"
            text="You can move around using the navigation bar."
            body={(<img src="./bank.png" className="img-fluid" alt="Bank Application"/>)}
        />
    )
}

export default Home;