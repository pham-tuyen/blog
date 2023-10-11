import { Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./css/pagination.css"

export default function PageNumber(props) {
    const navigate = useNavigate()
    let items = [];
    for (let number = 1; number <= props.length; number++) {
    items.push(
        <Pagination.Item key={number} active={number === props.active} onClick={() => navigate(`/${(number !== 1) ? `pg${number}` : ""}`)}>
        {number}
        </Pagination.Item>)
    }

    return (
        <Pagination className="d-flex justify-content-center">
            <Pagination.First onClick={() => navigate("/")}/>
            <Pagination.Prev onClick={() => navigate(`/${((props.active - 1) > 1) ? `pg${(props.active - 1)}` : ""}`)}/>
            {items}
            <Pagination.Next onClick={() => navigate(`/${((props.active + 1) <= props.length) ? `pg${(props.active + 1)}` : `${(props.active !== 1) ? `pg${(props.active)}` : ""}`}`)}/>
            <Pagination.Last onClick={() => navigate(`/${(props.length !== 1) ? `pg${props.length}` : ""}`)}/>
        </Pagination>
    );
}
