import styled from "styled-components";

import Card from "../cards";
import CadastroArea from "../cadastrosArea";
import Tabela from "../tabela";

const Container = styled.div`
    display: flex;
    width: 100%;
    margin: 20px;
    flex-direction: column;
    gap: 30px;
`
const Cards = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const TabelaCadastro = styled.div`
    display: flex;
    flex-direction: row;
`

const Principal = () => {
    return (
		<Container>
			<Cards>
				<Card titulo={'Receita do Mês'} />
				<Card titulo={'Despesa do Mês'} tipo={'despesa'} valor={'50'}/>
				<Card titulo={'Saldo'} tipo={'saldo'} />
				<Card titulo={'Receitas VS Despesas'} tipo={'grafico'} />
			</Cards>
            <TabelaCadastro>
                <CadastroArea/>
                <Tabela/>
            </TabelaCadastro>
		</Container>
    );
}

export default Principal;