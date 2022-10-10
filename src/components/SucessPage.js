
import styled from 'styled-components';
import BotaoHome from './BotaoHome';


export default function SucessPage({name, cpf, seats, date, title, time}) {
    return (
        <>
                <Fim>
                <h1>Pedido Feito com sucesso!</h1>
                
                    <h2>Filme e sessao</h2>
                    <p>{title}</p>
                    <p>{date + '-' + time}</p>
                
                    <h2>Ingressos</h2>
                    {seats.map((s) => {
                        return <p key={s.name}>Assento {s.name}</p>;
                    })}
                
                    <h2>Comprador</h2>
                    <p>Nome: {name}</p>
                    <p>CPF: {cpf}</p>
                </Fim>
                <BotaoHome/>
        </>
    )
}

const Fim = styled.div`
margin-left: 15px;

h1{
    font-size: 24px;
    width: 150px;
    margin: auto;
    height: 84px;
    text-align: center;
    color: #247a6b;
    margin-top: 50px;
    font-weight: bold;
}

h2 {
    font-size: 24px;
    font-weight: bold;
    color: #293845;
    margin-top: 10px;
    margin-bottom: 20px;
}
p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;

    color: #293845;
}
`