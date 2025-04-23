import styled from 'styled-components';

import Cabecalho from './components/cabecalho';
import MenuHamburguer from './components/menuHamburguer';
import Principal from './components/principal';

const Container = styled.div`
    display: flex;
    flex-direction: row;

    height: 100vh;
`

const Separacao = styled.div`
	margin-top: 80px;
	width: 100%;

    margin-left: 80px;
`;

function App() {
	return (
		<>
			<Cabecalho />
			<Container>
				<MenuHamburguer />
				<Separacao>
					<Principal />
				</Separacao>
			</Container>
		</>
	);
}

export default App;
