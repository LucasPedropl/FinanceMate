import React from 'react';

const CardSaldo = ({ valor }) => {
    return (
        <>
            <h2>Saldo Atual</h2>
            <h1>{valor}</h1>
        </>
    );
};

export default CardSaldo;