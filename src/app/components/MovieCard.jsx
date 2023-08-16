import React from "react";
<<<<<<< HEAD
import style from "../";
=======
import style from "../Styles/card.module.css";
>>>>>>> a20c1f5cde16e52ecfe9f7636236b43b2da189a5
import Link from "next/link";
import Image from "next/image";
const MovieCard = (movieElm) => {
  const { id, title, type, synopsis } = movieElm.jawSummary;
  return (
    <>
      <div className={style.card}>
        <div className={style.card_img}>
          <Image
            src={movieElm.jawSummary.backgroundImage.url}
            alt={title}
            width={297}
            height={200}
          />
        </div>
        <div className={style.card_body}>
          <h2 className={style.card_title}>{title}</h2>
          <p className={style.card_text}>{synopsis}</p>
          <Link href={`/movie/${id}`}>
            <button>Watch Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
