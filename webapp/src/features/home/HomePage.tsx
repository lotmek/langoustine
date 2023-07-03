import "react";
import "twin.macro";
import { Navbar } from "../../components/Navbar";
import { PageContainer } from "../../components/PageContainer";
import { Home } from "./Home";
import { AnimatedBackground } from "../../components/AnimatedBackground";

export const HomePage = () => {
  return (
    <PageContainer tw="bg-tertiary">
      <AnimatedBackground />
      <Navbar />
      <Home />
    </PageContainer>
  );
};
