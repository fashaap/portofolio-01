import { useParams } from "react-router-dom";
import { BlogData } from "../../data/Blog";
import { Adel } from "./data/Adel";

const BlogDetail = () => {
  const { id } = useParams();

  // Cari objek blog yang cocok dengan route dari URL
  const selectedBlog = BlogData.find((item) => item.route === id);

  return (
    <div className="backdrop-blur-[2px]">
      <div className="container max-w-5xl mx-auto text-white py-10 font-sans backdrop-blur-sm">
        {selectedBlog ? (
          <div key={selectedBlog.id} className="flex flex-col gap-3">
            <p>{`${selectedBlog.author.date}  ${selectedBlog.author.month}, ${selectedBlog.author.year}`}</p>
            <h1 className="font-bold text-4xl">{selectedBlog.title}</h1>
            <div className="image flex w-full h-96 justify-center">
              <img
                className="h-full w-full object-cover rounded-lg shadow-2xl object-top"
                src={selectedBlog.gallery.img1}
                alt=""
              />
            </div>
            {id === "Reva-Fidela-Adel-Panjtoro" ? <Adel /> : <h1 className="h-screen">Comming Soon..</h1>}
          </div>
        ) : (
          <p>Data tidak ditemukan</p>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
