export interface Post {
  id: Number;
  html: String;
  excerpt: String;
  fields: {
    slug: String;
  };
  meta: {
    title: String;
    published: String;
    updated: String;
    perex: String;
  };
  metaFormatted: {
    published: String;
    updated: String;
  };
}
