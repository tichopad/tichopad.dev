export interface Post {
  id: Number;
  excerpt: String;
  fields: {
    slug: String;
  };
  frontmatter: {
    title: String;
    published: String;
  };
}
