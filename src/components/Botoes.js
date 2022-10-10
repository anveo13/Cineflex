import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Botoes({ time }) {
    return (
        <Butao>
            {time.map((showtime) => {
                return (
                    <Link key={showtime.id} to={`/assentos/${showtime.id}`}>
                        <button key={showtime.id}>
                            {showtime.name}{' '}
                        </button>
                    </Link>
                );
            })}
        </Butao>
    );
}

const Butao = styled.div`
    & button{
    margin-right: 10px;
    width: 82px;
    height: 43px;
    color: white;
    background: #e8833a;
    font-size: 18px;
    border: none;
    margin-bottom: 117px;
    
    }`;