import SearchForm from "@/components/SearchForm";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  return (
    <>
      <section className='pink-container'>
        <h1 className='heading'>
          Pitch your startup, <br />
          Connect with Entrepreneurs
        </h1>

        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on Pitches and get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query} />
      </section>
    </>
  );
};

export default Home;
