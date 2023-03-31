import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomerListItem from "./CustomerListItem";

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

  const onDelete = async (d) => {
    const response = await fetch("http://localhost:8080/api/customer/delete", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_id: d.customer_id,
      }),
    });
    const result = await response.json();

    setCustomerStore(result.data);
  };
  return (
    <>
      <Container className="mt-3">
        <Row className="row align-items-center">
          <Col md={10} className="h2">
            Customer List
          </Col>
          <Col md={2}>
            <div className="d-flex float-end">
              <Link to={"/customer/add"} className="btn btn-primary">ADD</Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mt-2">
        <Row className="border border-primary mb-2 p-2 rounded">
          <Col sm={2} className="fw-bold">
            ID
          </Col>
          <Col md={4} className="fw-bold">
            Name
          </Col>
          <Col sm={2} className="text-center fw-bold">
            Gender
          </Col>
          <Col sm={4} className="text-center fw-bold">
            Tools
          </Col>
        </Row>
      </Container>
      <Container className="mt-2">
        {customerStore.map((item) => (
          <CustomerListItem
            key={item.customer_id}
            data={item}
            onDelete={onDelete}
          />
        ))}
      </Container>
    </>
  );
}

export default CustomerList;
