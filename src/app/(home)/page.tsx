import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

const getMovies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
};

export default async function Home() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie: any) => (
        <a href={`/movies/${movie.id}`}>
          <li key={movie.id}>{movie.title}</li>
        </a>
      ))}
    </div>
  );
}
