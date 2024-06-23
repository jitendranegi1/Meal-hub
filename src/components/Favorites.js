
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

const Favorites = ({ removeFavorite }) => {
  const { categoryName } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);
    }, []);


  return (
    // <div>
    //   <h2>{categoryName} Meals</h2>
    //   <ul>
    //     {meals.map(meal => (
    //       <li key={meal.idMeal}>{meal.strMeal}</li>
    //     ))}
    //   </ul>
    // </div>
    <>
        <div className="text-center">
            <h1 className="text-center fontSize-2">My Favorites</h1>
            <div className="home">
                <ul className="sidebar-heading">
                    {favorites && favorites.map(meal => (
                        <>
                            <li key={meal.idMeal} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }} className="box" >
                                <img src={meal.strMealThumb} alt={meal.strMeal} width={50} height={50} style={{ marginRight: '10px' }} />
                                <span>{meal.strMeal}</span>
                                <span>{meal.strCategoryDescription}</span>
                            </li>
                            <FontAwesomeIcon
                                icon={solidHeart}
                                style={{ marginLeft: 'auto', cursor: 'pointer', paddingTop: '28px' }}
                                className="heart-icon"
                                onClick={() => removeFavorite(meal.idMeal)}
                            />
                            {/* <button onClick={() => removeFavorite(meal.idMeal)} style={{ marginLeft: 'auto' }}>Remove</button> */}
                        </>
                        // <div className="box ">
                        //     {/* <Link to={{ pathname: `/category/${category.strCategory}`, state: {type:category.strCategory} }} key={meal.idMeal} className="link box">{meal.strMeal}</Link> */}
                        //     <img src={meal.strCategoryThumb} width={30} height={30} />
                        //     <li className="" key={meal.idMeal}>{meal.strMeal}</li>

                        // </div>
                    ))}
                </ul>
            </div>
        </div>
    </>
  );
};

export default Favorites;
