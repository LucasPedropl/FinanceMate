import styled from 'styled-components';

import Cabecalho from './components/cabecalho';
import MenuHamburguer from './components/menuHamburguer';
import Principal from './components/principal';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

`

function App() {
	return (
		<>
			<Cabecalho />
			<Container>
                <MenuHamburguer/>
                <Principal/>
            </Container>
		</>
	);
}

export default App;
