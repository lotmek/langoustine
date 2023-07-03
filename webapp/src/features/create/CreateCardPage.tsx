import "react";
import "twin.macro";
import { Navbar } from "../../components/Navbar";
import { PageContainer } from "../../components/PageContainer";
import { AnimatedBackground } from "../../components/AnimatedBackground";
import { CreateCard } from "./CreateCard";

export const CreateCardPage = () => {
  return (
    <PageContainer tw="bg-tertiary">
      <AnimatedBackground />
      <Navbar />
      <CreateCard />
    </PageContainer>
  );
};
