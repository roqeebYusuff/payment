import React, { useContext } from "react";
import { Card } from "reactstrap";
import { NavLink } from "react-router-dom";
import { TbCheck } from "react-icons/tb";
import { GlobalContext } from "../utils/Context";

function ConfirmPayment() {
  const { dispatch } = useContext(GlobalContext);

  const handleHome = () => {
    dispatch({
      type: "Personal Info",
    });
  };

  return (
    <main className="main_wrapper confirm">
      <div className="wrapper">
        <Card className="p-4 border-none shadow completed">
          <div className="wrap">
            <div className="icon">
              <div className="shadow">
                <TbCheck color="#6FCF97" size={50} />
              </div>
            </div>
            <h3 className="mb-4">Purchase Completed</h3>
            <p className="mt-4">
              Please check your email for details concerning this transaction
            </p>
            <NavLink to="/" className="home" onClick={handleHome}>
              Return Home
            </NavLink>
          </div>
        </Card>
      </div>
    </main>
  );
}

export default ConfirmPayment;
