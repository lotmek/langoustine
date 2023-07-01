import React, { ReactNode } from "react";
import "twin.macro";

interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children, ...props }) => {
  return (
    <div tw="w-full h-full flex flex-col" {...props}>
      {children}
    </div>
  );
};
