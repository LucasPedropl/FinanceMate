import styled from 'styled-components';

const BarraLateral = styled.div`
	background-color: #333;
	width: 80px;
	color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: flex-start;
	position: fixed;
	height: 100%;
	border: 0px;
	margin-top: 70px;
`;

const BotaoMenu = styled.button`
	background-color: transparent;
	border: 0px;
	color: white;
	cursor: pointer;
	margin-top: 10px;
	font-size: 25px;
	&:hover {
		color: #979797;
	}
`;

const MenuHamburguer = () => {
	return (
		<BarraLateral>
			<BotaoMenu>☰</BotaoMenu>
		</BarraLateral>
	);
};

export default MenuHamburguer;
