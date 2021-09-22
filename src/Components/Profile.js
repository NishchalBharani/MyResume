import React from 'react'
import ImgProfile from '../Images/IMG-4628.jpg'


function Profile() {
    return (
        <div>
            <div className="card">
                <div className="card-image">
                    <img className="activator" src={ImgProfile} alt="Nishchal"></img>
                    
                </div>
                <div className="card-content">
                    <div className="card-title black-text text-darken-3">
                        Nishchal Bharani
                    </div>
                    <p>Front-End Developer</p>
                </div>
                
            </div>
            <div className="card">
                <div className="card-content">
                    <div className="card-title black-text text-darken-3">
                        Languages
                    </div>
                    <p>English</p>
                    <p>Kannada</p>
                    <p>Hindi</p>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <div className="card-title black-text text-darken-3">
                        Hobbies
                    </div>
                    <p>Sports</p>
                    <p>Rapping</p>
                    <p>PC games</p>
                </div>
            </div>
        </div>
    )
}

export default Profile