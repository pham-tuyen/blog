import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom"
import "./Layout.css"

function Layout() {
  return (
    <>
      <Navbar className="rounded-bottom" id="nav" sticky="top" data-bs-theme="dark" bg="dark">
        <Container fluid className="px-3">
          <Navbar.Brand className="ms-4">
            <Link to="/">Phạm Tuyên</Link>
          </Navbar.Brand>
          <Nav className="float-end">
            <Nav.Item className="mx-4">
              <Link to="/"><Button className="nav-button">Bài viết</Button></Link>
            </Nav.Item>
            <Nav.Item className="mx-4">
              <Link to="/about"><Button className="nav-button">Tôi là ai</Button></Link>
            </Nav.Item>
            <Nav.Item className="mx-4">
              <Link to="/internet"><Button className="nav-button">Tôi trên mạng</Button></Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      <Container fluid className="mt-5">
        <Outlet/>
      </Container>
    </>
  );
}

export default Layout;
