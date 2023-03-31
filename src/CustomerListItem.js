import { Row, Col, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
function CustomerListItem(props) {
  const onDelete = () => {
    props.onDelete(props.data);
  };

  return (
    <>
      <Row
        key={props.data.customer_id}
        className="border border-primary-subtle mb-2 p-2 rounded shadow-sm"
      >
        <Col sm={2}>{props.data.customer_id}</Col>
        <Col md={4}>
          {props.data.title + " "}
          {props.data.first_name + " "}
          {props.data.last_name}
        </Col>
        <Col sm={2} className="text-center">
          {props.data.gender}
        </Col>
        <Col sm={4}>
          <div className="text-center m-2">
            <Link to={"/customer/"+props.data.customer_id} className="btn btn-warning me-3">
              Edit
            </Link>
            <Button variant="danger" onClick={onDelete}>
            Delete
          </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default CustomerListItem;
