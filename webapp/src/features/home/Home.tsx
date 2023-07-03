import "react";
import "twin.macro";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import LangoustineLogoImg from "../../assets/image/langoustine_logo_512.png";

export const Home = () => {
  return (
    <div tw="w-full md:max-w-xl h-full flex flex-col items-center justify-around p-8 m-auto overflow-hidden z-10">
      <h1 tw="text-center text-primary m-5 font-semibold">Welcome to Langoustine!</h1>
      <img src={LangoustineLogoImg} alt="Langoustine home logo" tw="max-w-sm" />
      <Link tw="w-full" to="/review">
        <Button tw="w-full">Review cards</Button>
      </Link>
      <Link tw="w-full" to="/">
        <Button tw="w-full">Create cards</Button>
      </Link>
    </div>
  );
};
