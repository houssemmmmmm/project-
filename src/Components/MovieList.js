import React, { useState } from 'react'
import ModalInfo from './ModalInfo'
import MovieCard from './MovieCard'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function MovieList(props) {
    const [filter, setFilter] = useState(false);
    const [title, setTitle] = useState(false)
    const changeFilter = () => setFilter(!filter);
    const changeTitle = () => setTitle(!title);


    const filterByRate = () => {
        filter ? props.updatedList(props.movieList.sort((a, b) => b.rating - a.rating)) : props.updatedList(props.movieList.sort((a, b) => a.rating - b.rating));
    }
    const filterByTitle = () => {
        title ? props.updatedList(props.movieList.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))) : props.updatedList(props.movieList.sort((a, b) => (a.title > b.title) ? -1 : ((b.title > a.title) ? 1 : 0)))
    }

    return (
        <div style={{ padding: "2em" }}>
            <ModalInfo oldMovies={props.movieList} renderNewList={props.updatedList} />
            <div style={{ paddingBottom: "1.5em", display: "flex", gap: "1em" }}>
                <Button variant="warning" onClick={() => { changeFilter(); filterByRate(); }}>Sort By Rank</Button>
                <Button variant="warning" onClick={() => { changeTitle(); filterByTitle(); }}>Sort By Title</Button>
            </div>
            <div className='image-container d-flex justify-content-start m-3 '>
                {props.movieList.map(movie => {
                    return (
                        <MovieCard id={movie.id}
                            title={movie.title}
                            description={movie.description}
                            posterURL={movie.posterURL}
                            rating={movie.rating}
                        />
                    )
                })}
            </div >
        </div>
    )
}

export default MovieList
