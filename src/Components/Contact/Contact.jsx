import React from 'react'
import Header from '../Header/Header'

export default function Contact() {


    function writeInput(e, forname) {
        const name = document.querySelector(`label[for=${forname}]`)
        if (e.target.value == '') {
            name.classList.remove('top-0')
        }
        else {
            name.classList.add('top-0')
        }

    }

    return (
        <div className='contact py-4'>
            <div className="container">
                <Header address={'conatct section'} />
                <form action='#' className=' w-75 m-auto'>
                    <div className='position-relative pt-4'>
                        <label htmlFor="name" className='position-absolute z-n1'>User Name :</label>
                        <input onInput={function (e) { writeInput(e, 'name') }} className="form-control border-top-0 border-start-0 border-end-0 py-3 shadow-none" type="text" placeholder="User Name" />
                    </div>
                    <div className='position-relative pt-4'>
                        <label htmlFor="age" className='position-absolute  z-n1'>User Age :</label>
                        <input onInput={function (e) { writeInput(e, 'age') }} className="form-control border-top-0 border-start-0 border-end-0 py-3 shadow-none" type="text" placeholder="User Age" />
                    </div>
                    <div className='position-relative pt-4'>
                        <label htmlFor="mail" className='position-absolute z-n1'>User Email :</label>
                        <input onInput={function (e) { writeInput(e, 'mail') }} className="form-control border-top-0 border-start-0 border-end-0 py-3 shadow-none" type="email" placeholder="User Email" />
                    </div>
                    <div className='position-relative pt-4'>
                        <label htmlFor="pass" className='position-absolute z-n1'>User Password :</label>
                        <input onInput={function (e) { writeInput(e, 'pass') }} className="form-control border-top-0 border-start-0 border-end-0 py-3 shadow-none" type="password" placeholder="User Password" />
                    </div>
                    <button className=' border-0 py-2 px-3 rounded-3 main-bg text-white mt-3'>Send Message</button>
                </form>
            </div>
        </div>
    )
}
