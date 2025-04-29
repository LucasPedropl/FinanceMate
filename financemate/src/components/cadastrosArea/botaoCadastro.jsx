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
    i{
        margin-right: 10px;
    }

    &:hover {
        background-color: ${(props) =>
            props.$tipo === 'Receita'
                ? '#25df00'
                : props.$tipo === 'Despesa'
                ? '#ee2c2c'
                : props.$tipo === 'Categoria'
                ? '#f5c542'
                : props.$tipo === 'Banco'
                ? '#4287f5'
                : 'rgb(250, 250, 250)'};
        color: white;
    }
`;

const BotaoCadastro = ({ tipo, onClick }) => {
	// Define o ícone com base no tipo
	let icone;
	if (tipo === 'Receita') {
		icone = 'bi bi-plus-circle';
	} else if (tipo === 'Despesa') {
		icone = 'bi bi-dash-circle';
	} else if (tipo === 'Categoria') {
		icone = 'bi bi-flag';
	} else if (tipo === 'Banco') {
		icone = 'bi bi-bank';
	} else {
		icone = 'bi bi-bell';
	}

	return (
		<Botao $tipo={tipo} onClick={onClick}>
			<i className={icone}></i> {tipo}
		</Botao>
	);
};

export default BotaoCadastro;
