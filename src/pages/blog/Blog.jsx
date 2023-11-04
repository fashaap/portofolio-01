import { NavLink } from "react-router-dom";
import { BlogData } from "../../data/Blog";

const Blog = () => {
  return (
    <div className="backdrop-blur-[2px]">
      <div className="container max-w-5xl mx-auto flex flex-col items-center md:items-stretch py-10 flex-1 h-screen  text-white ">
        <div className="heading flex flex-col gap-5 w-full">
          <h1 className="text-3xl text-center ">Blog Post</h1>
          <hr className="mb-8" />
        </div>
        <article className="article grid grid-cols-1 md:grid-cols-2 gap-6 font-sans  ">
          {BlogData.map((item) => {
            return (
              <NavLink key={item.id} to={`/blog/${item.route}`}>
                <div className="max-w-md  rounded-lg flex flex-col gap-2 justify-stretch ">
                  <div className="w-full h-64 ">
                    <img
                      src={item.gallery.img1}
                      className="h-full w-full object-cover  rounded-lg shadow-2xl object-top"
                      alt=""
                    />
                  </div>
                  <div className="description flex flex-col gap-2 ">
                    <h1 className="text-2xl font-bold">{item.title}</h1>
                    <p className="line-clamp-3 text-sm leading- ">
                      {item.article}
                    </p>
                    <p>{`${item.author.date}  ${item.author.month}, ${item.author.year}`}</p>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </article>
      </div>
    </div>
  );
};

export default Blog;
