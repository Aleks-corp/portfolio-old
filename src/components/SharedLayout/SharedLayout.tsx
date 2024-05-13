import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { LayoutContainer, Main } from "./SharedLayout.styled";

import { Header } from "../Header/Header";
import { Loader } from "../Loader/Loader";
import { Footer } from "../Footer/Footer";

const SharedLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </LayoutContainer>
  );
};

export default SharedLayout;
