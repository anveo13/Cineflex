import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilmPage from "./FilmPage";
import Header from "./Header";
import SeatPage from "./SeatPage";
import SessionPage from "./SessionPage";
import SucessPage from "./SucessPage";

export default function App() {
    const [reserva, setReserva] = useState([]);

    function fezReserva(array) {
        setReserva(array);
    }

    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FilmPage />} />
                    <Route path="/sessoes/:idFilme" element={<SessionPage />} />
                    <Route path="/assentos/:idSessao" element={<SeatPage fezReserva={fezReserva} />} />
                    <Route path="/sucesso" element={<SucessPage  name={reserva[0]} cpf={reserva[1]} seats={reserva[2]} date={reserva[3]} title={reserva[4]} time={reserva[5]}/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
