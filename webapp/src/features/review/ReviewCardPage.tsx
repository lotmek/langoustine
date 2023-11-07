import "react";
import "twin.macro";
import { Navbar } from "../../components/Navbar";
import { PageContainer } from "../../components/PageContainer";
import { ReviewCard } from "./ReviewCard";

export const ReviewCardPage = () => {
  return (
    <PageContainer tw="bg-tertiary">
      <Navbar />
      <ReviewCard />
    </PageContainer>
  );
};
