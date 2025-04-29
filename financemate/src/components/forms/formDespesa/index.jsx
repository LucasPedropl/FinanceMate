import styled from 'styled-components';

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

const Despesa = ({onClose}) => {
	return (
		<Container>
			<span>
				<Fechar className="bi bi-x" onClick={onClose} />
			</span>
			<div>
				<Titulo>CADASTRO DE DESPESA</Titulo>
				<Form action="">
					<Label htmlFor="Nome">Descrição</Label>
					<Input type="text" name="Nome" placeholder="Descrição da Despesa" required />
					<Label htmlFor="valor">Valor</Label>
					<Input type="number" name="valor" placeholder="Valor" required />
					<Label htmlFor="data">Data</Label>
					<Input type="date" name="data" placeholder="Valor" required />
					<Label htmlFor="tipo">Tipo</Label>
					<Select name="tipo">
						<option value="SemCategoria">Crédito</option>
						<option value="Alimentação">Débito</option>
						<option value="Alimentação">Pix</option>
						<option value="Alimentação">Pix Crédito</option>
					</Select>
					<Label htmlFor="categorias">Categoria</Label>
					<Select name="categorias">
						<option value="SemCategoria">Sem Categoria</option>
						<option value="Alimentação">Teste</option>
						<option value="Alimentação">Teste2</option>
						<option value="Alimentação">Teste3</option>
					</Select>
					<Btn type="submit">
						Cadastrar
					</Btn>
				</Form>
			</div>
		</Container>
	);
};

export default Despesa;
