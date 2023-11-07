import "react";
import "twin.macro";
import { Navbar } from "../../components/Navbar";
import { PageContainer } from "../../components/PageContainer";
import { Home } from "./Home";

export const HomePage = () => {
  return (
    <PageContainer tw="bg-tertiary">
      <Navbar />
      <Home />
    </PageContainer>
  );
};
