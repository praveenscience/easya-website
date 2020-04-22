import TurndownService from "turndown";

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

export const SuggestionsMapper = Blogs => {
  Blogs =
    Blogs &&
    Blogs.map(Blog => ({
      Image: Blog.feature_image,
      Category: Blog.tags && Blog.tags[0] && Blog.tags[0].name,
      Time: Blog.reading_time,
      Title: Blog.title,
      Excerpt: Blog.excerpt,
      LinkTo: "/blog/" + Blog.slug,
      ShowReadNow: false
    }));
  return Blogs.slice(2, 4);
};

export const BlogDetailsMapper = (Blog, Blogs) =>
  Blog &&
  Blog.posts &&
  Blog.posts[0] && {
    Title: Blog.posts[0].title,
    Image: Blog.posts[0].feature_image,
    Author: {
      Image:
        Blog.posts[0].authors &&
        Blog.posts[0].authors[0] &&
        Blog.posts[0].authors[0].profile_image,
      Name:
        Blog.posts[0].authors &&
        Blog.posts[0].authors[0] &&
        Blog.posts[0].authors[0].name,
      Role:
        Blog.posts[0].authors &&
        Blog.posts[0].authors[0] &&
        Blog.posts[0].authors[0].location,
      Desc:
        Blog.posts[0].authors &&
        Blog.posts[0].authors[0] &&
        Blog.posts[0].authors[0].bio
    },
    MarkDownContent: new TurndownService().turndown(Blog.posts[0].html),
    Suggestions: SuggestionsMapper(Blogs)
  };
