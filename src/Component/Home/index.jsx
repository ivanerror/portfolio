import React from "react";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillProject,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { ExternalLink } from "../ExternalLink";

const Home = () => {
  const externalLink = ExternalLink;
  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 justify-start">
        <div className="md:rounded-2xl md:p-10 hover:shadow-xl transition-shadow ease-out duration-500">
          <img
            className="w-screen object-cover rounded-xl"
            src="/assets/ivan.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col md:ml-8">
          <h4 className="font-notoSansJP font-bold text-xl mt-4 ">
            プロフィール
          </h4>
          <h1 className="font-notoSansSerif text-3xl xl:text-5xl font-extrabold xl:mt-2">
            PROFILE
          </h1>
          <p className="noto-notoSans mt-2 xl:leading-8">
            I am a web developer who is doing an internship at PT Global Media
            Utama Teknologi and also recently graduated from a bachelor's degree
            majoring in informatics engineering at Tarumanagara University. I
            loved IT since childhood when my uncle introduced me to computer,
            it's still using DOS back then. I started code since graduated from
            highschool. I focus on learning about technology every day on
            youtube and other platforms because becoming a software engineer is
            my dream. My last project is creating a Customer Relationship
            Management web application.
          </p>
          <p className="font-notoSansJP my-8 text-gray-500">
            私は、PT Global Media Utama Teknologi
            でインターンシップを行っているウェブ開発者であり、最近、タルマナガラ大学で情報工学を専攻する学士号を取得しています。叔父が私にコンピューターを紹介してくれた子供の頃からITが大好きでしたが、当時はまだDOSを使用しています。私は高校を卒業してからコードを始めました。ソフトウェアエンジニアになることが私の夢なので、私はYouTubeやその他のプラットフォームでテクノロジーについて毎日学ぶことに集中しています。私の最後のプロジェクトは、顧客関係管理Webアプリケーションの作成です。
          </p>
          <div className="flex flex-col md:flex-row ">
            <Link
              to={"/portfolio"}
              className="flex px-4 py-2 my-2 border-2 border-black  bg-black text-white rounded-xl font-notoSans font-bold items-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mr-2">
                <AiFillProject />
              </div>
              View Project Portfolio
            </Link>
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap ">
            <SocialButton
              title={"Github"}
              icon={<AiFillGithub />}
              link={`//${externalLink.github}`}
            />
            <SocialButton
              title={"Linkedin"}
              icon={<AiFillLinkedin />}
              link={`//${externalLink.linkedIn}`}
            />
            <SocialButton
              title={"Instagram"}
              icon={<AiFillInstagram />}
              link={`//${externalLink.instagram}`}
            />
            <SocialButton
              title={"WhatsApp"}
              icon={<AiOutlineWhatsApp />}
              link={`//${externalLink.whatsApp}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialButton = ({ title, icon, link }) => {
  return (
    <Link
      to={link}
      className="flex px-4 py-2 md:mr-2 my-2 md: border-2 border-gray-500 rounded-xl font-notoSans font-bold items-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
    >
      <div className="mr-2">{icon}</div>
      {title}
    </Link>
  );
};

export default Home;
