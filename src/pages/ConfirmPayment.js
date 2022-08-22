import React from "react";
import { Card } from "reactstrap";
import {NavLink} from 'react-router-dom'

function ConfirmPayment() {
  return (
    <main className="main_wrapper confirm">
      <div className="wrapper">
        <Card className="p-4 border-none shadow completed">
          <div className="wrap">
            <h3 className="mb-4">Purchase Completed</h3>
            <p className="mt-4">
              Please check your email for details concerning this transaction
            </p>
            <NavLink to='/' className='home'>
                Return Home
            </NavLink>
          </div>
        </Card>
      </div>
    </main>
  );
}

export default ConfirmPayment;
