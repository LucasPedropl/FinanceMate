import styled from 'styled-components';
import BotaoCadastro from './botaoCadastro';

const BtnCadastros = styled.div`
	width: 100%;
	background-color: rgb(250, 250, 250);
	border-radius: 20px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: row;
	width: 100%;
	height: 200px;
	border: 1px solid rgb(214, 214, 214);
	gap: 30px;
	height: 25vh;
`;

const CadastroArea = () => {
	return (
		<BtnCadastros>
			<BotaoCadastro tipo="Receita" />
			<BotaoCadastro tipo="Despesa" />
			<BotaoCadastro tipo="Categoria" />
			<BotaoCadastro tipo="Banco" />
		</BtnCadastros>
	);
};

export default CadastroArea;
