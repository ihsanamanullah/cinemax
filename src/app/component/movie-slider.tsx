"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";

type Movie = {
  id: string;
  title: string;
  poster: string;
};

export default function MovieSlider({ movies }: { movies: Movie[] }) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 2,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 4,
          spacing: 30,
        },
      },
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {movies.map((movie) => (
        <Link key={movie.id} href={`/movie/${movie.id}`} className="keen-slider__slide">
          <div className="cursor-pointer transition-transform hover:scale-105">
            <img
              src={movie.poster}
              alt={movie.title}
              className="rounded-xl shadow-lg"
            />
            <p className="mt-2 text-center text-lg text-white">{movie.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
