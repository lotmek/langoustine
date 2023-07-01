import "react";
import "twin.macro";
import { Navbar } from "../../components/Navbar";
import { PageContainer } from "../../components/PageContainer";
import { Review } from "./Review";
import { AnimatedBackground } from "../../components/AnimatedBackground";

export const ReviewPage = () => {
  return (
    <PageContainer tw="bg-tertiary">
      <AnimatedBackground />
      <Navbar />
      <Review />
    </PageContainer>
  );
};
