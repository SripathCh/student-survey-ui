import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import HomeStyles from "../styles/home.css"; // Uncomment if you have custom styles

const Home = () => {
    return (
        <>
            <div className="container mt-3 title-container">
                <h1>Welcome to the Student Survey Form Home Page!!!</h1>
                <button type="button" class="btn btn-primary">Submit Form</button>
                <button type="button" class="btn btn-warning">Update Records</button>
                <button type="button" class="btn btn-danger">Delete Records</button>
            </div>
        </>
    );
};
export function links() {
    return [{ rel: "stylesheet", href: HomeStyles }];
}

export default Home;
