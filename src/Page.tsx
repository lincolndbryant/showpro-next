import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { PropsWithChildren } from "react";

export const Page = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
