import { styled } from 'styled-components';

const Header = styled.header`
	background-color: #333a40;
	color: white;
	display: flex;
	align-items: center;
	padding: 10px 0px;
    justify-content: space-between;
	position: fixed;
	width: 100%;
	height: 50px;
	z-index: 1;
`;

const AreaLogo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	padding: 0px;
	h1 {
		font-size: 24px;
        margin-left: -8px;
	}
`;

const Container = styled.div`
	margin: 0px;
	width: 80px;
	display: flex;
	justify-content: center;
`;

const Logo = styled.img`
	width: 50px;

`;

const Cabecalho = () => {
	return (
		<Header>
			<AreaLogo>
				<Container>
					<Logo src="/img/logo.png" alt="" />
				</Container>
				<h1>FinanceMate</h1>
			</AreaLogo>
			<Container>
                Sair
            </Container>
		</Header>
	);
};

export default Cabecalho;
