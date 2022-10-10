import { Link } from 'react-router-dom';
import styled from 'styled-components';
export default function BotaoHome() {
    return (
        <Home>
            <Link to="/">
                <button>Voltar pra Home</button>
            </Link>
        </Home>
    )

}
const Home = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

button{
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    
}
link{
    text-decoration: none;
}
a{
    text-decoration: none;
}
`