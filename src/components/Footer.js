import Rodape from "../styles/Rodape"

export default function Footer({ filme, date }) {
    return (
        <>
            <Rodape>
                <img src={filme.posterURL} />
                <p>{filme.title}</p>
                <p>{date}</p>
            </Rodape>
        </>
    );
}