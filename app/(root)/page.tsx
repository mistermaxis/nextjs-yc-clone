export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) { throw new Error ("Failed to fetch data (albums)") }

  const albums = await response.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {
        albums.map((album: {id: string, title: string}) => { return (
          <p key={album.id}>Title: {album.title}</p>
        )})
      }
    </div>
  );
}
