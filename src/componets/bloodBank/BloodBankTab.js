import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import BloodBplus from "./bloodBplus/BloodBplus";
import BloodAplus from "./bloodAplus/BloodAplus";
import BloodAbMinus from "./bloodAbMinus/BloodAbMinus";
import BloodAbplus from "./bloodAbplus/BloodAbplus";
import BloodOminus from "./bloodOminus/BloodOminus";
import BloodAminus from "./bloodAminus/BloodAminus";
import BloodBminus from "./bloodBminus/BloodBminus";

function BloodBankTab() {
  return (
    <div className="px-2 py-2">
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={1}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                B+
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                A+
              </ListGroup.Item>

              <ListGroup.Item action href="#link3">
                Ab-
              </ListGroup.Item>

              <ListGroup.Item action href="#link4">
                AB+
              </ListGroup.Item>

              <ListGroup.Item action href="#link5">
                O-
              </ListGroup.Item>

              <ListGroup.Item action href="#link6">
                A-
              </ListGroup.Item>

              <ListGroup.Item action href="#link7">
                B-
              </ListGroup.Item>
              <ListGroup.Item action href="#link8">
                O+
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={11}>
            <Tab.Content className="">
              <Tab.Pane eventKey="#link1">
                <BloodBplus />
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <BloodAplus />
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <BloodAbMinus />
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <BloodAbplus />
              </Tab.Pane>

              <Tab.Pane eventKey="#link5">
                <BloodOminus />
              </Tab.Pane>

              <Tab.Pane eventKey="#link6">
                <BloodAminus />
              </Tab.Pane>

              <Tab.Pane eventKey="#link7">
                <BloodBminus />
              </Tab.Pane>

              <Tab.Pane eventKey="#link8">
                <BloodBplus />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default BloodBankTab;
