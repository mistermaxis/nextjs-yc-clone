import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams } : { searchParams: Promise<{ query?: string }> }) {

  const query = (await searchParams).query;

  return (
    <>
      <section className="pink_container !bg-pink-500">
        <h1 className="heading">Share your dreams</h1>
        <p className="sub-heading !max-w-3xl">If you have an idea, you must pitch it, pitch it good</p>
        <SearchForm query={query}/>
      </section>
    </>
  );
}
