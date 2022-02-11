import React from "react";
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfolioList = [
    {
      title: "Pokemon",
      description:
        "You will be shown a list of pokemon and you can catch the selected pokemon and then save it in pokedex. You can also release the pokemon that you have caught.",
      repository: "//accel-pokemon.web.app/",
      link: "//github.com/ivanerror/pokemon-tokopedia",
    },
    {
      title: "Insframe Photo",
      description: "Website dedicated to sharing stock photography",
      repository: "//insframephoto.herokuapp.com/",
      link: "//github.com/ivanerror/PROJECT_UTS_PENYEDIA_GAMBAR",
    },
    {
      title: "Lagrange Calculator",
      description:
        "Website dedicated calculate the lagrange polynomial made with Django",
      repository: "//insframephoto.herokuapp.com/",
      link: "//github.com/ivanerror/PROJECT_UTS_PENYEDIA_GAMBAR",
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
      <div className="grid md:grid-cols-3 mt-4 gap-8">
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
        <Link
          to={repository}
          className="flex border-2 border-black rounded-lg mx-2 px-4 py-1 items-center font-bold"
        >
          <div className="mr-2">
            <AiFillGithub />
          </div>
          Repository
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
