import { API_URL } from '@/app/(home)/page';

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  throw new Error('This is an error');
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <div>
      <h4>{JSON.stringify(movie)}</h4>
    </div>
  );
}
