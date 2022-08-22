import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import PaymentPort from "./pages/PaymentPort";
import ConfirmPayment from "./pages/ConfirmPayment";
import { GlobalContext } from "./utils/Context";

const App = () => {
  const { state } = useContext(GlobalContext);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          state.step === "Personal Info" ? (
            <Profile />
          ) : state.step === "Billing Info" ? (
            <PaymentPort />
          ) : (
            <ConfirmPayment />
          )
        }
      />
    </Routes>
  );
};

export default App;
