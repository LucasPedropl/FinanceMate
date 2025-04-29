import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
	display: flex;
	flex-direction: column;
    color: #393939;
	h1 {
		height: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
	}
	i {
		font-size: 80px;
		height: 50%;

        display: flex;
	}
`;

const CardSaldo = ({ valor }) => {
	return (
		<Content>
			<h1>R$ {valor}</h1>

			<i className="bi bi-currency-exchange"></i>
		</Content>
	);
};

export default CardSaldo;
