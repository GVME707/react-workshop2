import { Row, Col, Button } from "react-bootstrap";
function CustomerListItem(props) {

const onDelete = () => {
    props.onDelete(props.data);
}

  return (
    <>
      <Row key={props.data.customer_id}>
        <Col sm={2}>{props.data.customer_id}</Col>
        <Col md={6}>
          {props.data.title}
          {props.data.first_name}
          {props.data.last_name}
        </Col>
        <Col sm={2}>{props.data.gender}</Col>
        <Col sm={2}><Button variant="danger" onClick={onDelete}>
            Delete
        </Button></Col>
      </Row>
    </>
  );
}

export default CustomerListItem;
