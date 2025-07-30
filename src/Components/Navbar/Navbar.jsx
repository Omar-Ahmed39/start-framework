import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    const [padding, setpadding] = useState('py-4');

    document.addEventListener('scroll', function () {
        if (scrollY > 50) {
            setpadding('py-2')
        }

        else if (scrollY == 0) {
            setpadding('py-4')
        }
    })





    return (
        <>
            <nav className={`${"navbar navbar-expand-lg position-sticky   top-0 z-2 nav-bg w-100 " + padding}`}>
                <div className="container">
                    <Link className="navbar-brand fs-2 text-white fw-bold text-uppercase" to="/">Start Framework</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto gap-3 mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink className="nav-link d-inline p-2 text-uppercase text-white fw-bold " to="about">about</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link d-inline p-2 text-uppercase text-white fw-bold" to="portfolio">portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link d-inline p-2 text-uppercase text-white fw-bold" to="contact">contact</NavLink>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
