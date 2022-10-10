import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Botoes from "./Botoes";
import Footer from "./Footer";

export default function SessionPage() {
  const [filmeSelecionado, setFilmeSelecionado] = useState({});
  const { idFilme } = useParams()
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

    promise.then((res) => {
      setHorarios(res.data.days)
      setFilmeSelecionado(res.data);
    })

    promise.catch((err) => {
      console.log(err.response.data)
    })
  }, [])


  return (
    <>
      <Texto>
        <p>Selecione o Horario</p>
      </Texto>
      {horarios.map((i) => {
        return (
          <Dia key={i.id}>
            {i.weekday} - {i.date}
            <Botoes time={i.showtimes} />
          </Dia>
        );
      })}
      <Footer filme={filmeSelecionado}/>
      
    </>
  )
}


const Texto = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    

    & p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #293845; 
    }
    
    `;

const Dia = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin-left: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
   
    letter-spacing: 0.02em;

    color: #293845;
        

`;