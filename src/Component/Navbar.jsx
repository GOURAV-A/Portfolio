import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary fixed " data-bs-theme="dark" style={{zIndex: 1}}>
                    <div className="container-fluid">
                        <a className="logo" style={{ color: 'whitesmoke', fontFamily: "Lucida Handwriting", fontSize: '21px',textDecoration: 'none'  }}>
                            <span className="grey-color"> &lt;</span>
                            <span className="logo-name" > Gourav Anand </span>
                            <span className="grey-color">/&gt;</span>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" style={{ justifyContent: 'end' }} id="navbarNavAltMarkup">
                            <div className="navbar-nav">

                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                                <Link className="nav-link" to="/Resume">Resume</Link>
                                <Link className="nav-link" to="/image">Works</Link>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}








