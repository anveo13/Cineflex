import Filme from "../styles/Filme";
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";


export default function FilmPage() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        requisicao.then(res => {
            setImage(res.data);
        });


        requisicao.catch(err => {
            console.log(err.response.data);
        });
    }, []);

    if (image === null) {
        return "loading...";
    }
    console.log(image)
    return (
        <Filme>
            <p>Selecione o Filme</p>
            <ul>
               
                {image.map((img) => <li>
                    <Link to={`/sessoes/${img.id}`}>
                        <img src={img.posterURL} alt="filme" />
                    </Link>
                </li>)}
            </ul>

        </Filme>
    )
}