import styled from "styled-components";

export default function Exemplo() {
    return (
        <Bolinha>
            <ul >
                <Verde>
                    <li></li>
                    <p>Selecionado</p>
                </Verde>
                <Disponivel>
                    <li ></li>
                    <p>Disponivel</p>
                </Disponivel>
                <Amarelo>
                    <li></li>
                    <p>Indisponivel</p>
                </Amarelo>
            </ul>
        </Bolinha>
    );
}

const Disponivel = styled.div`
li{
 background: #C3CFD9;
}
`

const Verde = styled.div`
li{
 background: #8dd7cf;
}
`

const Amarelo = styled.div`
li{
    background: #fbe192;
}`

const Bolinha = styled.div`
p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
display: flex;
align-items: center;
letter-spacing: -0.013em;
color: #4E5A65;
}
 ul {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    
}
li{
    margin: 3px;
    font-size: 11px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 26px;
    height: 26px;
    border-radius: 26px;
    border: 1px solid #808f9d;
}
`
