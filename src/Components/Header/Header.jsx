import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import './Header.css'

export default function Header() {
    const [header,setHeader] = useState(false)

    window.addEventListener('scroll',() => {
        console.log(window.scrollY);
        if(window.scrollY > 50){
            setHeader(true)
        }else{
            setHeader(false)
        }
    })
    return (
        <header className={'main-header container-padding'+(header?" main-header--active":'')}>
            <Link to="/">
                <img src={logo} className='logo-img' alt="" />
            </Link>
            <div className="btns-wrapper">
                <Link to="/" className='btn-primary btn-login'>Login</Link>
                <Link to="/" className='btn-primary'>Create My Resume</Link>
            </div>
        </header>
    )
}
