import styled from 'styled-components';
import BotaoCadastro from './botaoCadastro';

const BtnCadastros = styled.div`
	background-color: rgb(250, 250, 250);
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	display: flex;
	margin-bottom: 30px;
	align-items: center;
	flex-direction: column;
	border: 1px solid rgb(214, 214, 214);
	div {
		display: flex;
		justify-content: space-around;
		gap: 30px;
		width: 100%;
	}
`;

const Titulo = styled.span`
	font-size: 30px;
	color: #7a7a7a;
	margin-bottom: 20px;
`;

const CadastroArea = ({ onAbrirForm }) => {
	return (
		<BtnCadastros>
			<Titulo>Acesso Rápido</Titulo>
			<div>
				<BotaoCadastro tipo="Receita" onClick={() => onAbrirForm('Receita')} />
				<BotaoCadastro tipo="Despesa" onClick={() => onAbrirForm('Despesa')} />
				<BotaoCadastro tipo="Categoria" onClick={() => onAbrirForm('Categoria')} />
				<BotaoCadastro tipo="Banco" onClick={() => onAbrirForm('Banco')} />
			</div>
		</BtnCadastros>
	);
};

export default CadastroArea;
