import { useEffect, useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function CustomerForm() {
  const navigate = useNavigate();

  let params = useParams();

  console.log(params.customerId);

  const [customerId, setCustomerId] = useState(0);
  const [title, setTitle] = useState("Mr.");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "http://localhost:8080/api/customer/" + params.customerId,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();

      setCustomerId(result.data.customer_id);
      setTitle(result.data.title);
      setFirstname(result.data.first_name);
      setLastname(result.data.last_name);
      setGender(result.data.gender);
    };

    if (params.customerId !== "add") {
      getData();
    }
  }, [params.customerId]);

  const onSave = (event) => {
    const form = event.currentTarget;

    event.preventDefault();

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
        if(params.customerId !== "add"){
            doUpdateCustomer();
        }else{
            doAddCustomer();
        }

      
    }

    setValidated(true);
  };

  const doAddCustomer = async () => {
    const response = await fetch("http://localhost:8080/api/customer/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_id: customerId,
        title: title,
        first_name: firstname,
        last_name: lastname,
        gender: gender,
      }),
    });
    const res = await response.json();
    console.log(res);

    if (res.result) {
      navigate("/home");
    } else {
      alert("Can't Insert New Data");
    }
  };

  const doUpdateCustomer = async () => {
    const response = await fetch("http://localhost:8080/api/customer/update", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_id: customerId,
        title: title,
        first_name: firstname,
        last_name: lastname,
        gender: gender,
      }),
    });
    const res = await response.json();
    console.log(res);

    if (res.result) {
      navigate("/home");
    } else {
      alert("Can't Update Data");
    }
  };

  return (
    <>
      <Container fluid className="flex-direction: column">
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Row>
              <Col sm>
                <Row className="mt-5 h1 p-3 justify-content-center">
                  Add Customer
                </Row>
              </Col>
            </Row>
            <Form noValidate validated={validated} onSubmit={onSave}>
              <Form.Group className="mb-3" controlId="txtCustomerId">
                <Form.Label>Customer ID</Form.Label>
                <Form.Control
                disabled={(params.customerId !== "add")}
                  type="number"
                  required
                  value={customerId}
                  placeholder="Enter Customer ID"
                  min={1}
                  onChange={(e) => setCustomerId(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Customer ID
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="ddTitle">
                <Form.Label>Name's title</Form.Label>
                <Form.Select
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                >
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Ms.">Ms.</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please Select Name's title
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="txtFirstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={firstname}
                  placeholder="Enter First Name"
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  {""}
                  Please Enter First Name
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="txtLastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={lastname}
                  placeholder="Enter First Name"
                  onChange={(e) => setLastname(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  {""}
                  Please Enter Last Name
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="radGender">
                <Form.Label>Gender</Form.Label>
                <Form.Check
                  value="M"
                  type="radio"
                  aria-label="radio 1"
                  label="Male"
                  onChange={(e) => setGender(e.target.value)}
                  checked={gender === "M"}
                />
                <Form.Check
                  value="F"
                  type="radio"
                  aria-label="radio 2"
                  label="Female"
                  onChange={(e) => setGender(e.target.value)}
                  checked={gender === "F"}
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" size="lg" type="submit">
                  Confirm
                </Button>
              </div>
            </Form>

            <p className="d-flex justify-content-center flex-row mt-3">
              {title + " "}
              {firstname + " "}
              {lastname + " "}
              {gender}
            </p>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
}

export default CustomerForm;
