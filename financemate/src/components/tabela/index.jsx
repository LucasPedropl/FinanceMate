import styled from 'styled-components';

const Table = styled.table`
	width: 100%;
	text-align: center;
	border-collapse: collapse;
	text-align: left;
	th {
		padding: 10px;
		border: 1px solid #ccc;
		background-color: #f5f5f5;
	}
`;

const AreaTabela = styled.div`
	background-color: rgb(250, 250, 250);
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	display: ${(props) => (props.valores ? 'none' : 'flex')};
	/// Para esconder a tabela quando não houver valores, Trocar none e flex de lugar
	margin-bottom: 30px;
	align-items: center;
	flex-direction: column;
	border: 1px solid rgb(214, 214, 214);
`;

const Titulo = styled.span`
	font-size: 30px;
	color: #7a7a7a;
	margin-bottom: 20px;
`;

const Tabela = ({ valores }) => {
	return (
		<AreaTabela valores={valores}>
			<Titulo>Movimentações Recentes</Titulo>
			<Table>
				<thead>
					<tr>
						<th>Tipo</th>
						<th>Valor</th>
						<th>Data</th>
						<th>Categoria</th>
						<th>Ação</th>
					</tr>
				</thead>
				<tbody></tbody>
			</Table>
		</AreaTabela>
	);
};

export default Tabela;
