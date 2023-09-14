import Image from "next/image";
import { draftMode } from "next/headers";
import { groq } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/fetch";
import PreviewBlogList from "./PreviewBlogList";
import BlogList, { query } from "./BlogList";
import LiveQuery from "next-sanity/preview/live-query";

export default async function Home() {
  const preview = draftMode().isEnabled;
  // const query = groq`
  // *[_type=='post']{
  //   ...,
  //   author->,
  //   categories[]->
  // } | order(_createdAt desc)
  // `;

  const data = await sanityFetch<[]>({ query, tags: [] });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <LiveQuery
        enabled={draftMode().isEnabled}
        query={query}
        initialData={data}
        as={PreviewBlogList}
      >
        <BlogList data={data} />
      </LiveQuery>
    </main>
  );
}
