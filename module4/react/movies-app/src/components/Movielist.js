import { Component } from "react";
import { movies } from "../movieData"

class Movielist extends Component {
    constructor() {
        super();
        this.state = {
            hover: "",
            pArr: [1]
        };
    }
    render() {
        let moviesarr = movies.results;
        return (
            <>
                <div>
                    <h3 style={{ textAlign: "center" }}>

                        <small className="text-muted" ><strong>Trending</strong></small>
                    </h3>
                </div>
                <div className="movies-list">
                    {moviesarr.map((movieele) => (
                        <div className="card movie-card" onMouseEnter={() => this.setState({ hover: movieele.id })} onMouseLeave={() => this.setState({ hover: "" })} >                            <img src={`https://image.tmdb.org/t/p/original${movieele.backdrop_path}`} style={{ height: '40vh', width: '20vw' }} className="card-img-top movie-img" alt="..." />
                            <div>
                                <h5 className="card-title">{movieele.original_title}</h5>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                {this.state.hover == movieele.id && (
                                    <a href="#" type="button" className="btn btn-primary movies-button">Add to Favourites</a>)}                            </div>
                        </div>
                    ))}


                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            {this.state.pArr.map(() => <li className="page-item"><a className="page-link" href="#">1</a></li>)}


                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}


export default Movielist;