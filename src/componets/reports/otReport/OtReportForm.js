import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function OtReportForm() {
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
          <Form.Group
            as={Col}
            md="3"
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
          </Form.Group>

          <Form.Group
            as={Col}
            md="3"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Consultant Doctor</Form.Label>
            <Form.Select required aria-label="Select Consultant Doctor">
              <option value="">Choose...</option>
              <option value="consultation">Super Admin (9001)</option>
              <option value="consultation">Json Abbot (9017)</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Consultant Doctor.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="3"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Operation Category</Form.Label>
            <Form.Select required aria-label="Select Operation Category">
              <option value="">Choose...</option>
              <option value="consultation">ENT & Oral Surgery</option>
              <option value="follow-up">Plastic Surgery</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Operation Category.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="3"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Operation Name</Form.Label>
            <Form.Select required aria-label="Select Operation Name">
              <option value="">Choose...</option>
              <option value="consultation">Chest X-ray(C)</option>
              <option value="follow-up">Breast UltraSound(BU)</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Operation Name.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
}

export default OtReportForm;
