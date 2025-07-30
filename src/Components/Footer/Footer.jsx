import React from 'react'

export default function Footer() {
    return (
        <footer className='text-center text-white' >
            <div className='nav-bg  p-5 '>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-md-4">
                            <div>
                                <h3 className='fw-bold mb-3'>LOCATION</h3>
                                <p>2215 John Daniel Drive
                                    <br />
                                    Clark, MO 65243
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <h3 className='fw-bold mb-3'>AROUND THE WEB</h3>
                                <ul className='d-flex justify-content-center gap-3 list-unstyled'>
                                    <li><a href="#" target='_blank'><i className='fa-brands fa-facebook mx-1 icon text-white'></i></a></li>
                                    <li><a href="#" target='_blank'><i className="fa-brands fa-twitter mx-1 icon text-white"></i></a></li>
                                    <li><a href="#" target='_blank'><i className="fa-brands fa-linkedin-in mx-1 icon text-white"></i></a></li>
                                    <li><a href="#" target='_blank'><i className="fa-solid fa-globe mx-1 icon text-white"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <h3 className='fw-bold mb-3'>ABOUT FREELANCER</h3>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='p-3 '>
                <p>Copyright © Your Website 2021</p>
            </div>
        </footer>
    )
}
