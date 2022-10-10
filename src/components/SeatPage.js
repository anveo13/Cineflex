import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Rodape from "../styles/Rodape";
import Comprador from "./Comprador";
import Exemplo from "./Exemplo";
import Footer from "./Footer";
import Reserva from "./Reserva";

export default function SetPage(props) {

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const { idSessao } = useParams();
    const [date, setDate] = useState('');
    const [weekday, setWeekday] = useState('');
    const [time, setTime] = useState('');
    const [filmeSelecionado, setFilmeSelecionado] = useState({});
    const [seats, setSeats] = useState([]);
    const [selected, setSelected] = useState('');

    useEffect(() => {
        const promise = axios.get(
            `https://mock-api.bootcamp.respondeai.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
        );
        promise.then((response) => {
            setDate(response.data.day.date)
            setWeekday(response.data.day.weekday);
            setTime(response.data.name);
            setFilmeSelecionado(response.data.movie);
            setSeats(response.data.seats);
        });
    }, []);

    const rowsSeats = [[], [], [], [], []];
    let j = 0;
    for (let i = 0; i < 5; i++) {
        for (j; j < seats.length; j++) {
            rowsSeats[i].push(seats[j]);
            if ((j + 1) % 10 === 0 && j !== 0) {
                j++;
                break;
            }
        }
    }

    function selectAndDeselect(s) {
        if (s.class !== 'selected' || s.class === undefined) {
            s.class = 'selected';
            setSelected(Math.random());
        } else if (s.class === 'selected') {
            s.class = '';
            setSelected(Math.random());
        }
    }


    return (
        <>
            <h4>"Selecione o(s) assento(s)" </h4>
            {rowsSeats.map((row, i) => {
                return (
                    <ul className="seats" key={i}>
                        {row.map((s, j) => {
                            return (
                                <li
                                    className={`seat ${s.class} ${
                                        s.isAvailable ? '' : 'not-avaliable'
                                    }`}
                                    key={s.id}
                                    onClick={() => {
                                        if (!s.isAvailable) {
                                            alert(
                                                'Esse assento não está disponível'
                                            );
                                        } else {
                                            selectAndDeselect(s);
                                        }
                                    }}
                                >
                                    {i === 0 && j < 9 ? '0' + s.name : s.name}
                                </li>
                            );
                        })}
                    </ul>
                );
            })}

            <Exemplo />
            <Comprador name={name} cpf={cpf} setName={setName} setCpf={setCpf} />
            <Reserva fezReserva={props.fezReserva} name={name} title={filmeSelecionado.title} cpf={cpf} date={date} seats={rowsSeats} time={time} />
            <Footer filme={filmeSelecionado} date={weekday + ' - ' + time}/>
        </>
    )
}

const Assentos = styled.div`
p{
    display: flex;
    font-size: 24px;
    width: 100%;
    height: 84px;
    align-items: center;
    justify-content: center;
    color: #293845;
    margin-top: 67px;
    margin-bottom: 20px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.04em
}
ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
}

li {
    margin: 3px;
    font-size: 11px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 26px;
    background: #c3cfd9;
    border: 1px solid #808f9d;
}

`