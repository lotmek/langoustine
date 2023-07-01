import "react";
import "twin.macro";
import { Button } from "../../components/Button";
// import { Sidebar } from "../../layout/sidebar/Sidebar";

export const Home = () => {
  return (
    <div tw="h-full flex flex-col items-center justify-around">
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
    </div>
  );
};
