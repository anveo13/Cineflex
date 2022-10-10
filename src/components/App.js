import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilmPage from "./FilmPage";
import Header from "./Header";
import SeatPage from "./SeatPage";
import SessionPage from "./SessionPage";
import SucessPage from "./SucessPage";

export default function App() {
    return (
        <>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FilmPage/>}/>
                <Route path="/sessoes/:idFilme" element={<SessionPage/>}/>
                <Route path="/assentos/:idSessao" element={<SeatPage/>}/>
                {/* <Route path="/finish" element={<SucessPage/>}/>  */}
            </Routes>
        </BrowserRouter>
        </>
    )
}
