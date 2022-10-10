import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

export default function Reserva({
    name,
    cpf,
    seats,
    date,
    time,
    title,
    fezReserva,
}) {
    const seatsSelecionados = [];
    seats.forEach((row) => {
        row.forEach((seat) => {
            if (seat.class === 'selected') {
                seatsSelecionados.push(seat);
            }
        });
    });

    const seatsId = [];
    seatsSelecionados.forEach((seats) => {
        seatsId.push(seats.id);
    });

    const seatsReserva = {
        ids: seatsId,
        name: name,
        cpf: cpf,
    };

    function reserva() {
        fezReserva([name, cpf, seatsSelecionados, date, title, time]);
        axios.post(
            'https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many',
            seatsReserva
        );
    }

    return (
        <ReservarAssento>
            <Link to="/sucesso">
                <button
                    onClick={() => {
                        reserva();
                    }}
                >
                    Reservar assento(s)
                </button>
            </Link>
        </ReservarAssento>
    );
}
const ReservarAssento = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 117px;
margin-bottom: 117px;


button {
width: 225px;
height: 42px;
color: white;
background: #e8833a;
font-size: 18px;
text-align: center;
border: none;
}`