// pages/movie/[id].tsx
import { useRouter } from "next/router";
import { Movie } from "@/app/types";// Ensure that the Movie type is available

const MovieDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Get the movie ID from the URL

  // Here you would typically fetch the movie data from an API or a static data file
  // For the sake of the example, we are using a hardcoded movie list

  const movies: Movie[] = [
    { id: "1", title: "Dune: Part Two", poster: "/dune.jpg", description: "A sci-fi movie..." },
    { id: "2", title: "Godzilla x Kong", poster: "/gk.jpg", description: "Monsters clash in this epic battle..." },
    { id: "3", title: "Avatar: The Way of Water", poster: "/avatar.jpg", description: "A futuristic adventure..." },
    { id: "4", title: "Black Adam", poster: "/blackadam.jpg", description: "A superhero movie..." },
    
  ];

  const movie = movies.find((movie) => movie.id === id);

  if (!movie) return <p>Movie not found!</p>;

  return (
    <div className="bg-black text-white p-8">
      <div className="flex">
        <img src={movie.poster} alt={movie.title} className="w-64 h-96 object-cover mr-8" />
        <div>
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="text-lg">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
