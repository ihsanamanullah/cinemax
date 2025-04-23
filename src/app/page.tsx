import Image from "next/image";
import { Movie } from "./types";
import PromoSlider from "./component/promoslider";

const nowShowing: Movie[] = [
  {
    id: "1",
    title: "Dune: Part Two",
    poster: "/dune.jpg",
    description: "A sci-fi movie...",
  },
  {
    id: "2",
    title: "Godzilla x Kong",
    poster: "/gk.jpg",
    description: "Monsters clash in this epic battle...",
  },
  {
    id: "3",
    title: "Avatar: The Way of Water",
    poster: "/avatar.jpg",
    description: "A futuristic adventure...",
  },
  {
    id: "4",
    title: "Black Adam",
    poster: "/blackadam.jpg",
    description: "A superhero movie...",
  },
  {
    id: "5",
    title: "Black Panther: Wakanda Forever",
    poster: "/bp.jpg",
    description: "A superhero movie...",
  },
  {
    id: "6",
    title: "Percy Jackson: Sea of Monsters",
    poster: "/pjsom.jpg",
    description: "A superhero movie...",
  },
];

const comingSoon: Movie[] = [
  {
    id: "7",
    title: "28 Years Later",
    poster: "/28years.jpg",
    description: "A sci-fi movie...",
  },
  {
    id: "8",
    title: "The Bad Guys 2",
    poster: "/tbg.jpg",
    description: "A superhero movie...",
  },
  {
    id: "9",
    title: "Superman",
    poster: "/superman.jpg",
    description: "A superhero movie...",
  },
  {
    id: "10",
    title: "Fantastic Four",
    poster: "/fantastic4.jpg",
    description: "A superhero movie...",
  },
];

function MovieGrid({ movies }: { movies: Movie[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <div key={movie.id} className="text-center">
          <div className="w-[280px] h-[420px] mx-auto overflow-hidden rounded-lg shadow-lg">
            <Image
              src={movie.poster}
              alt={movie.title}
              width={280}
              height={420}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-2 text-sm">{movie.title}</p>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen p-8 text-white bg-gradient-to-b from-red-900 via-black to-purple-900 relative overflow-hidden">
      {/* Cinematic glow effect overlay */}
      <div className="absolute inset-0 pointer-events-none bg-black bg-opacity-40 backdrop-blur-sm shadow-[inset_0_0_100px_rgba(255,255,255,0.05)] z-0" />

      <div className="relative z-10">
        {/* Promo Slider Section */}
        <section className="mb-12">
          <PromoSlider />
        </section>

        {/* Now Showing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Now Showing</h2>
          <MovieGrid movies={nowShowing} />
        </section>

        {/* Coming Soon Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Coming Soon</h2>
          <MovieGrid movies={comingSoon} />
        </section>
      </div>
    </main>
  );
}
