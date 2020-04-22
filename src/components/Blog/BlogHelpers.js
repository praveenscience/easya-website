export const FeaturedBlogMapper = Blog =>
  Blog && {
    Image: Blog.feature_image,
    Category: Blog.tags && Blog.tags[0] && Blog.tags[0].name,
    Time: Blog.reading_time,
    Title: Blog.title,
    Excerpt: null,
    LinkTo: "/blog/" + Blog.slug,
    ShowReadNow: false
  };

export const BlogListMapper = (Blogs, Max = 4) => {
  let FinalList =
    Blogs &&
    Blogs.length &&
    Blogs.map(Blog => ({
      Category: Blog.tags && Blog.tags[0] && Blog.tags[0].name,
      Title: Blog.title,
      LinkTo: "/blog/" + Blog.slug,
      Date: Blog.published_at
    }));
  if (FinalList) FinalList.length = Max;
  return FinalList;
};

export const BlogPostsMapper = Blogs =>
  Blogs &&
  Blogs.length &&
  Blogs.map(Blog => ({
    Image: Blog.feature_image,
    Category: Blog.tags && Blog.tags[0] && Blog.tags[0].name,
    Time: Blog.reading_time,
    Title: Blog.title,
    Excerpt: Blog.excerpt,
    LinkTo: "/blog/" + Blog.slug,
    ShowReadNow: false
  }));
