// Filename - App.js

import "./App.css";
import Sidebar from "./components/Sidebar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
// import {
//     AboutUs,
//     OurAim,
//     OurVision,
// } from "./pages/AboutUs";
// import {
//     Services,
//     ServicesOne,
//     ServicesTwo,
//     ServicesThree,
// } from "./pages/Services";
// import {
//     Events,
//     EventsOne,
//     EventsTwo,
// } from "./pages/Events";
// import Contact from "./pages/ContactUs";
// import Support from "./pages/Support";
import Homepage from "./components/Homepage";
import Menu from "./components/Menu";
import Favorites from "./components/Favorites";
import RandomMeal from "./components/RandomMeal";
import Aboutme from "./components/Aboutme";
import Category from "./components/Category";
import { useEffect, useState } from "react";
function App() {
    const [favorites, setFavorites] = useState([]);

    // Load favorites from local storage
    useEffect(() => {
      const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(savedFavorites);
    }, []);

    // Save favorites to local storage
    useEffect(() => {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (meal) => {
      setFavorites((prevFavorites) => {
        const newFavorites = [...prevFavorites, meal];
        return newFavorites;
      });
    };
  
    const removeFavorite = (idMeal) => {
      setFavorites((prevFavorites) => prevFavorites.filter(meal => meal.idMeal !== idMeal));
    };

    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route
                    path="/"
                    element={<Homepage />}
                />
                <Route
                    path="/menu"
                    element={<Menu />}
                />
                <Route
                    path="/favorites"
                    element={<Favorites removeFavorite={removeFavorite} />}
                />
                <Route
                    path="/random-meal"
                    element={<RandomMeal />}
                />
                <Route
                    path="/category/:categoryName"
                    element={<Category favorites={favorites}/>}
                />
                <Route
                    path="/about-me"
                    element={<Aboutme />}
                />
                {/* <Link to="/category">category</Link> */}
            </Routes>
        </Router>
    );
}

export default App;
