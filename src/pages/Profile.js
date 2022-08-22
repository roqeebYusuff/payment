import React, { useContext } from "react";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import Main from "../layouts/Main";
import {GlobalContext} from "../utils/Context";

function Profile() {
  const { dispatch } = useContext(GlobalContext);
  const handleNextClicked = () => {
    dispatch({
      type: "Billing Info",
    });
  };
  return (
    <Main>
      <Row>
        <Col md="12">
          <FormGroup>
            <Label for="username">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Opara Linus Ahmed"
              type="text"
            />
          </FormGroup>
        </Col>

        <Col md="12">
          <FormGroup>
            <Label for="username">
              Email Address <span className="required">*</span>
            </Label>
            <span className="small-text">
              The purchase receipt would be sent to this address
            </span>
            <Input
              id="email"
              name="email"
              placeholder="OparaLinusAhmed@devmail.com"
              type="email"
            />
          </FormGroup>
        </Col>

        <Col md="12">
          <FormGroup>
            <Label for="username">Address 1</Label>
            <Input
              id="addressOne"
              name="addressOne"
              placeholder="The address of the user goes here"
              type="text"
            />
          </FormGroup>
        </Col>

        <Col md="12">
          <FormGroup>
            <Label for="username">Address 2</Label>
            <Input
              id="addressTwo"
              name="addressTwo"
              placeholder="and here"
              type="text"
            />
          </FormGroup>
        </Col>

        <Col md="8">
          <FormGroup>
            <Label for="username">Local Government</Label>
            <Input
              id="addressTwo"
              name="addressTwo"
              placeholder="and here"
              type="text"
            />
          </FormGroup>
        </Col>

        <Col md="4">
          <FormGroup>
            <Label for="username">State</Label>
            <Input id="exampleSelect" name="select" type="select">
              <option>Lagos</option>
              <option>Lagos</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>

      <div className="action-btns">
        <Button onClick={handleNextClicked} className="next-btn">Next</Button>
        <Button className="cancel-btn">Cancel Payment</Button>
      </div>
    </Main>
  );
}

export default Profile;
