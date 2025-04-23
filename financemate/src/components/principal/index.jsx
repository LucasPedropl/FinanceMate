import styled from "styled-components";

const Container = styled.div`
    display: flex;
`

const Principal = () => {
    return(
        <div className="principal">
            <h1>Principal</h1>
            <p>Bem-vindo ao sistema de controle financeiro!</p>
            <p>Aqui você pode gerenciar suas finanças de forma simples e eficiente.</p>
        </div>
    )
}

export default Principal;