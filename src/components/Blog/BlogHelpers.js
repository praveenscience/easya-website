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
  Blog && {
    Title:
      "Introducing Stickies Capture: turn your lessons into action, faster",
    Image: "https://i.imgur.com/uf0FjlZ.png",
    Author: {
      Image: "https://i.imgur.com/ISuLzIi.png",
      Name: "Hollis Kool",
      Role: "Content & Comms",
      Desc:
        "Hollis’s curious about people dynamics and social networks, and writes about the ways these play out in the workplace for better team collaboration and communication."
    },
    MarkDownContent:
      "## After the brainstorm: where things fall apart\n\nYou and your teammates have a lot of good ideas, emphasis on a lot. But the brainstorm is only useful if it becomes something actionable. Brainstorms in real life tend to be followed by documenting, consolidating, organizing, prioritizing, presenting, prototyping, iterating, and then more brainstorming. Right at the transition point between brainstorm and documentation - when you and your teammates take a deep sigh of [relief as the adrenaline of a creative session](https://example.com/) wears off and you step back and admire your ideas up on the wall - is when most brainstorms lose steam. You may wonder:\n\n- Who is going to type up all of these sticky note ideas?\n- Where do we start with turning all these different ideas into action items?\n- How do we not lose the organization of these sticky notes on the wall?\n- When should we meet next to sort all this out?\n\nSound familiar? We’ve been there. So, we thought about how we could maximize the creative moments we have with our team and minimize the overwhelming over logistics.\n\nPlus, when much of your brainstorm usually ends up being shared online in some form via a [pitch deck, design file, meeting notes, or Slack message](https://example.com/), you might as well consolidate all of these processes into one.\n\n## Bring your sticky notes online - instantly\n\n![Sticky Notes](https://i.imgur.com/cYMCaHw.png)\n\nTo make it easier for you to focus on your ideas instead of chasing down and typing up tiny pieces of paper, we designed Stickies Capture in Miro. Before calling it a night on online in an instant so you’re ready to share your ideas and collaborate.\n\nRather than [typing up your ideas or documenting your work with a bunch of photos that you can hardly](https://example.com/) read later, you can simply take a single photo of all of your teammates’ ideas on the wall and upload them in the same orientation onto an infinite canvas.\n\nWith smart text recognition, eliminate the time spent deciphering your scrawl and instead make it easier to iterate on ideas or have teammates provide edits so your 2×2 sticky notes evolve, grow.\n\n> I can’t remember how many retros we’ve had, joking that there should have been a magic tool to quickly convert stickies into digital version… So, here we are.\n\n## Level up your IRL brainstorm and come to solutions more efficiently\n\nStickies Capture enables traditional steps following a brainstorm to seamlessly move online so your small ideas can quickly become Jira tasks, added to a product roadmap, converted into an Excel file and more so you move from idea to solution more efficiently.\n\nAdditionally, with the rise of distributed, fully remote, and hybrid companies, Stickies any in-person brainstorms to quickly be documented online and shared out to those in different time zones and locations.\n\n> It’s easy to take pictures of a Post-it note in physical space, upload it into Miro, and arrange it exactly how it was on the wall.",
    Suggestions: SuggestionsMapper(Blogs)
  };
