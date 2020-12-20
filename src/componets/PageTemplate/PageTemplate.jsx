import React from "react";
import { Header, Footer } from "../../componets";
import { Main } from "./styles";

function PageTemplate({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default PageTemplate;
