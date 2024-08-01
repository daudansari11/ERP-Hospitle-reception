import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function StaffAttendanceRportForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // Form is valid
      event.preventDefault(); // Prevent default form submission behavior
      // Handle form data here
      console.log("Form submitted successfully");
    }

    setValidated(true);
  };
  return (
    <div className="form_container_reports">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          {/* <Form.Group as={Col}md="3" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group> */}
        </Row>

        <Row className="mb-3">
          {/* <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Time Duration </Form.Label>
            <Form.Select required aria-label="Select Time Duration ">
              <option value="">Choose...</option>
              <option value="consultation">Today</option>
              <option value="follow-up">This Week</option>
              <option value="routine">Last Week</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Time Duration .
            </Form.Control.Feedback>
          </Form.Group> */}

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Role</Form.Label>
            <Form.Select required aria-label="Select Role">
              <option value="">Choose...</option>
              <option value="consultation">Admin</option>
              <option value="consultation">Accountant</option>
              <option value="consultation">Doctor</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Role.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Month</Form.Label>
            <Form.Select required aria-label="Select Month">
              <option value="">Choose...</option>
              <option value="consultation">January</option>
              <option value="consultation">February</option>
              <option value="consultation">March</option>
              <option value="consultation">April</option>
              <option value="consultation">May</option>
              <option value="consultation">June</option>
              <option value="consultation">July</option>
              <option value="consultation">August</option>
              <option value="consultation">September</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Month.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Year</Form.Label>
            <Form.Select required aria-label="Select Year">
              <option value="">Choose...</option>
              <option value="consultation">2024</option>
              <option value="follow-up">2023</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Year.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
}

export default StaffAttendanceRportForm;
