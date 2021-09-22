import React from 'react'


function Projects() {
    return (
        <div className="card-panel yellow lighten-4">
            <div className="card">
                <div className="card-content">
                    <h5><strong>Projects</strong></h5>
                    <h6><strong>1.Title   : Blog-app</strong></h6>
                    <p>Description :This web application is built using create-react-app, where the user can
                        navigate between home, users and posts pages. Once the user clicks on users
                        all the users will be shown to him/her and they can select a particular user
                        and read the posts written by that user, they can also navigate back to the home
                        page and select posts to see all posts written by every user. 
                    </p>
                    <p>Packages: React-router-dom, axios</p>
                    <a href="https://github.com/NishchalBharani/Blog-app" target="_blank" rel="noreferrer">Github</a>
                    <br></br>
                    <h6><strong>2.Title : Customer Dashboard</strong></h6>
                    <p>Description :This is web application where every customer is
                                    being shown to the user and all the orders
                                    placed by them and the total amount, there is
                                    also a search functionality where the user can
                                    type the name and filter out the respective
                                    names.
                    </p>
                    
                    <a href="https://github.com/NishchalBharani/CustomerDashboard" target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
        </div>
    )
}

export default Projects