

import icon_callPhone from "../../assets/phone-call.svg";
import javascript_icon from "../../assets/javascript.svg";
import bootsrap_icon from "../../assets/bootstrap.svg";
import react_icon from "../../assets/react.svg";
import figma_icon from "../../assets/figma.svg";
import tailwindcss_icon from "../../assets/tailwindcss.svg";
import vite_icon from "../../assets/vite.svg";

import { NavLink } from "react-router-dom";

const Homepage = () => {
  const posts = [
    {
      id: 1,
      title: "Javascript",
      href: "https://www.javascript.com/",
      description:
        "JavaScript adalah bahasa pemrograman yang sering digunakan dalam pengembangan aplikasi web",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      img: javascript_icon,
    },
    {
      id: 1,
      title: "Vite JS",
      href: "https://vitejs.dev/",
      description:
        "Vite.js adalah sebuah platform pengembangan web yang dirancang untuk mempercepat proses pengembangan aplikasi web, khususnya aplikasi web berbasis JavaScript.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      img: vite_icon,
    },

    {
      id: 1,
      title: "React js",
      href: "https://react.dev/",
      description:
        "ReactJS (sering disebut React) adalah pustaka JavaScript yang digunakan untuk membangun antarmuka pengguna (UI) dalam pengembangan aplikasi web.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      img: react_icon,
    },
    {
      id: 1,
      title: "Figma",
      href: "https://www.figma.com/",
      description:
        "Figma adalah alat desain dan kolaborasi berbasis web yang digunakan oleh desainer, pengembang, dan tim untuk membuat prototipe, desain antarmuka pengguna, dan kolaborasi dalam pengembangan produk dan proyek desain.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      img: figma_icon,
    },
    {
      id: 1,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com/",
      description:
        "Tailwind CSS adalah sebuah framework CSS yang dirancang untuk mempermudah pengembangan web dengan memberikan sejumlah besar kelas CSS yang dapat digunakan untuk membangun antarmuka pengguna (UI) dengan cepat. ",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      img: tailwindcss_icon,
    },
    {
      id: 1,
      title: "Bootstrap",
      href: "https://getbootstrap.com/",
      description:
        "Bootstrap adalah kerangka kerja (framework) CSS (Cascading Style Sheets) sumber terbuka yang dikembangkan oleh Twitter (kemudian dikenal sebagai Twitter Bootstrap). ",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      img: bootsrap_icon,
    },
  ];

  return (
    <div className=" container mx-auto text-white pt-10 pb-10 flex flex-col h-auto  ">
      <div className="wrap flex flex-col justify-center text-center items-center gap-10    px-5">
        <div className="welcome">
          <p>welcome to my App Web</p>
        </div>
        <div className="rounded-full bg-slate-50 h-40 w-40 flex items-center justify-center">
          <img
            className="object-cover w-full h-full rounded-full object-top"
            src="https://cdn.discordapp.com/attachments/1169257091526045717/1169257139919913001/WhatsApp_Image_2023-09-11_at_17.29.35.jpeg?ex=6554be91&is=65424991&hm=963c29d798133968f4344d2cdc5fee4658d4af650225317ade51ae49253d76fd&"
            alt=""
          />
        </div>

        <div className="description">
          <h3 className="text-lg font-medium md:text-xl">
            Hi, I’m Fasha Azhi P.👋
          </h3>
          <div className=" font-bold w-50 flex flex-col">
            <p className="text-2xl md:text-3xl">Front end Developer</p>
          </div>
          <div className="button flex justify-center gap-5 mt-5 text-md font-bold ">
            <div className="button-1">
              <NavLink to="/aboutme">
                <button className="rounded-none bg-white  text-black  w-40 h-10 hover:bg-neutral-950 hover:text-white ">
                  <span className="">About Me</span>
                </button>
              </NavLink>
            </div>
            <div className="button-2">
              <NavLink to="contactme">
                <button className="rounded-none bg-neutral-950  ring-1 ring-neutral-600  hover:ring-white w-40 h-10">
                  <span className="flex justify-center pe-3 items-center  ">
                    <img src={icon_callPhone} className="w-10 h-5 " alt="" />
                    Contact me
                  </span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap flex flex-col text-center mt-20 justify-center items-center  ">
        <div className="items-center">
          <h1 className="text-2xl md:text-3xl font-bold">Skill</h1>
          <p className="md:text-xl">
            Sekitar 67% telah saya kuasai di bidang ini
          </p>
        </div>
        <div className=" text-start  ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 flex ">
            <div className="mx-auto pt-10 pb-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
              {posts.map((post, index) => (
                <article
                  key={index}
                  className="flex max-w-xl flex-col items-start justify-between backdrop-blur-[2px] rounded-sm p-5  "
                >
                  <img src={post.img} alt="" />
                  <div className="group relative ">
                    <h3 className="mt-3 text-lg font-semibold leading-6">
                      <NavLink to={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </NavLink>
                    </h3>
                    <NavLink to={post.href}>
                      <span className="line-clamp-3 text-sm leading-">
                        {post.description}
                      </span>
                    </NavLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
