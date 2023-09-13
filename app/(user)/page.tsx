import Image from "next/image";
import { draftMode } from "next/headers";
import { groq } from "next-sanity";

export default function Home() {
  const preview = draftMode().isEnabled;
  const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
  `;

  if (preview) return <div>Preview Mode</div>;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home
    </main>
  );
}
