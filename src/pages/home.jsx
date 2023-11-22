import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
import HomeStyles from "../styles/home.css"; // Uncomment if you have custom styles

const Home = () => {
    return (
        <>
            <div className="container mt-3 title-container">
                <h1>Welcome to the Student Survey Form Home Page!!!</h1>
                <button type="button" class="btn btn-primary">Submit Form</button>
                <button type="button" class="btn btn-warning">View / Delete / Update Survey</button>

                <p><b>SWE 645 - HOMEWORK ASSIGNMENT 3</b> <br></br><b>Team Members: Siva Chevuri (G), Sripath Cherukuri (G01395231), Mahitha (G), Naveen (G)</b></p>
            </div>
        </>
    );
};
export function links() {
    return [{ rel: "stylesheet", href: HomeStyles }];
}

export default Home;
