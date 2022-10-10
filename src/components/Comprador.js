import { useState } from 'react';
import styled from 'styled-components';

export default function Comprador({ name, cpf, setName, setCpf }) {
    return (
        <Dados>
            <label>Nome do Comprador:</label>
            <input
                value={name}
                placeholder="Digite seu nome..."
                onChange={(e) => {
                    setName(e.target.value);
                }}
            ></input>
            <label>CPF do Comprador:</label>
            <input
                value={cpf}
                placeholder="Digite seu CPF..."
                onChange={(e) => {
                    setCpf(e.target.value);
                }}
            ></input>
        </Dados>
    );
}

const Dados = styled.div`
width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 41px;

    label {
    display: block;
    font-size: 18px;
    margin-bottom: 2px;
}

    input {
    text-align: center;
    font-size: 18px;
    width: 310px;
    height: 51px;
}

input::placeholder {
    font-style: italic;
    font-size: 18px;
}



`