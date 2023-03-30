import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
    const response = await fetch("http://localhost:8080/api/customer/delete",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        customer_id: d.customer_id
      })
    }
    );
      const result = await response.json();

      setCustomerStore(result.data);

  };
  return (
    <>
      <Container >
        <Row>
          <Col sm={2}>ID</Col>
          <Col md={6}>Name</Col>
          <Col sm={2}>Gender</Col>
          <Col sm={2}>Delete</Col>
        </Row>
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
