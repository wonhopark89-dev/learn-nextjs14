export default function MovieDetail({ params: { id } }: { params: { id: string } }) {
  console.log('movie detail', id);
  return (
    <div>
      <h1>{'movie detail'} </h1>
    </div>
  );
}
