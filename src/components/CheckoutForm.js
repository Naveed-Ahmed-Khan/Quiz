import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  collection,
  doc,
  serverTimestamp,
  updateDoc,
  Timestamp,
} from "firebase/firestore";

import { db } from "../firebase-config";
import { useStateContext } from "../contexts/ContextProvider";

export default function CheckoutForm({ selectedPlanId }) {
  // const { currentUser } = useAuth();
  const { subscriptions, selectedUserInfo, updateCheck } = useStateContext();
  console.log(selectedUserInfo);
  const selectedSubscription = subscriptions.filter(
    (sub) => sub.id === selectedPlanId
  );
  // console.log(selectedSubscription);

  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    try {
      const response = await stripe.confirmPayment({
        elements,
        redirect: "if_required",
        confirmParams: {
          // Make sure to change this to your payment completion page
          // receipt_email: selectedUserInfo[0]?.email,
          // return_url: "http://localhost:3000/dashboard/home",
        },
      });
      console.log("After confirmPayment");
      console.log(response);

      const data = {
        activeSubscription: {
          ...selectedSubscription[0],
          subscriptionDate: Timestamp.fromDate(new Date()),
          expirationDate: Timestamp.fromDate(new Date(Date.now() + 2629800000)), //1 month in milliseconds
          // expirationDate: Timestamp.fromDate(new Date(Date.now() + 30000)), //1 month in milliseconds
        },
        notifications: [
          ...selectedUserInfo[0].notifications,
          {
            title: "Success",
            message: `You have subscribed to ${selectedSubscription[0].name} plan`,
            id: Date.now(),
          },
        ],
        unreadNotifications: selectedUserInfo[0].unreadNotifications + 1,
      };
      await updateDoc(
        doc(collection(db, "users"), selectedUserInfo[0].businessId),
        data
      );
      updateCheck();

      if (response.error !== undefined) {
        if (
          response.error.type === "card_error" ||
          response.error.type === "validation_error"
        ) {
          setMessage(response.error.message);
        } else {
          setMessage("An unexpected error occurred.");
        }
      }
    } catch (error) {
      console.log(error);
      setMessage("An unexpected error occurred.");
    }
    navigate("/dashboard/home");

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.

    setIsLoading(false);
  };
  console.log(message);

  return (
    <form
      className="w-full bg-white max-w-xl shadow-xl p-10 rounded-md "
      id="payment-form"
      onSubmit={handleSubmit}
    >
      <h3 className="mb-6 text-2xl text-primary-500 font-bold">Card Details</h3>
      <PaymentElement id="payment-element" />
      <div className="sm:flex sm:gap-4">
        <button
          className="mt-6 px-6 py-3 w-full bg-primary-500 text-white text-lg font-medium rounded-md hover:bg-primary-400 hover:scale-105 active:scale-100 active:bg-primary-500 hover:shadow-xl transition-all duration-300"
          disabled={isLoading || !stripe || !elements}
          id="submit"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner">
                Loading...
              </div>
            ) : (
              "Proceed"
            )}
          </span>
        </button>
        <button
          onClick={() => navigate("/dashboard/home")}
          className="mt-6 px-6 py-3 w-full bg-primary-500 text-white text-lg font-medium rounded-md hover:bg-primary-400 hover:scale-105 active:scale-100 active:bg-primary-500 hover:shadow-xl transition-all duration-300"
        >
          Cancel
        </button>
      </div>
      {/* Show any error or success messages */}
      {message && (
        <div className="mt-2 text-gray-600 text-center" id="payment-message">
          {message}
        </div>
      )}
    </form>
  );
}
