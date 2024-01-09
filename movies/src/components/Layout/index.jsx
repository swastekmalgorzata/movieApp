import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "./index.css";
import {
  ContentContainer,
  MainContainer,
  StaticContainer,
} from "../Containers";

function Layout() {
  return (
    <MainContainer>
      <StaticContainer>
        <Navbar />
      </StaticContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <StaticContainer>
        <Footer />
      </StaticContainer>
    </MainContainer>
  );
}

export default Layout;
