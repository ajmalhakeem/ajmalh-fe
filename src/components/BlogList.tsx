import { format } from "date-fns";

//TODO: Change any to correct type
export default function BlogList({ posts }: { posts: any }) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl pb-10 ">
        <div className="mt-10 space-y-16 ">
          {posts.map((post) => (
            <article
              key={post._id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post._createdAt} className="text-gray-500">
                  {format(new Date(post._createdAt), "d MMMM y")}
                </time>
                {post.categoryTitle && (
                  <a
                    href={`/post/${post.slug.current}`}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.categoryTitle}
                  </a>
                )}
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={`/post/${post.slug.current}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  asdad
                </p>
              </div>
              {/* <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
