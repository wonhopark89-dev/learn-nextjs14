import { API_URL } from '@/app/(home)/page';
import MovieInfo from '@/components/movie-info';
import MovieVideos from '@/components/movie-videos';
import { Suspense } from 'react';

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <Suspense fallback={<h2>loading info...</h2>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h2>loading videos</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
