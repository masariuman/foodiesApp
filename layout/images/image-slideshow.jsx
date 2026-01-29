'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import pastelImg from '@/assets/pastel.png';
import bakwanUdangImg from '@/assets/bakwan.png';
import bakwanJagungImg from '@/assets/bakwanjagung.png';
import donatImg from '@/assets/donat.png';
import pisangImg from '@/assets/pisang.png';
import sumedangImg from '@/assets/tahusumedang.png';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import classes from './image-slideshow.module.css';

const images = [
  { image: pastelImg, alt: 'Pastel / Korket Enak dan Nikmat' },
  { image: bakwanUdangImg, alt: 'Bakwan Udang Enak dan Pedas' },
  { image: bakwanJagungImg, alt: 'Bakwan Jagung Gurih' },
  { image: donatImg, alt: 'Donat Padat dan Manis' },
  { image: pisangImg, alt: 'Pisang Goreng Enak dan Manis' },
  { image: sumedangImg, alt: 'Schnitzel yang Menggugah' },
  { image: tomatoSaladImg, alt: 'Salad Tomat Yang Segar' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
