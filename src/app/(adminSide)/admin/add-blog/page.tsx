// import Editor from "@/allPages/addBlog/AddBlog";
import AddBlogData from "@/components/addBlogData/AddBlogData";
import Editor from "@/components/Editor/Editor";

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
