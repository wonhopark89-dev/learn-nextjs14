import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

const getMovies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(URL);
  const json = await response.json();
  return json;
};

export default async function Home() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
