import styled from 'styled-components';

const Menu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: 100%;
	ul {
		list-style: none;
		width: 100%;
		padding: 0;
		margin: 0;
	}
	li {
		width: 100%;
		padding: 10px 0;
		cursor: pointer;
		&:hover {
			background-color: #cecece;
		}
	}
`;

const FotoPerfil = styled.div`
	background-color: white;
	border-radius: 50%;
	width: 120px;
	height: 120px;
	margin-bottom: 10px;
`;

const Perfil = styled.div`
	height: 25vh;
	background-color: #7c7c7c;
	width: 100%;
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 5px;
`;

const TextoPerfil = styled.div`
	border: 1px solid red;
`;

const MenuLateral = ({ onClose }) => {
	return (
		<Menu>
			<Perfil>
				<FotoPerfil>
					<img />
				</FotoPerfil>
				<TextoPerfil>Bem Vindo</TextoPerfil>
			</Perfil>
			<ul>
				<li onClick={onClose}>Perfil</li>
				<li onClick={onClose}>Dashboard</li>
				<li onClick={onClose}>Despesas</li>
				<li onClick={onClose}>Receitas</li>
				<li onClick={onClose}>Cartões</li>
			</ul>
		</Menu>
	);
};

export default MenuLateral;
