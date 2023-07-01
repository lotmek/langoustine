import "react";
import "twin.macro";
import { Navbar } from "../../layout/navbar/Navbar";
import { PageContainer } from "../../layout/page-container/PageContainer";
import { Review } from "./Review";

export const ReviewPage = () => {
  return (
    <PageContainer tw="bg-tertiary">
      <Navbar />
      <Review />
    </PageContainer>
  );
};
