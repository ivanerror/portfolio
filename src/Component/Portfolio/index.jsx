import React from "react";
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfolioList = [
    {
      title: "Pokemon",
      description:
        "You will be shown a list of pokemon and you can catch the selected pokemon and then save it in pokedex. You can also release the pokemon that you have caught.",
      repository: "//github.com/ivanerror/pokemon-tokopedia",
      link: "//accel-pokemon.web.app/",
    },
    {
      title: "ACCEL PHOTOGRAPHY REACT",
      description: "My Personal ACCEL Photography Website remake with React",
      repository: "//github.com/ivanerror/accel-portofolio",
      link: "//accel-62f9f.web.app//",
    },
    {
      title: "Customer Relationship Management - Private",
      description:
        "CRM Application made for PT Global Media Utama Teknologi. made with MERN Stack",
    },
    {
      title: "ACCEL PHOTOGRAPHY",
      description: "My Personal ACCEL Photography Website",
      repository: "//github.com/ivanerror/ivanerror.github.io",
      link: "//ivanerror.github.io/",
    },
    {
      title: "Insframe Photo",
      description: "Website dedicated to sharing stock photography",
      repository: "//github.com/ivanerror/PROJECT_UTS_PENYEDIA_GAMBAR",
      link: "//insframephoto.herokuapp.com/",
    },
    {
      title: "Lagrange Calculator",
      description:
        "Website dedicated calculate the lagrange polynomial made with Django",
      repository: "//github.com/ivanerror/lagrange",
      link: "//github.com/ivanerror/PROJECT_UTS_PENYEDIA_GAMBAR",
    },
    {
      title: "Tweet Bot",
      description:
        "Auto-Tweet Bot made with Python and Selenium. You can see the tweet in the console.",
      repository: "//github.com/ivanerror/tweet-bot",
    },
  ];

  return (
    <div className="container mx-auto px-4 mb-4">
      <h4 className="font-notoSansJP font-bold text-xl mt-4 ">
        ポートフォリオプロジェクト
      </h4>
      <h1 className="font-notoSansSerif text-3xl xl:text-5xl font-extrabold xl:mt-2">
        PORTFOLIO PROJECT
      </h1>
      <div className="grid md:grid-cols-3 mt-8 gap-8">
        {portfolioList.map((item, index) => (
          <PortfolioListItem
            title={item.title}
            description={item.description}
            repository={item.repository}
            link={item.link}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

const PortfolioListItem = ({ title, description, repository, link }) => {
  return (
    <div className="p-4 border-2 rounded-xl flex-col flex justify-between">
      <div>
        <div className="font-notoSans text-xl uppercase font-bold">{title}</div>
        <div className="font-notoSans text-sm">{description}</div>
      </div>
      <div className="flex flex-row py-2 mt-4 justify-end">
        {link && (
          <Link
            to={link}
            className="flex border-2 bg-black text-white border-black rounded-lg mx-2 px-4 py-1 items-center font-bold"
          >
            <div className="mr-2">
              <AiOutlineGlobal />
            </div>
            Open
          </Link>
        )}
        {repository && (
          <Link
            to={repository}
            className="flex border-2 border-black rounded-lg mx-2 px-4 py-1 items-center font-bold"
          >
            <div className="mr-2">
              <AiFillGithub />
            </div>
            Repository
          </Link>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
