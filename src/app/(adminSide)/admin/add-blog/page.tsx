import Editor from "@/allPages/addBlog/AddBlog";
import AddBlogData from "@/components/addBlogData/AddBlogData";

const page = () => {
  return (
    <>
      <AddBlogData />
      <div className="m-auto bg-zinc-100 max-w-4xl">
        <Editor />
      </div>
    </>
  );
};

export default page;
