import BackButton from "@/components/BackButton";
import PostPagination from "@/components/Posts/PostPagination";
import PostsTable from "@/components/Posts/PostTable";

const PostsPage = () => {
  return (
    <>
      <BackButton text="Go back" link="/" />
      <PostsTable />
      <PostPagination />
    </>
  );
};

export default PostsPage;
