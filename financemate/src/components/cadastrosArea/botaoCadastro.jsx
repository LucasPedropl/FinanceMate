import styled from 'styled-components';

const Botao = styled.button`
	width: 15%;
	height: 60px;
	font-size: 30px;
	background-color: rgb(250, 250, 250);
	transition: all 0.3s ease;
	border: 1px solid rgb(61, 61, 61);
	color: rgb(61, 61, 61);
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	/* Hover com base no tipo */
	&:hover {
		background-color: ${(props) => (props.$tipo === 'Receita' ? '#25df00' : props.$tipo === 'Despesa' ? '#ee2c2c' : props.$tipo === 'Categoria' ? '#f5c542' : props.$tipo === 'Banco' ? '#4287f5' : 'rgb(250, 250, 250)')};
		color: white;
	}
`;

const BotaoCadastro = ({ tipo }) => {
	return <Botao $tipo={tipo}>{tipo}</Botao>;
};

export default BotaoCadastro;
