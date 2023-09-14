import { Post } from "@/typings";
import React from "react";

export const query = `
*[_type=='post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

type Props = {
  data: Post[];
};
function BlogList({ data }: Props) {
  console.log("Number of Posts>> ", data.length);
  return <div>BlogList</div>;
}

export default BlogList;
