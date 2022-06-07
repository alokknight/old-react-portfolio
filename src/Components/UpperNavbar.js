import React from 'react';
// import PropTypes from 'prop-types';

export default class UpperpNavbar extends React.Component {
    constructor() {
        super();
        this.state = {
        show: true,
        scrollPos: 0
        };
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll = () => {
        // console.log(document.body.getBoundingClientRect());
        this.setState({
        scrollPos: document.body.getBoundingClientRect().top,
        show: document.body.getBoundingClientRect().top > this.state.scrollPos
        });
    };
render() {
    console.log(this.state);
    return <nav className={this.state.show ? "active" : "hidden"}>

        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid nav">
                    <a href="https://www.alokknight.com" class="#">
                    <img src={require("../img/alokknight_logo_white.png")} width={52} height={40} /></a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="https://www.alokknight.com/textanalysis">TextAnalysis</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="https://www.alokknight.com/carprice">CarPricePrediction</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="https://www.alokknight.com/whisky">WhiskyQualityCheckup</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="https://www.alokknight.com/semanticanalysis">SemanticAnalysis</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="https://www.alokknight.com/resume">Resume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="https://www.alokknight.com/portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="https://www.alokknight.com/CV">CV</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="https://www.alokknight.com/apartment">Apartment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="https://www.alokknight.com/about">About</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>

                        </form>
                    </div>
                </div>
            </nav>
        </div>
        </nav>;
    }
}
