import React from "react";
import { Link } from "react-router-dom";
import BackgroundPayment from "../components/UI/BackgroundPayment";
import { useStateContext } from "../contexts/ContextProvider";

export default function Subscription() {
  const { subscriptions } = useStateContext();
  return (
    <>
      <BackgroundPayment />
      <section className="container md:max-w-xl xl:max-w-screen-xl mx-auto pt-[5vh] sm:pt-[10vh]">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold lg:text-5xl text-primary-500">
            Subscription
          </h2>
          <p className="pt-2 text-gray-500">Select desired package</p>
        </div>
        <div className="flex flex-wrap justify-evenly gap-x-4 gap-y-14 text-center text-primary-500">
          {subscriptions.map((sub) => {
            return (
              <div
                key={sub.id}
                className="flex flex-col p-6 space-y-6 rounded-3xl shadow-2xl sm:p-8 bg-white"
              >
                <h3 className="text-6xl font-bold">
                  ${sub.price}
                  <span className="text-sm tracking-wide font-medium">
                    /{sub.duration}
                  </span>
                </h3>

                <h4 className="pt-6 text-2xl font-bold">{sub.name}</h4>
                <ul className="flex-1 space-y-2">
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Everything in Free</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Phasellus tellus</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Praesent faucibus</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Aenean et lectus blandit</span>
                  </li>
                </ul>
                <Link
                  rel="noopener noreferrer"
                  to={`/payment/${sub.id}`}
                  className="bg-primary-500 text-white w-full px-5 py-3 font-semibold tracking-wider text-center rounded  "
                >
                  Subscribe
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
