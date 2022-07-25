import Backgroundlogin from "../components/UI/Backgroundlogin";
import Button from "../components/UI/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { useAuth } from "../contexts/AuthContext";
import Input from "../components/UI/Input";

export default function Signup2() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { signup } = useAuth();

  const signupUser = async (email, password) => {
    try {
      await signup(email, password);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen xl:flex xl:justify-center mx-auto md:max-w-screen-md xl:max-w-none bg-primary-200">
      <div className="pt-[5vh] sm:pt-[10vh] xl:pt-0 px-5 w-full flex items-center xl:w-5/12 space-y-5">
        <div className="xl:max-w-md mx-auto my-auto  ">
          <div className="space-y-5 xl:mb-8">
            <div className="mb-6">
              <h3 className="mb-5 text-2xl sm:text-3xl xl:text-4xl">Signup</h3>
              <p className="text-sm xl:text-base">
                Enter your credentials to create an account.
              </p>
            </div>
          </div>
          <div className="mb-2 text-lg text-center text-red-500 transition-all duration-500 scale-100">
            {errorMessage.length > 0 && <p>{"Invalid Credentials"}</p>}
          </div>
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
                setErrorMessage("");
              }}
            />
          </div>
          <div className="mb-10">
            <Input
              secondary
              label="Password"
              required
              autoComplete="off"
              type={showPassword ? "text" : "password"}
              placeholder="******"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorMessage("");
              }}
            />
          </div>

          {/*  <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input
                className="text-secondary-200 bg-primary-100 rounded w-5 h-5 transition-all duration-300"
                type="checkbox"
                name=""
                id=""
              />
              <label className="text-base">Remember Information</label>
            </div>
            <Link to="/signin">
              <p className="text-base text-secondary-200 hover:underline hover:underline-offset-2">
                Forgot Password?
              </p>
            </Link>
          </div> */}

          <Button
            primary
            onClick={() => {
              signupUser(email, password);
            }}
            fullWidth
            type={"button"}
          >
            <p className="text-[.9em] xl:text-[1.2em]">Signup</p>
          </Button>

          <div className="mt-4 flex items-center gap-4">
            <p className="text-base">Already a member?</p>
            <Link
              to={"/login"}
              className="text-secondary-200 text-base cursor-pointer"
            >
              Login
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
