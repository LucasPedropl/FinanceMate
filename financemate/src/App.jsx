import styled from 'styled-components';
import React, { useState } from 'react';

import Cabecalho from './components/cabecalho';
import MenuHamburguer from './components/menuHamburguer';
import Principal from './components/principal';
import Form from './components/forms';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	height: 100vh;
`;

const Separacao = styled.div`
	width: 100%;
`;

function App() {
	const [formAberto, setFormAberto] = useState(null); 

	const abrirForm = (tipo) => setFormAberto(tipo);

	const fecharForm = () => setFormAberto(null);
	return (
		<>
			<Cabecalho />
			<Container>
				<MenuHamburguer />
				<Separacao>
					<Principal onAbrirForm={abrirForm} />
				</Separacao>
				{formAberto && <Form tipo={formAberto} onClose={fecharForm} />}
			</Container>
		</>
	);
}

export default App;
