import { defineQuery } from "next-sanity";


export const STARTUPS_QUERY = defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_created_at desc) {
  _id,
    title,
    slug,
    _created_at,
    author -> {
      _id,name,image,bio
    },
    views,
    description,
    category,
    image
}`);