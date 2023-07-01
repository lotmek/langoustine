import "react";
import "twin.macro";
import { Navbar } from "../../components/Navbar";
import { PageContainer } from "../../components/PageContainer";
import { Review } from "./Review";

export const ReviewPage = () => {
  return (
    <PageContainer tw="bg-tertiary">
      <Navbar />
      <Review />
    </PageContainer>
  );
};
