import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { HiDatabase } from "react-icons/hi";
import { GrTechnology } from "react-icons/gr";
import { AiFillPicture } from "react-icons/ai";

const Skill = () => {
  const skillList = [
    {
      title: "Programming Language",
      japanTitle: "プログラミング言語",
      icon: <BsCodeSlash />,
      list: [
        { title: "Node JS", imgPath: "/assets/nodejs-logo.png" },
        {
          title: "JavaScript",
          imgPath: "/assets/js-logo.png",
        },
        {
          title: "Python",
          imgPath: "/assets/python-logo.png",
        },
        {
          title: "HTML",
          imgPath: "/assets/html-logo.png",
        },
        {
          title: "CSS",
          imgPath: "/assets/css-logo.png",
        },
      ],
    },
    {
      title: "Database",
      icon: <HiDatabase />,
      japanTitle: "データベース",
      list: [
        {
          title: "MongoDB",
          imgPath: "/assets/mongodb-logo.png",
        },
        {
          title: "Oracle SQL",
          imgPath: "/assets/oracle-logo.png",
        },
      ],
    },
    {
      title: "Framework / Library",
      japanTitle: "フレームワーク/ライブラリ",
      icon: <GrTechnology />,
      list: [
        {
          title: "React",
          imgPath: "/assets/react-logo.png",
        },
        {
          title: "Express",
          imgPath: "/assets/express-logo.png",
        },
        {
          title: "TailwindCSS",
          imgPath: "/assets/tailwindcss-logo.png",
        },
        {
          title: "Bootstrap",
          imgPath: "/assets/bootstrap-logo.png",
        },
      ],
    },
    {
      title: "Design",
      japanTitle: "デザイン",
      icon: <AiFillPicture />,
      list: [
        {
          title: "Adobe Photoshop",
          imgPath: "/assets/ps-logo.png",
        },
        {
          title: "Adobe XD",
          imgPath: "/assets/xd-logo.png",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 mb-4">
      <h4 className="font-notoSansJP font-bold text-xl">スキル</h4>
      <h1 className="font-notoSansSerif text-3xl xl:text-5xl font-extrabold">
        SKILL
      </h1>
      <div className="grid md:grid-cols-2 gap-8 mt-2">
        <ListSkill skillList={skillList} />
      </div>
    </div>
  );
};

const ListSkill = ({ skillList }) => {
  return (
    <>
      {skillList.map((skillGroup) => (
        <div className="flex flex-col border-2 border-black rounded-2xl  p-4">
          <div className="flex font-bold items-center">
            <div className="text-5xl mr-4">{skillGroup.icon}</div>
            <div>
              <h4 className="font-notoSansJP font-bold text-sm">
                {skillGroup.japanTitle}
              </h4>
              <div className="font-notoSansSerif text-lg">
                {skillGroup.title}
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-2">
            {skillGroup.list.map((skill) => (
              <ListItemSkill imgPath={skill.imgPath} title={skill.title} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

const ListItemSkill = ({ imgPath, title }) => {
  return (
    <div className="flex items-center my-2">
      <img className="w-12" src={imgPath} alt="" />
      <h4 className="text-xl font-bold mx-4">{title}</h4>
    </div>
  );
};

export default Skill;
