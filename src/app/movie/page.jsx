// "use client"
import React from "react";
import Link from "next/link";
import MovieCard from "../components/MovieCard";
import style from "../styles/card.module.css"

const Movie = async () => {

  const url = process.env.Rapid_Url;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2670ab8386msh6aa54305422b4e4p1e383bjsnd1e5b9b22449",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  const movies = data.titles;
  // console.log(data);
  return (
    <>
    <h1 style={{textAlign:"center",marginTop:"10px"}}>Movie & Series</h1>
    <div className={style.container}>
      
    
      {
        movies.map((movieElm) => {
          return <MovieCard key={movieElm.id} {...movieElm} />;
        })
      }
    </div>
    </>
  );
};

export default Movie;
