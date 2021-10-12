import CoverImage from "./cover-image";
import Link from "next/link";

type Props = {
  title: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, excerpt, slug }: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={"/cover.jpeg"} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
