// Filename - pages/ContactUs.js

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    const dataToPass = { name: 'John Doe', age: 25 };

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchCategories = async () => {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            setCategories(response.data.categories);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    fetchCategories();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className="text-center">
                <h1 className="text-center fontSize-2">Menu</h1>
                <div className="home">
                    <ul className="sidebar-heading">
                        {categories.map(category => (
                        <Link to={{ pathname: `/category/${category.strCategory}`, state: {type:category.strCategory} }} key={category.idCategory} className="link box">{category.strCategory}</Link>
                        // <li className="box" key={category.idCategory}>{category.strCategory}</li>
                        ))}
                    </ul>
                    {/* <div className="box">
                        <Link to={{ pathname: '/category', state: dataToPass }} className="link">Category 1</Link>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default Menu;