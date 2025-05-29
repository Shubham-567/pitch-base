import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const posts = [
    {
      _id: 1,
      _createdAt: new Date(),
      views: 50,
      author: { _id: 1, name: "Shubham" },
      title: "We Robots",
      category: "Robots",
      description: "This is a description",
      image: "https://images.unsplash.com/photo-1634912314704-c646c586b131",
    },
  ];

  return (
    <>
      <section className='pink_container'>
        <h1 className='heading'>
          Pitch your startup, <br />
          Connect with Entrepreneurs
        </h1>

        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on Pitches and get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className='mt-7 card_grid'>
          {posts.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className='no-results'>No startup found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;
