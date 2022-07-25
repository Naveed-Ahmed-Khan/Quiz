import Backgroundlogin from "../components/UI/Backgroundlogin";
import Button from "../components/UI/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { useAuth } from "../contexts/AuthContext";
import Input from "../components/UI/Input";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const { resetPassword } = useAuth();

  const forgetPassword = async (email) => {
    setError(false);
    setMessage("");
    try {
      await resetPassword(email);
      setMessage("Email sent successfully");
    } catch (error) {
      console.log(error);
      setError(true);
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen xl:flex xl:justify-center mx-auto md:max-w-screen-md xl:max-w-none bg-primary-200">
      <div className="pt-[5vh] sm:pt-[10vh] xl:pt-0 px-5 w-full flex items-center xl:w-5/12 space-y-5">
        <div className="xl:max-w-md mx-auto my-auto  ">
          <div className="space-y-5 xl:mb-8">
            <div className="mb-6">
              <h3 className="mb-5 text-2xl sm:text-3xl xl:text-4xl">
                Forgot Password
              </h3>
              <p className="text-sm xl:text-base">
                Enter your email to send a reset request.
              </p>
            </div>
          </div>
          {message.length > 0 && (
            <div
              className={`flex items-center justify-between mb-6 border rounded  px-8 py-2
            ${
              error
                ? "text-rose-500 border-rose-500"
                : "text-emerald-500 border-emerald-500"
            } 
              mb-2 text-lg text-centertransition-all duration-500 scale-100`}
            >
              <p>{message}</p>
              <svg
                onClick={() => {
                  setError(false);
                  setMessage("");
                }}
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 hover:rotate-90 transition-all duration-300 ease-in-out cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}

          <div className="mb-4">
            <Input
              secondary
              label="Email Address"
              required
              autoComplete="off"
              type={"email"}
              placeholder="name@company.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setMessage("");
              }}
            />
          </div>

          <Button
            primary
            onClick={() => {
              forgetPassword(email);
            }}
            fullWidth
            type={"button"}
          >
            <p className="text-[.9em] xl:text-[1.2em]">Send Reset Email</p>
          </Button>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link
              to={"/login"}
              className="text-secondary-200 text-base cursor-pointer"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden xl:block relative overflow-clip pt-[7vh] bg-primary-100 xl:w-7/12 xl:pl-24 pb-4 xl:pb-0">
        <p className="px-4 sm:px-0 pt-2 xl:pt-8 xl:text-left text-base sm:text-lg xl:text-xl font-rublik font-medium">
          "Exquisite newspaper attending on certainty oh suspicion of."
        </p>
        <p className="mt-3 text-white text-opacity-60">- Joseph Kennedy</p>
        <div className="fixed border-8 border-primary-200 h-[90vh] w-[60vw] -right-[7vw] -bottom-[15vh]" />
      </div>
    </div>
  );
}
