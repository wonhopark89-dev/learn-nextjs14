import { API_URL } from '@/app/(home)/page';

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
}

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = await response.json();
  return json;
}

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  return (
    <div>
      <h1>{movie.title}</h1>
      <h4>{JSON.stringify(videos, null, 2)}</h4>
    </div>
  );
}
