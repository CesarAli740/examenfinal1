import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Home } from '../components/Home'
import { About } from '../components/About'
import { Dashboard } from '../components/Dashboard'
import { Header } from '../components/Header'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <BrowserRouter>
            <header className='menu'>
                <nav>
                    <ul className='ul-menu'>
                        <NavLink to="/Home">
                        <li>Home</li>
                        </NavLink>
                        <NavLink to="/About">
                        <li>About</li>
                        </NavLink>
                        <NavLink to="/Dashboard">
                        <li>Dashboard</li>
                        </NavLink>
                        <NavLink to="/Header">
                        <li>Header</li>
                        </NavLink>
                    </ul>
                </nav>
            <div className="linea"></div>
            </header>

            <Routes>
                <Route path='/Home' element={ <Home/> } />
                <Route path='/About' element={ <About/> } /> 
                <Route path='/Dashboard' element={ <Dashboard/> } />
                <Route path='/Header' element={ <Header/> } />
            </Routes>
        </BrowserRouter>
    )
}

export {Navbar}