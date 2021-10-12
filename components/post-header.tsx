import CoverImage from "./cover-image";
import PostTitle from "./post-title";

type Props = {
  title: string;
};

const PostHeader = ({ title }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={"/cover.jpeg"} />
      </div>
    </>
  );
};

export default PostHeader;
