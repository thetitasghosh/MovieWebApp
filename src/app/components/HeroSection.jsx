import React from "react";
import "../Styles/hero.css";
import Image from "next/image";
import Link from "next/link";



const HeroSection = ({ title, imgurl }) => {
   
   
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="content">
            <h1>{title }</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
            <Link href="/movie">
              <button>Explore</button>
            </Link>
              
          </div>

          <div className="img">
            <Image
              src={imgurl}
              alt="Picture of the author"
              width={500}
              height={500}/>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
