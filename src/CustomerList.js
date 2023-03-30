import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function CustomerList() {
  const [customerStore, setCustomerStore] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:8080/api/customer", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();

      setCustomerStore(result.data);
    };

    getData();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col sm={2}>ID</Col>
          <Col md={8}>Name</Col>
          <Col sm={2}>Gender</Col>
        </Row>
        {customerStore.map((item) => (
          <Row key={item.customer_id}>
            <Col sm={2}>{item.customer_id}</Col>
            <Col md={8}>
              {item.title}
              {item.first_name}
              {item.last_name}
            </Col>
            <Col sm={2}>{item.gender}</Col>
          </Row>
        ))}
      </Container>
    </>
  );
}

export default CustomerList;
