import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
        
            <nav className="navbar navbar-expand-lg bg-body-tertiary   ">
                <div className="container-fluid text-bg-primary">
                <Link className="nav-link active fs-3 " aria-current="page" to="/">NEWSZ</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav  ">
                            
                            <li className="nav-item fs-4">
                                <Link className="nav-link active  " aria-current="page" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item fs-4">
                                <Link className="nav-link active  " aria-current="page" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item fs-4">
                                <Link className="nav-link active  " aria-current="page" to="/health">Health</Link>
                            </li>
                            <li className="nav-item fs-4">
                                <Link className="nav-link active  " aria-current="page" to="/business">Business</Link>
                            </li>
                            <li className="nav-item fs-4">
                                <Link className="nav-link active  " aria-current="page" to="/technology">Technology</Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
           
        </>
    )
}

export default Navbar