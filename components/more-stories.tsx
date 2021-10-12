import PostPreview from "./post-preview";

type Props = {
  posts: any;
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Stories
      </h2>
      <div className="grid grid-cols-1 mb-8 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
