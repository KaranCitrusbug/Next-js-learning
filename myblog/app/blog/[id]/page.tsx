import { getSingleBlog } from "@/service/blogService";
import ThumbDownIcon from "@/components/thumb-down";
import ThumbUpIcon from "@/components/thump-up";
import LikeButton from "@/components/like-icon";

export default async function BlogDetail({
  params,
}: {
  params: { id: string };
}) {
  const blogId = params.id;
  const blogDetail = await getSingleBlog(blogId);

  return (
    <div className="container singleBlog h-screen flex">
      <div className="flex m-auto align-center">
      <div className="p-5 flex h-max bg-[#84a98c] rounded-md gap-4 mb-5">
        <img src={blogDetail.image} alt={blogDetail.title} className="h-96" />
        <div>
          <h1 className="font-bold text-3xl text-white">{blogDetail.title}</h1>
          <p className="text-2xl mt-3">{blogDetail.body}</p>
          <div className="mt-5 flex gap-5">
            <div className="flex align-center">
              <ThumbUpIcon/>
              {blogDetail.reactions.likes}
            </div>
            <div className="flex align-center">
              <ThumbDownIcon />
              {blogDetail.reactions.dislikes}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold mr-2 mb-2">Related to</p>
            {
              blogDetail.tags.map((tag :string) => (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={blogDetail.id}>
                  #{tag}
                </span>
              ))
            }
          </div>
          <div>
            <p>Written By : User Id {blogDetail.userId}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
