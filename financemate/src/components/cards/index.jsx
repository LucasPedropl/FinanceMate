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
		flex-direction: column;
		text-align: center;
		justify-content: center;
		align-items: center;
	}
	h1 {
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 50px;
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

const Container = styled.main`
	display: flex;
	flex-direction: column;
	height: 50%;
`

const Card = ({ tipo, titulo, valor }) => {
	if (!valor) {
		valor = 0.0;
	}
	if (tipo === 'Despesa') {
		valor = valor - valor - valor;
	}
	if (tipo === 'Saldo') {
		return (
			<Cartao>
				<Titulo>{titulo}</Titulo>
				<CardSaldo valor={valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} />
			</Cartao>
		);
	}

	if (tipo === 'Grafico') {
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
				<Container>
					<span>Menor {tipo}</span>
					<p>-</p>
					<span>Maior {tipo}</span>
					<p>-</p>
				</Container>
			</div>
		</Cartao>
	);
};

export default Card;
