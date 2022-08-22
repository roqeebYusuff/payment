import React, { useContext, useState } from "react";
import {
  Button,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  Card,
  CardHeader,
} from "reactstrap";
import Main from "../layouts/Main";
import { GlobalContext } from "../utils/Context";

function Home() {
  const [step, setStep] = useState("first");
  const { dispatch } = useContext(GlobalContext);
  const handleNextClicked = () => {
    setStep("second");
  };

  const handlePayClicked = () => {
    dispatch({
      type: "Confirm Payment",
    });
  };
  return (
    <Main>
      {step === "first" ? (
        <>
          <Row>
            <Col md="12">
              <FormGroup>
                <Label for="username">
                  Name On Card <span className="required">*</span>
                </Label>
                <Input
                  id="cardName"
                  name="cardName"
                  placeholder="Opara Linus Ahmed"
                  type="text"
                />
              </FormGroup>
            </Col>

            <Col md="12">
              <FormGroup>
                <Label for="cardType">
                  Card Type <span className="required">*</span>
                </Label>
                <Input id="cardType" name="cardType" type="select">
                  <option>Visa</option>
                  <option>Visa</option>
                </Input>
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label for="username">
                  Card Details <span className="required">*</span>
                </Label>
                <Input
                  id="cardDetails"
                  name="cardDetails"
                  placeholder="44960 44960 44960 44960"
                  type="text"
                />
              </FormGroup>
            </Col>

            <Col md="3">
              <FormGroup>
                <Label for="username">
                  Expiry date <span className="required">*</span>
                </Label>
                <Input
                  id="expiry"
                  name="expiry"
                  placeholder="04 / 23"
                  type="text"
                />
              </FormGroup>
            </Col>

            <Col md="3">
              <FormGroup>
                <Label for="username">
                  CVV <span className="required">*</span>
                </Label>
                <Input id="cvv" name="cvv" placeholder="923" type="text" />
              </FormGroup>
            </Col>
          </Row>

          <div className="action-btns">
            <Button onClick={handleNextClicked} className="next-btn">
              Next
            </Button>
            <Button className="cancel-btn">Cancel Payment</Button>
          </div>
        </>
      ) : (
        <>
          <Card>
            <CardHeader>
              <div className="d-flex justify-content-between px-3 card-head">
                <span>Item Name</span>
                <span>Item Name</span>
              </div>
            </CardHeader>
            <div className="content px-4 mt-3">
              <div className="d-flex justify-content-between">
                <span>Data Science and usability</span>
                <span>50,000.00</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Shipping</span>
                <span>0.00</span>
              </div>
            </div>
            <div className="px-4">
              <hr />
            </div>
            <div className="border mx-4 mb-3 px-2 py-2 rounded">
              <div className="d-flex justify-content-between">
                <span>Total</span>
                <span>50,000.00</span>
              </div>
            </div>
          </Card>

          <div className="action-btns">
            <Button onClick={handlePayClicked} className="next-btn">
              Pay
            </Button>
            <Button className="cancel-btn">Cancel Payment</Button>
          </div>
        </>
      )}
    </Main>
  );
}

export default Home;
