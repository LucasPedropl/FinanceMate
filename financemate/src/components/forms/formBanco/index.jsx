import styled from 'styled-components';
import React, { useState } from 'react';

const Container = styled.div`
	color: #ffffff;
	flex-direction: column;
	border-top-left-radius: 20px;
	border-bottom-right-radius: 20px;
	width: auto;
	height: auto;
	background-color: #333;
	div {
		margin: 1px 20px 20px 20px;
	}
	span {
		display: flex;
		justify-content: end;
		padding-right: 5px;
		padding-top: 5px;
	}
	justify-content: end;
`;

const Fechar = styled.i`
	color: #ffffff;
	border: 0px;
	cursor: pointer;
`;

const Titulo = styled.h2`
	margin-bottom: 20px;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
    div{
        margin: 0px;
        margin-top: -30px;
        display: flex;
        flex-direction: column;
        label{
            margin-top: 15px;
        }
    }
`;

const Label = styled.label`
	margin-bottom: -15px;
`;

const Input = styled.input`
	margin-bottom: -5px;
	border-radius: 5px;
	border: 0px;
	padding: 5px;
`;

const Select = styled.select`
	border-radius: 5px;
	border: 0px;
	padding: 5px;
    width: 100%;
`;

const Btn = styled.button`
	background-color: #002ac1;
	border-radius: 10px;
	color: white;
	border: 0px;
	padding: 10px;
	margin-top: 20px;
	width: 100%;
`;

const Banco = ({onClose}) => {
	const [possuiCartao, setPossuiCartao] = useState(false); // Estado para controlar a visibilidade da div

	const handleSelectChange = (event) => {
		setPossuiCartao(event.target.value === 'Sim'); // Atualiza o estado com base no valor selecionado
	};

	return (
		<Container>
			<span>
				<Fechar className="bi bi-x" onClick={onClose} />
			</span>
			<div>
				<Titulo>CADASTRO DE BANCOS</Titulo>
				<Form action="">
					<Label htmlFor="Nome">Nome</Label>
					<Input type="text" name="Nome" placeholder="Nome do Banco" required />
					<Label htmlFor="Tipo">Possui cartão de crédito</Label>
					<Select name="cartao" id="" onChange={handleSelectChange}>
						<option value="nao">Não</option>
						<option value="Sim">Sim</option>
					</Select>
					{/* Exibe a div apenas se possuiCartao for true */}
					{possuiCartao && (
						<div>
							<label htmlFor="Limite">Limite Total</label>
							<Input type="number" name="Limite" placeholder="Limite total do cartão" />
							<label htmlFor="Fatura">Fatura Atual</label>
							<Input type="number" name="Fatura" placeholder="Fatura atual do cartão" />
							<label htmlFor="Vencimento">Data de vencimento da fatura</label>
							<Input type="date" name="Vencimento"></Input>
						</div>
					)}
					<Label htmlFor="Tipo">Cor para o Banco</Label>
					<Input type="color" name="Cor" id="Cor" />
					<Btn type="submit">Cadastrar</Btn>
				</Form>
			</div>
		</Container>
	);
};

export default Banco;
