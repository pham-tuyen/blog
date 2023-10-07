import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer";

export default function Layout() { 
  return (
    <>
      <Navigation/>

      <Container className="my-2">
        <Outlet/>
      </Container>

      <Footer/>
    </>
  );
}
