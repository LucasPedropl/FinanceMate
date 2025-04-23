import styled from 'styled-components';
import CardSaldo from './CardSaldo';
import CardGrafico from './CardGrafico';

const Cartao = styled.div`
	width: 300px;
	background: #fff;
	border-radius: 20px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	height: 300px;
	border: 1px solid rgb(214, 214, 214);
`;

const Titulo = styled.div`
	background-color: rgb(230, 230, 230);
	font-size: 25px;
	border-bottom: 1px solid rgb(214, 214, 214);
	width: 100%;
	height: 15%;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	text-align: center;
	justify-content: center;
	display: flex;
	align-items: center;
	color: #7a7a7a;
`;

const Card = ({ tipo, titulo, valor }) => {
	if (!valor) {
		valor = 0.0;
	}
	if (tipo === 'despesa') {
		valor = valor - valor - valor;
	}
	if (tipo === 'saldo') {
		return (
			<Cartao>
				<Titulo>{titulo}</Titulo>
				<CardSaldo valor={valor} />
			</Cartao>
		);
	}

	if (tipo === 'grafico') {
		return (
			<Cartao>
				<Titulo>{titulo}</Titulo>
				<CardGrafico />
			</Cartao>
		);
	}
	return (
		<Cartao>
			<Titulo>{titulo}</Titulo>
			<div>
				<h1>R$ {valor}</h1>
			</div>
		</Cartao>
	);
};

export default Card;
