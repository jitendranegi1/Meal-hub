// Filename - pages/ContactUs.js

import React from "react";
import { Link, Route } from "react-router-dom";
import Menu from "./Menu";

const Homepage = () => {
    return (
        <>
            <div className="text-center">
                <h1 className="text-center fontSize-2">Homepage</h1>
                <div className="home">
                    <div className="sidebar-heading">
                        <div className="box">
                            <Link to="/menu" className="link">Menu</Link>
                        </div>
                        <div className="box">
                            <Link to="/favorites" className="link">Favorites</Link>
                        </div>
                        <div className="box">
                            <Link to="/random-meal" className="link">Random Meal</Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Homepage;