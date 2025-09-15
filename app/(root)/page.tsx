import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";


export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUPS_QUERY);

  console.log(JSON.stringify(posts, null, 2));

  // const posts = [{
  //   _created_at: new Date(),
  //   views: 55,
  //   author: { _id: 1 , name: 'Raj'},
  //   _id: 1,
  //   description: 'This is a description.',
  //   image: 'https://plus.unsplash.com/premium_photo-1757322537387-56f559230a0b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   category: 'Robots',
  //   title: "We Robots",
  // }]


  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup <br /> Connect With Entrepreneur</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>

        <SearchForm query={query} />
      </section> 

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.map((post, index) => (
            <StartupCard key={post?._id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
