import React, { useState } from 'react'
import Navbar from './Navbar'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import HomeAluno from '../Pages/HomeAluno';
import Atividades from '../Pages/Atividades';
import Boletim from '../Pages/boletimProf/Boletim';

const Hero = ({ handleLogout }) => {

    const [showNav, setShowNav] = useState(false)

    return (
        <section className="hero">
            <Router>
                <nav>
                    <GiHamburgerMenu className="hamburguer" onClick={() => setShowNav(!showNav)} />

                    <button onClick={handleLogout}>Logout</button>
                </nav>
                    <Navbar show={showNav} />
                

                <div className="MainHero">
                <Route path="/HomeAluno" component={HomeAluno} />
                <Route path="/Atividades" component={Atividades} />
                <Route path="/Boletim" component={Boletim} />
                </div>
            </Router>
        </section>
    )
}

export default Hero;