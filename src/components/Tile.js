import { Card } from "react-bootstrap";
import "./css/tile.css"

export default function Tile(props) {
  return (
    <Card style={{ width: '18rem', border: 'none', backgroundColor: 'white' }}>
      <Card.Img variant="top" className="rounded im" src={require(props.thumbnail)}/>
      <Card.Body>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}