import "react";
import "twin.macro";
import { Navbar } from "../../components/Navbar";
import { PageContainer } from "../../components/PageContainer";
import { CreateCard } from "./CreateCard";

export const CreateCardPage = () => {
  return (
    <PageContainer tw="bg-tertiary">
      <Navbar />
      <CreateCard />
    </PageContainer>
  );
};
