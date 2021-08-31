import React from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MovieCard.css"
import { Link } from "react-router-dom";

function MovieCard(props) {
    return (

        <div>
            <Link to={`/${props.title}/${props.id}`} style={{ textDecoration: 'none', color: "black" }}>
                <Card className="card-container">

                    <Card.Img variant="top" src={props.posterURL} style={{ width: '100%', height: "25em" }} />

                    <Card.Body>
                        <Card.Title style={{ textTransform: "capitalize" }}>{props.title}</Card.Title>
                        <Card.Text>
                            {props.description}
                            <br></br>
                            <br></br>

                            <p style={{ fontSize: "1.2em", fontWeight: "700" }}>{props.rating}/10</p>

                        </Card.Text>
                    </Card.Body>

                </Card>
            </Link>
        </div>

    )
}

export default MovieCard
