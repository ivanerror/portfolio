import React, { useEffect, useState } from "react";
import {
  AiFillExperiment,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillPhone,
  AiFillProject,
  AiOutlineMenu,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import { Link } from "react-router-dom";
import { ExternalLink } from "../ExternalLink";

const TopBar = ({ children }) => {
  const externalLink = ExternalLink;
  const [isOpen, setIsOpen] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [scrollPosition]);

  const handleMenuClick = () => {
    setIsOpen((currVal) => !currVal);
  };

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 bg-white">
        <div className="flex justify-between items-center py-4 mx-4 md:mx-10">
          <Link to="/" className="flex cursor-pointer">
            <div className="font-notoSansJP font-extrabold mr-2 bg-black text-white px-1 items-end flex rounded-t-3xl ">
              アイバン
            </div>
            <div className="font-notoSansDisplay group hover:ml-4 ease-out transition-all duration-500 font-bold tracking-widest motion-reduce:ml-4">
              <div className="group-hover:tracking-wider transition-all duration-500">
                GABRIEL
              </div>
              <div className="flex">
                <div className="group-hover:bg-black transition-all duration-500 ease-out inline-block group-hover:text-white group-hover:px-2">
                  IVAN
                </div>
                <div className="ml-1 group-hover:tracking-wider transition-all duration-500">
                  SETYAPUTRA
                </div>
              </div>
            </div>
          </Link>
          <div className="hidden lg:flex font-bold items-center">
            <Menu link="/skill" title="Skill" icon={<AiFillExperiment />} />
            <Menu
              link="/portfolio"
              title="Portfolio"
              icon={<AiFillProject />}
            />
            <Menu link={`//${externalLink.github}`} icon={<AiFillGithub />} />
            <Menu
              link={`//${externalLink.linkedIn}`}
              icon={<AiFillLinkedin />}
            />
            <Menu
              link={`//${externalLink.instagram}`}
              icon={<AiFillInstagram />}
            />
            <Menu
              link={`//${externalLink.whatsApp}`}
              icon={<AiOutlineWhatsApp />}
            />
          </div>
          <div
            className="flex lg:hidden cursor-pointer"
            onClick={handleMenuClick}
          >
            <AiOutlineMenu />
          </div>
          <div
            className={`${
              !isOpen && "-right-1/2"
            } absolute top-24 transition-all ease-out duration-300  right-0 py-4 shadow-2xl rounded-xl bg-white/80 backdrop-blur-sm mr-2`}
          >
            <MenuList />
          </div>
        </div>
      </nav>
      <div className="h-24" />
      {children}
    </>
  );
};

const MenuList = () => {
  const externalLink = ExternalLink;
  return (
    <>
      <Menu link="/skill" title="Skill" icon={<AiFillExperiment />} />
      <Menu link="/portfolio" title="Portfolio" icon={<AiFillProject />} />
      <Menu
        link={`//${externalLink.github}`}
        title="Github"
        icon={<AiFillGithub />}
      />
      <Menu
        link={`//${externalLink.linkedIn}`}
        title="Linkedin"
        icon={<AiFillLinkedin />}
      />
      <Menu
        link={`//${externalLink.instagram}`}
        title="Instagram"
        icon={<AiFillInstagram />}
      />
      <Menu
        link={`//${externalLink.whatsApp}`}
        title="WhatsApp"
        icon={<AiOutlineWhatsApp />}
      />
    </>
  );
};

const Menu = ({ link, title, icon }) => {
  return (
    <Link
      to={link}
      className={`flex items-center px-4 mx-2 py-2 font-notoSans font-bold`}
    >
      <div className={`${title && "mr-2"}`}>{icon}</div>
      {title}
    </Link>
  );
};

export default TopBar;
