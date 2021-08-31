import React from 'react'
import YoutubeEmbed from "./YoutubeEmbed"
import { useParams, useHistory } from 'react-router'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TrailerCard.css"

function TrailerCard(props) {
    const { id } = useParams();
    console.log(id)
    const history = useHistory();
    const handleHistory = () => history.push('/');
    const chosenMovie = props.allMovies.find(el => el.id === id);
    console.log(chosenMovie);

    return (
        <div className="detail-cont">
            <Button variant="dark" onClick={() => handleHistory()}>Go back home</Button>
            <div style={{ width: "50%", textAlign: "center" }}>
                <h2>{chosenMovie.title}</h2>
                <p><span style={{ fontWeight: "700", fontSize: "1.5em" }}> Synopsis :</span> <br /> {chosenMovie.description}</p>
            </div>
            <YoutubeEmbed embedId={chosenMovie.embedId} />
        </div>
    )
}

export default TrailerCard
