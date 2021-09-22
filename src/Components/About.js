import React from 'react'

function About() {
    return (
        <div className="card-panel yellow lighten-4">
            <div className="card">
                <div className="card-container">
                    <h6 className='mt-bottom'>
                        <strong>ABOUT ME</strong>
                    </h6>
                    <p className='black-text'>
                        I am a frontend developer with hands on experience in building web applications and working with REST API<br></br>
                        CRUD Operations<br></br>
                        For global state management i use Redux, Redux-thunk<br></br>
                        Can handle user authentication and Dynamic routing<br></br>
                    </p>
                </div>
                <div className="card-action">
                    <h6>
                        <strong>PERSONAL INFO</strong>
                    </h6>
                    <div className="row mt">
                        <div className="col s12 m6 16 x16">
                            <p>
                                <strong>Address:</strong>Mysore Karnataka
                            </p>
                            <p>
                                <strong>Email:</strong>nishchalbharani@gmail.com
                            </p>
                            <p>
                                <strong>Phone:</strong>8296949438
                            </p>
                        </div>
                        <div className="row mt">
                            <div className="col s6 m6">
                                <p>
                                    <strong>Github:</strong><a href="http://github.com/NishchalBharani" 
                                                                target="_blank" 
                                                                rel="noreferrer">
                                                                    Open Github
                                                            </a>
                                </p>
                                <p>
                                    <strong>Linkedin:</strong><a href="https://www.linkedin.com/in/nishchal-bharani-68887214b/"
                                                                 target="_blank" 
                                                                 rel="noreferrer">
                                                                     Open Linkedin
                                                                </a>
                                </p>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default About