import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'
import Profile from './Profile'

function Home(){
    return (
        <div className="card-panel yellow lighten-5">
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col s12 m3 l3">
                        <Profile />
                    </div>
                    <div className="col s12 m9 l9">
                        <About />
                        <Skills />
                        <Experience />
                        <Education />
                        <Projects />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home