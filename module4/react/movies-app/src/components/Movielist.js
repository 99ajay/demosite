import { Component } from "react";
import { movies } from "../movieData"

class Movielist extends Component {
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
                        <div className="card movie-card">
                            <img src="https://th.bing.com/th/id/OIP.bgZRya9d6c9saeEppWC1AQHaEK?pid=ImgDet&rs=1" style={{ height: '40vh', width: '20vw' }} className="card-img-top movie-img" alt="..." />
                            <div>
                                <h5 className="card-title">{movieele.original_title}</h5>
                            </div>
                            <div>
                               <button type="button" class="btn btn-primary">Add to favorites</button>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}


export default Movielist;