import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tile from "../components/Tile";
import content from "../content"
import PageTitle from "../components/PageTitle"
import PageNumber from "../components/PageNumber";

export default function Home() {
  return (
    <>
      <PageTitle name="Phạm Tuyên - Trang chủ"/>
      <Row sm={1} md={2} lg={3} xxl={4} className="g-4">
        {content.content.map((post, id) => (
          <Col key={id}>
            <Link to={post.route}>
              <Tile title={post.title} description={post.description} thumbnail={post.thumbnail}/>
            </Link>
          </Col>
        ))}
      </Row>
      <PageNumber length={content.page} active={1}/>
    </>
  );
}