import React from 'react';
import style from "../../styles/card.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Id = async({params}) => {
  const id  = params.id;
  // const { title, type, synopsis } = movie.jawSummary;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2670ab8386msh6aa54305422b4e4p1e383bjsnd1e5b9b22449",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  const movie = data[0].details;

  return (
    <>
      <div className={style.card}>
        <div className={style.card_img}>
          <Image
            src={movie.backgroundImage.url}
            alt={movie.title}
            width={297}
            height={200}
          />
        </div>
        <div className={style.card_body}>
          <h2 className={style.card_title}>{movie.title}</h2>
          <p className={style.card_text}>{movie.synopsis}</p>
          <Link href={`/movie/${id}`}>
            <button>Watch Now</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Id;
