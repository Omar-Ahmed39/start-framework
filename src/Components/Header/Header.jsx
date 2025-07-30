import React from 'react'

export default function Header({ address }) {
    return (
        <div className="header text-center ">
            <h1 className='fw-bolder m-0 mt-5 mb-3 text-uppercase '>{address}</h1>
            <div className='header-style d-flex justify-content-center align-items-center mb-3'>
                <div className=''></div>
                <i className='fa-solid fa-star'></i>
                <div className=''></div>
            </div>
        </div>
    )
}
