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

const a = {
  id: "5e9b245d63140c00380a7256",
  uuid: "05cf5cb8-1232-4ec6-ab22-fe772038f1cc",
  title: "Welcome to Ghost",
  slug: "welcome",
  html:
    '<h2 id="a-few-things-you-should-know"><strong>A few things you should know</strong></h2><ol><li>Ghost is designed for ambitious, professional publishers who want to actively build a business around their content. That\'s who it works best for. </li><li>The entire platform can be modified and customised to suit your needs. It\'s very powerful, but does require some knowledge of code. Ghost is not necessarily a good platform for beginners or people who just want a simple personal blog. </li><li>It\'s possible to work with all your favourite tools and apps with hundreds of <a href="https://ghost.org/integrations/">integrations</a> to speed up your workflows, connect email lists, build communities and much more.</li></ol><h2 id="behind-the-scenes">Behind the scenes</h2><p>Ghost is made by an independent non-profit organisation called the Ghost Foundation. We are 100% self funded by revenue from our <a href="https://ghost.org/pricing">Ghost(Pro)</a> service, and every penny we make is re-invested into funding further development of free, open source technology for modern publishing.</p><p>The version of Ghost you are looking at right now would not have been made possible without generous contributions from the open source <a href="https://github.com/TryGhost">community</a>.</p><h2 id="next-up-the-editor">Next up, the editor</h2><p>The main thing you\'ll want to read about next is probably: <a href="https://easya-blog.ghost.io/the-editor/">the Ghost editor</a>. This is where the good stuff happens.</p><blockquote>By the way, once you\'re done reading, you can simply delete the default Ghost user from your team to remove all of these introductory posts! </blockquote>',
  comment_id: "5e9b245d63140c00380a7256",
  feature_image: "https://static.ghost.org/v3.0.0/images/welcome-to-ghost.png",
  featured: false,
  visibility: "public",
  send_email_when_published: false,
  created_at: "2020-04-18T16:01:33.000+00:00",
  updated_at: "2020-04-18T16:01:33.000+00:00",
  published_at: "2020-04-18T16:01:39.000+00:00",
  custom_excerpt:
    "Welcome, it's great to have you here.\nWe know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time.",
  codeinjection_head: null,
  codeinjection_foot: null,
  custom_template: null,
  canonical_url: null,
  tags: [
    {
      id: "5e9b245c63140c00380a71f6",
      name: "Getting Started",
      slug: "getting-started",
      description: null,
      feature_image: null,
      visibility: "public",
      meta_title: null,
      meta_description: null,
      url: "https://easya-blog.ghost.io/tag/getting-started/"
    }
  ],
  authors: [
    {
      id: "5951f5fca366002ebd5dbef7",
      name: "Ghost",
      slug: "ghost",
      profile_image: "https://static.ghost.org/v3.0.0/images/ghost.png",
      cover_image: null,
      bio: "You can delete this user to remove all the welcome posts",
      website: "https://ghost.org",
      location: "The Internet",
      facebook: "ghost",
      twitter: "ghost",
      meta_title: null,
      meta_description: null,
      url: "https://easya-blog.ghost.io/author/ghost/"
    }
  ],
  primary_author: {
    id: "5951f5fca366002ebd5dbef7",
    name: "Ghost",
    slug: "ghost",
    profile_image: "https://static.ghost.org/v3.0.0/images/ghost.png",
    cover_image: null,
    bio: "You can delete this user to remove all the welcome posts",
    website: "https://ghost.org",
    location: "The Internet",
    facebook: "ghost",
    twitter: "ghost",
    meta_title: null,
    meta_description: null,
    url: "https://easya-blog.ghost.io/author/ghost/"
  },
  primary_tag: {
    id: "5e9b245c63140c00380a71f6",
    name: "Getting Started",
    slug: "getting-started",
    description: null,
    feature_image: null,
    visibility: "public",
    meta_title: null,
    meta_description: null,
    url: "https://easya-blog.ghost.io/tag/getting-started/"
  },
  url: "https://easya-blog.ghost.io/welcome/",
  excerpt:
    "Welcome, it's great to have you here.\nWe know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time.",
  reading_time: 1,
  og_image: null,
  og_title: null,
  og_description: null,
  twitter_image: null,
  twitter_title: null,
  twitter_description: null,
  meta_title: null,
  meta_description: null,
  email_subject: null
};
