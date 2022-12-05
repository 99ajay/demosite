import { Component } from "react";

class Banner extends Component {
    render() {
        return (
            <div className="card banner-card">
                <img src="https://images.thedirect.com/media/article_full/avengers-kang-dynasty-robert-downey-jr-tony-stark-mcu-marvel-jeff-loveness.jpg" className="card-img-top banner-img" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title banner-title">Card title</h5>
                        <p className="card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
            </div>
        )
    }

}
export default Banner;