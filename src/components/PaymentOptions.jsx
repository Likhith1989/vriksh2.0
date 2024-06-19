import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useNavigate } from "react-router-dom";
import Paypal from "./PayPal";
const key_id = import.meta.env.KEY_ID;

const PaymentOptions = () => {
  const navigate = useNavigate();

  async function handle1() {
    const apiUrl = "https://paymentgateway-oin3.onrender.com/api/order";

    const formData = {
      username: "username",
      email: "username@example.com",
      amount: 10000,
    };

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const order = await res.json();
    console.log(order);

    var options = {
      key: key_id, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: order.currency,
      name: "Maiti Labs", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const body = { ...response };
        const validate = await fetch(
          "https://paymentgateway-oin3.onrender.com/api/order/validate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
        );
        const res = await validate.json();
        console.log(res);
        navigate("/success");
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "likhith Kumar", //your customer's name
        email: "likhith.kumar@example.com",
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#42f55a",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
    });
    rzp1.open();
  }

  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51PSO2SEh6vqdeZUg8gpu3WNBKLyGSyUztEDxoGBxeZIWnct32KMRReIblKSq7Rhad7OFnsPEfBqkXZnRyILfc7lJ000Wj9sWij"
    ); // Replace with your Stripe public key

    const body = {
      products: [
        {
          name: "plant",
          price: 50, // Set the price to ₹50
        },
      ],
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "http://localhost:7001/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl mb-6">Choose your payment method</h1>
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={makePayment}
      >
        Pay with Stripe
      </button>
      <button
        onClick={handle1}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Pay with Razorpay
      </button>
      <div>
        <Paypal />
      </div>
    </div>
  );
};

export default PaymentOptions;
