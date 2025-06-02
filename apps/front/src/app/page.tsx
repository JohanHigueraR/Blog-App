import { HeroContent } from "@/components/hero/HeroContent";
import HeroIntro from "@/components/intro/HeroIntro";
import LatestPost from "@/components/latestPost/LatestPost";
import { fetchPosts } from "@/lib/actions/postActions";
import { getSession } from "@/lib/session";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({ searchParams }: Props) {
  const { page } = await searchParams;
  const { totalPosts, posts } = await fetchPosts({
    page: page ? +page : undefined,
  });
  const session = await getSession();

  return (
    <main className="bg-gray-950">
      <section className="min-h-screen  ">
        <HeroIntro></HeroIntro>
      </section>
      <section className="min-h-screen bg-accent ">
        <HeroContent></HeroContent>
      </section>
      <section className="min-h-screen">
        <LatestPost posts={posts}></LatestPost>
      </section>
    </main>
  );
}
