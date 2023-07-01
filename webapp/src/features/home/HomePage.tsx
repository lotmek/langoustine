import "react";
import "twin.macro";
import { Navbar } from "../../layout/navbar/Navbar";
import { PageContainer } from "../../layout/page-container/PageContainer";
import { Home } from "./Home";

export const HomePage = () => {
  return (
    <PageContainer tw="bg-sky-800">
      <Navbar />
      <Home />
    </PageContainer>
  );
};
