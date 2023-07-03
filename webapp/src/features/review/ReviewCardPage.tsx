import "react";
import "twin.macro";
import { Navbar } from "../../components/Navbar";
import { PageContainer } from "../../components/PageContainer";
import { ReviewCard } from "./ReviewCard";
import { AnimatedBackground } from "../../components/AnimatedBackground";

export const ReviewCardPage = () => {
  return (
    <PageContainer tw="bg-tertiary">
      <AnimatedBackground />
      <Navbar />
      <ReviewCard />
    </PageContainer>
  );
};
