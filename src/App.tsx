import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import logo from "../src/assets/logo.jpg";

export function App() {
  const socialMedias = [
    {
      logo: <FaLinkedin color="white" size="30" />,
      name: "Linkedin",
      url: "https://www.linkedin.com/in/tiago-lopes-340776230/",
    },
    {
      logo: <FaInstagram color="white" size="30" />,
      name: "Instagram",
      url: "https://www.instagram.com/tgdev.ts/",
    },
    {
      logo: <FaGithub color="white" size="30" />,
      name: "Github",
      url: "https://github.com/tiagolopes-dev",
    },
    {
      logo: <MdOutlineEmail color="white" size="30" />,
      name: "Email",
      url: "mailto:tiagolopesc.dev@gmail.com",
    },
  ];

  const openLInk = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen w">
        <div className="border-2 rounded-full">
          <img src={logo} width={200} className="rounded-full" />
        </div>
        <div className="items-center flex flex-col">
          <p className="text-white font-semibold text-xl mt-2">@tgdev.ts</p>
        </div>

      <div className="flex flex-col gap-4 mt-4">
        {socialMedias.map((media, index) => (
          <div
            key={index}
            className="border-2 border-white rounded-xl p-4 flex items-center gap-3 cursor-pointer min-w-72 hover:bg-gray-500 transition duration-200"
            onClick={() => openLInk(media.url)}
          >
            <div>{media.logo}</div>
            <div>
              <p className="text-white text-md font-semibold ">{media.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
