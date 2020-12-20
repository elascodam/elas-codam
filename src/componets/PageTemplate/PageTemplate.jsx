import React from "react";
import { Header, Footer } from "../../componets";
import { Main } from "./styles";

function PageTemplate({ children, page }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer page={page} />
    </>
  );
}

export default PageTemplate;
