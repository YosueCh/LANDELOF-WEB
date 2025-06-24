import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaypalButton = (amount, onSuccess, onError) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "ARMEvHvNv4LIF_lrOo7VBgs-UWPZzlo-XHCbmieeJB0gl6a0Kb6kTLxEKRuNvmckIKCp3ZL2ffXXCB1V",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
