import React from 'react'
import Header from '../Header/Header'

export default function About() {
    return (
        <div id='About' className='about px-5 text-white main-bg'>
            <div className="container ">
                <Header address={'about component'} />

                <div className='d-md-flex gap-3'>
                    <p >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>

        </div>
    )
}
