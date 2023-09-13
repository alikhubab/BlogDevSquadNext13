import { Studio } from "./Studio";

import type { Metadata } from "next";
import { metadata as studioMetadata } from "next-sanity/studio/metadata";

// Set the right `viewport`, `robots` and `referer` meta tags
export const metadata: Metadata = {
  ...studioMetadata,
  title: "DEVSQUAD BLOG",

  // Overrides the viewport to resize behavior
  viewport: `${studioMetadata.viewport}, interactive-widget=resizes-content`,
};

export default function StudioPage() {
  return <Studio />;
}
