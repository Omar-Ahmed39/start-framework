import React, { useState } from 'react'
import image1 from '../../assets/images/port1.png'
import image2 from '../../assets/images/port2.png'
import image3 from '../../assets/images/port3.png'
import Header from './../Header/Header';


export default function Portfolio() {


    const projects = [
        {
            imgSrc: image1,
            id: 1
        },
        {
            imgSrc: image2,
            id: 2
        },
        {
            imgSrc: image3,
            id: 3
        },
        {
            imgSrc: image1,
            id: 4
        },
        {
            imgSrc: image2,
            id: 5
        },
        {
            imgSrc: image3,
            id: 6
        },
    ];


    function addLayer(id) {
        const layer = document.querySelector('.layer');

        const layerImg = document.querySelector('.layer img');
        layerImg.src = document.querySelector(`#card-${id}`).firstElementChild.src

        layer.classList.remove('d-none')
    }

    function hideLayer(e) {
        const layer = document.querySelector('.layer');

        if (e.target === layer) {
            layer.classList.add('d-none')
        }
    }

    return (
        <div className='portfolio py-4'>
            <div className="container">
                <Header address={'portfolio component'} />
                <div className="container">
                    <div className="row g-5">
                        {projects.map(proj => {
                            return <div key={proj.id} className="col-md-6 col-lg-4">
                                <div id={'card-' + proj.id} onClick={function () { addLayer(proj.id) }} className="card position-relative">
                                    <img src={proj.imgSrc} alt={'project-' + proj.id} className='rounded-3 w-100' />
                                    <div className='main-bg position-absolute inset-0 z-0 d-flex justify-content-center align-items-center rounded-3 '>
                                        <i className='text-white fa-solid fa-plus fa-6x'></i>
                                    </div>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </div>
            <div onClick={function (e) { hideLayer(e) }} className='layer position-fixed inset-0 d-none  z-3 d-flex justify-content-center align-items-center' >
                <img src={image1} className='rounded-3 w-50 object-fit-cover' />
            </div>
        </div>
    )
}
