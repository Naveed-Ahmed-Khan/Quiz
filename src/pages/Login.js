import Backgroundlogin from "../components/UI/Backgroundlogin";
import Button from "../components/UI/Button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { useAuth } from "../contexts/AuthContext";
import Input from "../components/UI/Input";

const Login = () => {
  const navigate = useNavigate();
  const [localData, setLocalData] = useState(null);
  const [email, setEmail] = useState(localData?.email || "");
  const [password, setPassword] = useState(localData?.email || "");
  const [rememberMe, setRememberMe] = useState(localData ? true : false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useAuth();

  useEffect(() => {
    const checkLocalStorage = () => {
      const data = JSON.parse(localStorage.getItem("user.quizapp"));
      console.log(data);
      data ? setLocalData(data) : setLocalData(null);
    };
    checkLocalStorage();
  }, []);

  const signIn = async (email, password) => {
    try {
      setErrorMessage("");
      if (email === "admin@gmail.com") {
        await login(email, password);
        rememberMe &&
          localStorage.setItem(
            "user.quizapp",
            JSON.stringify({ email, password })
          );
        navigate("/quiz");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };
  /* const login = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      setCurrentUser(user);
      localStorage.setItem("isLoggedIn", true);
      navigate("/home");
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
      // alert("invalid");
    }
  }; */
  console.log(rememberMe);
  return (
    <div className="min-h-screen xl:flex xl:justify-center mx-auto md:max-w-screen-md xl:max-w-none bg-primary-200">
      <div className="pt-[5vh] sm:pt-[10vh] px-5 w-full flex items-center xl:w-5/12 space-y-5">
        <div className="xl:max-w-md mx-auto my-auto  ">
          <div className="space-y-5 xl:mb-8">
            <div className="mb-6">
              <h3 className="mb-5 text-2xl sm:text-3xl xl:text-4xl">Login</h3>
              <p className="text-sm xl:text-base">
                Enter your credentials to access your account.
              </p>
            </div>
            <Button
              secondaryAlt
              // onClick={() => {
              //   signIn(email, password);
              // }}
              fullWidth
              type={"button"}
            >
              <div className="flex items-center justify-center gap-3">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27 13.5825C27 6.08109 20.9558 0 13.5 0C6.04415 0 0 6.08109 0 13.5825C0 20.3619 4.93675 25.9811 11.3906 27V17.5087H7.9629V13.5825H11.3906V10.5901C11.3906 7.18599 13.4061 5.30567 16.4898 5.30567C17.9668 5.30567 19.5117 5.57095 19.5117 5.57095V8.91352H17.8094C16.1324 8.91352 15.6094 9.96052 15.6094 11.0347V13.5825H19.3535L18.755 17.5087H15.6094V27C22.0633 25.9811 27 20.3619 27 13.5825Z"
                    fill="white"
                  />
                </svg>
                <p className="text-[0.9em] xl:text-base font-medium">
                  Login with Facebook
                </p>
              </div>
            </Button>
            <Button
              primary
              // onClick={() => {
              //   signIn(email, password);
              // }}
              fullWidth
              type={"button"}
            >
              <div className="flex items-center justify-center gap-3">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.7933 11.0732H14.8603C14.629 11.0732 14.4072 11.1651 14.2437 11.3286C14.0802 11.4922 13.9883 11.714 13.9883 11.9453V15.4453C13.9883 15.6765 14.0802 15.8983 14.2437 16.0618C14.4072 16.2254 14.629 16.3172 14.8603 16.3172H21.0183C20.346 18.0607 19.099 19.5226 17.4833 20.4612L20.1063 25.0062C22.1439 23.8602 23.8391 22.1913 25.0168 20.1718C26.1945 18.1522 26.8122 15.8551 26.8063 13.5172C26.8113 12.9418 26.7614 12.3672 26.6573 11.8013C26.621 11.5981 26.5148 11.414 26.3569 11.281C26.1991 11.148 25.9997 11.0745 25.7933 11.0732Z"
                    fill="white"
                  />
                  <path
                    d="M13.4037 21.558C11.9735 21.5562 10.569 21.1783 9.33105 20.4622C8.09309 19.746 7.06526 18.7169 6.35071 17.478L1.80371 20.095C2.68173 21.6202 3.85184 22.9573 5.24711 24.0299C6.64237 25.1024 8.23541 25.8894 9.93509 26.3457C11.6348 26.802 13.4077 26.9187 15.1526 26.6892C16.8974 26.4597 18.5799 25.8884 20.1037 25.008V25.002L17.4807 20.457C16.2432 21.1787 14.8362 21.5586 13.4037 21.558Z"
                    fill="white"
                  />
                  <path
                    d="M20.1033 25.008V25.002L17.4803 20.457C16.2429 21.1771 14.8369 21.5566 13.4053 21.557V26.802C15.757 26.8049 18.0678 26.1859 20.1033 25.008Z"
                    fill="white"
                  />
                  <path
                    d="M5.247 13.4042C5.24743 11.9725 5.62696 10.5665 6.347 9.32916L1.802 6.71216C0.621691 8.74469 0 11.0533 0 13.4037C0 15.7541 0.621691 18.0626 1.802 20.0952L6.347 17.4782C5.62454 16.2422 5.24483 14.8358 5.247 13.4042Z"
                    fill="white"
                  />
                  <path
                    d="M13.4037 5.24813C15.2919 5.24604 17.1218 5.90198 18.5787 7.10313C18.7455 7.24151 18.9578 7.31284 19.1742 7.30323C19.3907 7.29361 19.5959 7.20374 19.7497 7.05113L22.2227 4.57813C22.3077 4.49236 22.3742 4.39 22.4179 4.27742C22.4616 4.16484 22.4816 4.04447 22.4767 3.9238C22.4718 3.80314 22.4422 3.68478 22.3895 3.5761C22.3369 3.46742 22.2624 3.37075 22.1707 3.29213C20.6823 1.99347 18.9243 1.04114 17.0235 0.503747C15.1227 -0.0336425 13.1263 -0.142708 11.1782 0.184408C9.23016 0.511523 7.37892 1.26668 5.75787 2.39546C4.13682 3.52423 2.78633 4.99853 1.80371 6.71213L6.34871 9.32913C7.06331 8.08978 8.0914 7.06026 9.32975 6.34393C10.5681 5.6276 11.9731 5.24969 13.4037 5.24813Z"
                    fill="white"
                  />
                  <path
                    d="M18.5803 7.10318C18.7471 7.24156 18.9594 7.31289 19.1759 7.30328C19.3924 7.29366 19.5975 7.20379 19.7513 7.05118L22.2243 4.57818C22.3094 4.49241 22.3758 4.39004 22.4195 4.27747C22.4632 4.16489 22.4832 4.04452 22.4783 3.92385C22.4735 3.80319 22.4438 3.68483 22.3911 3.57614C22.3385 3.46746 22.264 3.3708 22.1723 3.29218C19.744 1.17026 16.6281 0.00160595 13.4033 0.00317541V5.24818C15.2932 5.24406 17.1248 5.90178 18.5803 7.10718V7.10318Z"
                    fill="white"
                  />
                </svg>
                <p className="text-[0.9em] xl:text-base font-medium">
                  Login with Google
                </p>
              </div>
            </Button>
          </div>
          <div className="flex items-center gap-4 py-5">
            <div className="w-full border-b border-b-primary-100" />
            <p className="text-base sm:text-lg">or</p>
            <div className="w-full border-b border-b-primary-100" />
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
          <div className="mb-4">
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

          <div className="mb-4 flex flex-wrap gap-3 items-center justify-between">
            <div className="flex items-center gap-3">
              <input
                className="text-secondary-200 bg-primary-100 rounded w-5 h-5 transition-all duration-300"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe((prev) => !prev)}
              />
              <label className="text-base">Remember Information</label>
            </div>
            <Link to="/forget-password">
              <p className="text-base text-secondary-200 hover:underline hover:underline-offset-2">
                Forgot Password?
              </p>
            </Link>
          </div>

          <Button
            primary
            onClick={async () => {
              signIn(email, password);
            }}
            fullWidth
            type={"button"}
          >
            <p className="text-[.9em] xl:text-[1.2em]">Login</p>
          </Button>

          <div className="mt-4 flex items-center gap-4">
            <p className="text-base">Not a member?</p>
            <Link
              to={"/signup"}
              className="text-secondary-200 text-base cursor-pointer"
            >
              Sign up
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
};

export default Login;
