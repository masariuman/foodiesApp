"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import pastelImg from "@/assets/pastel.png";
import bakwanUdangImg from "@/assets/bakwan.png";
import bakwanJagungImg from "@/assets/bakwanjagung.png";
import donatImg from "@/assets/donat.png";
import pisangImg from "@/assets/pisang.png";
import sumedangImg from "@/assets/tahusumedang.png";
import risolImg from "@/assets/risol.png";
import tempeImg from "@/assets/tempe.png";
import martabakImg from "@/assets/martabak.png";
import telurGulungImg from "@/assets/telurgulung.png";
import pempekImg from "@/assets/pempek.png";
import pentolGorengImg from "@/assets/pentolgoreng.png";
import classes from "./image-slideshow.module.css";

const images = [
  { image: pastelImg, alt: "Pastel / Korket Enak dan Nikmat" },
  { image: bakwanUdangImg, alt: "Bakwan Udang Enak dan Pedas" },
  { image: bakwanJagungImg, alt: "Bakwan Jagung Gurih" },
  { image: donatImg, alt: "Donat Padat dan Manis" },
  { image: pisangImg, alt: "Pisang Goreng Enak dan Manis" },
  { image: sumedangImg, alt: "Tahu Sumedang yang Menggugah" },
  {
    image: risolImg,
    alt: "Risoles dengan Isi Yang Mewah dan Nikmat",
  },
  { image: tempeImg, alt: "Tempe Mendoan Yang Mantap" },
  { image: martabakImg, alt: "Martabak Nikmat dan Empuk" },
  {
    image: telurGulungImg,
    alt: "Telur Gulung Tradisional Kesukaan Kita Semua",
  },
  {
    image: pempekImg,
    alt: "Pempek Palembang yang Bukan dari Palembang tapi Rasa dari Palembang",
  },
  {
    image: pentolGorengImg,
    alt: "Pentol Goreng Banjarmasir yg Kriuk dan Sedap",
  },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
