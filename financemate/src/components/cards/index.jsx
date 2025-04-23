import styled from 'styled-components';
import CardSaldo from './CardSaldo';
import CardGrafico from './CardGrafico';

const Cartao = styled.div`
	width: 24%;
	background: #fff;
	border-radius: 5px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	height: 40vh;
	border: 1px solid rgb(214, 214, 214);
	div {
		justify-content: space-between;
		display: flex;
		height: 100%;
		text-align: center;
		justify-content: center;
		align-items: center;
	}
`;

const Titulo = styled.p`
	background-color: rgb(230, 230, 230);
	font-size: 25px;
	border-bottom: 1px solid rgb(214, 214, 214);
	width: 100%;
	height: 15%;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
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
				<CardSaldo valor={valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} />
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
				<h1>R$ {valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h1>
			</div>
		</Cartao>
	);
};

export default Card;
