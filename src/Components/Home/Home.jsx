import React from 'react'
import image from '../../assets/images/avataaars.svg'
import Header from '../Header/Header'

export default function Home() {
    return (
        <div className='home p-5 main-bg'>
            <div className="container text-center text-white ">
                <img src={image} alt="person" />
                <Header address={'start Framework'} />
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    )
}
