import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaypalButton = ({amount, onSuccess, onError}) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "ARMEvHvNv4LIF_lrOo7VBgs-UWPZzlo-XHCbmieeJB0gl6a0Kb6kTLxEKRuNvmckIKCp3ZL2ffXXCB1V",
        currency: "MXN",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical", shape: "pill"  }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            onSuccess(details);
          });
        }}
        onError={(err) => {
          onError(err);
        }}
        forceReRender={[amount]} // Esto ayuda en algunos casos
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
