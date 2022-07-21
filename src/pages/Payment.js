import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useParams } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import BackgroundPayment from "../components/UI/BackgroundPayment";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51LMtfiCruvk9OWrHLtHTTBf69yXQt3zVq35eSsItKjA6s04XuJeiJYfTabiKjx2u939T03bYSPcc6EED7atgudNk00pEM1ifty"
);

export default function App() {
  const [clientSecret, setClientSecret] = useState("");
  const { id } = useParams();
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://logo-backend-payment.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: id, quantity: 1 }] }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
        console.log(data.clientSecret);
      });
  }, [id]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <BackgroundPayment />
      <div className="container md:max-w-xl xl:max-w-screen-xl mx-auto pt-[5vh] md:pt-[10vh]">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold lg:text-5xl text-primary-500">
            Payment
          </h2>
          <p className="pt-2 text-gray-500">Fill in your data for payment</p>
        </div>
        <div className="flex justify-center">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm selectedPlanId={id} />
            </Elements>
          )}
        </div>
      </div>
    </>
  );
}
