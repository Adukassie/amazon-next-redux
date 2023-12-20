"use client";
import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"></div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image
            loading="lazy"
            src="https://links.papareact.com/gi1"
            width={1000}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src="https://links.papareact.com/6ff"
            width={1000}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src="https://links.papareact.com/7ma"
            width={1000}
            height={200}
            alt=""
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/712+rK+vwPL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61qfJ0kqCwL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71KgqtqJoQL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71KgqtqJoQL._SX3000_.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
