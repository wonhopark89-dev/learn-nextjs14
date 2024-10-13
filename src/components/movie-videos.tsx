import { API_URL } from '@/app/(home)/page';

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = await response.json();
  return json;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div>
      <h4>{JSON.stringify(videos)}</h4>
    </div>
  );
}
