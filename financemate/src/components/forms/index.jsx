import styled from 'styled-components';
import Receita from './formReceita';
import Despesa from './formDespesa';
import Categoria from './formCategoria';
import Banco from './formBanco';

const BackGround = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	background-color: rgba(81, 81, 81, 0.5); 
	position: fixed;
	z-index: 0;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: auto;
	height: auto;
	position: fixed;
	margin-left: 200px;
	left: -100px;
	right: 20px;
	top: 90px;
	bottom: 20px;
`;

const Form = ({ tipo, onClose }) => {
	if (tipo === 'Receita') {
		return (
			<BackGround>
				<Container>
					<Receita onClose={onClose}/>
				</Container>
			</BackGround>
		);
	}
	if (tipo === 'Despesa') {
		return (
			<BackGround>
				<Container>
					<Despesa onClose={onClose} />
				</Container>
			</BackGround>
		);
	}
	if (tipo === 'Categoria') {
		return (
			<BackGround>
				<Container>
					<Categoria onClose={onClose} />
				</Container>
			</BackGround>
		);
	}
	if (tipo === 'Banco') {
		return (
			<BackGround>
				<Container>
					<Banco onClose={onClose} />
				</Container>
			</BackGround>
		);
	}
};

export default Form;
