import Backgroundlogin from "../components/UI/Backgroundlogin";
import Button from "../components/UI/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setErrorMessage("");
      const newUser = await signup(email, password);
      console.log(newUser);

      const userData = {
        name: name,
        phone: phone,
        email: email,
        joinDate: serverTimestamp(),
        type: "business",
        businessId: newUser?.user?.uid,
        activeSubscription: null,
        allSubscriptions: [],
        notifications: [],
        isDisabled: false,
      };
      await setDoc(doc(collection(db, "users"), newUser?.user?.uid), userData);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="">
      <Backgroundlogin />
      <div className="container md:max-w-xl xl:max-w-screen-xl mx-auto xl:flex pt-[10vh] sm:pt-[15vh] xl:pt-[20vh]">
        <div className="xl:w-3/5 xl:px-32 pb-4 xl:pb-0">
          <h1 className="text-center xl:text-left text-2xl sm:text-4xl xl:text-6xl font-rublik font-bold text-primary-500">
            Grow your business today!
          </h1>
          <p className="text-center pt-2 xl:pt-8 xl:text-left text-sm sm:text-base xl:text-lg font-rublik font-medium text-[#717171]">
            Add events, visitors, restaurants and let visitors know about you.
          </p>
        </div>

        <form
          onSubmit={submitHandler}
          className="xl:w-2/5 space-y-5  xl:-mt-12"
        >
          <div className="mt-4 -mb-4 text-lg text-center text-red-500 transition-all duration-500 scale-100">
            {/* {errorMessage.length > 0 && <p>{"Invalid Credentials"}</p>} */}
          </div>
          {/* <div className="flex justify-center space-x-6">
            <p className="text-primary-500 opacity-40 hover:opacity-100 text-base xl:text-lg hover:underline hover:underline-offset-2 font-rublik font-medium transition-all duration-300 cursor-pointer">
              Login
            </p>
            <p className="text-primary-500 text-base xl:text-lg underline underline-offset-2 font-rublik font-medium cursor-pointer">
              Signup
            </p>
          </div> */}
          <div className="space-y-1 xl:pb-4">
            <p className="text-center text-primary-500 text-xl sm:text-2xl xl:text-3xl font-rublik font-bold">
              Create New Account
            </p>
            <p className="text-center font-rublik text-sm sm:text-base xl:text-lg text-[#717171]">
              Create new account to continue
            </p>
          </div>
          <div className="mx-4 xl:mx-16 relative flex flex-col items-center">
            <svg
              className="object-contain h-4 absolute left-4 top-5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 10C12.7625 10 15 7.7625 15 5C15 2.2375 12.7625 0 10 0C7.2375 0 5 2.2375 5 5C5 7.7625 7.2375 10 10 10ZM10 12.5C6.6625 12.5 0 14.175 0 17.5V18.75C0 19.4375 0.5625 20 1.25 20H18.75C19.4375 20 20 19.4375 20 18.75V17.5C20 14.175 13.3375 12.5 10 12.5Z"
                fill="#013B8D"
              />
            </svg>

            <input
              autocomplete="off"
              className={`w-full text-primary-500 text-base xl:text-lg text-opacity-60 bg-[#E6EBFF] border-2 border-[#E6EBFF] rounded-2xl outline-none ring-0 
              placeholder-primary-500 placeholder-opacity-40 placeholder:font-rublik placeholder:text-base xl:placeholder:text-lg
                focus:border-2 focus:border-primary-500 focus:border-opacity-40 caret-primary-500 shadow-xl
                py-3 px-12 transition-all duration-300`}
              placeholder="Username"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrorMessage("");
              }}
            />
          </div>
          <div className="mx-4 xl:mx-16 relative flex flex-col items-center">
            <svg
              className="object-contain h-4 absolute left-4 top-5"
              viewBox="0 0 24 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.6 0H2.4C1.08 0 0.012 1.06875 0.012 2.375L0 16.625C0 17.9312 1.08 19 2.4 19H21.6C22.92 19 24 17.9312 24 16.625V2.375C24 1.06875 22.92 0 21.6 0ZM21.12 5.04688L12.636 10.2956C12.252 10.5331 11.748 10.5331 11.364 10.2956L2.88 5.04688C2.58 4.85687 2.4 4.53625 2.4 4.19188C2.4 3.39625 3.276 2.92125 3.96 3.33687L12 8.3125L20.04 3.33687C20.724 2.92125 21.6 3.39625 21.6 4.19188C21.6 4.53625 21.42 4.85687 21.12 5.04688Z"
                fill="#013B8D"
              />
            </svg>

            <input
              autocomplete="off"
              className={`w-full text-primary-500 text-base xl:text-lg text-opacity-60 bg-[#E6EBFF] border-2 border-[#E6EBFF] rounded-2xl outline-none ring-0 
              placeholder-primary-500 placeholder-opacity-40 placeholder:font-rublik placeholder:text-base xl:placeholder:text-lg
                focus:border-2 focus:border-primary-500 focus:border-opacity-40 caret-primary-500 shadow-xl
                py-3 px-12 transition-all duration-300`}
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrorMessage("");
              }}
            />
          </div>
          <div className="mx-4 xl:mx-16 relative flex flex-col items-center">
            <svg
              className="object-contain h-5 absolute left-4 top-5"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8902 6.73054C11.5082 2.33654 6.92423 0.180536 6.73023 0.0925357C6.54888 0.00728308 6.34564 -0.019955 6.14823 0.0145357C0.856235 0.892536 0.0602347 3.97254 0.0282347 4.10054C-0.0153027 4.27891 -0.00837807 4.46587 0.0482346 4.64054C6.36023 24.2245 19.4782 27.8545 23.7902 29.0485C24.1222 29.1405 24.3962 29.2145 24.6042 29.2825C24.8416 29.3601 25.0995 29.3451 25.3262 29.2405C25.4582 29.1805 28.5742 27.7125 29.3362 22.9245C29.37 22.7155 29.3364 22.5012 29.2402 22.3125C29.1722 22.1805 27.5422 19.0785 23.0222 17.9825C22.8689 17.9433 22.7083 17.9419 22.5543 17.9785C22.4003 18.0151 22.2576 18.0885 22.1382 18.1925C20.7122 19.4105 18.7422 20.7085 17.8922 20.8425C12.1942 18.0565 9.01223 12.7105 8.89223 11.6965C8.82224 11.1265 10.1282 9.12454 11.6302 7.49654C11.7246 7.39408 11.7965 7.27299 11.8413 7.14106C11.8861 7.00913 11.9028 6.86929 11.8902 6.73054Z"
                fill="#013B8D"
              />
            </svg>

            <input
              autocomplete="off"
              className={`w-full text-primary-500 text-base xl:text-lg text-opacity-60 bg-[#E6EBFF] border-2 border-[#E6EBFF] rounded-2xl outline-none ring-0 
              placeholder-primary-500 placeholder-opacity-40 placeholder:font-rublik placeholder:text-base xl:placeholder:text-lg
                focus:border-2 focus:border-primary-500 focus:border-opacity-40 caret-primary-500 shadow-xl
                py-3 px-12 transition-all duration-300`}
              placeholder="Phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setErrorMessage("");
              }}
            />
          </div>
          <div className="mx-4 xl:mx-16 relative flex flex-col items-center">
            <svg
              className="object-contain h-5 absolute left-4 top-4"
              viewBox="0 0 26 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.8421 22H4.63158C3.40321 22 2.22515 21.512 1.35656 20.6434C0.487969 19.7749 0 18.5968 0 17.3684V12.7368C0 11.5085 0.487969 10.3304 1.35656 9.46182C2.22515 8.59323 3.40321 8.10526 4.63158 8.10526H20.8421C22.0705 8.10526 23.2485 8.59323 24.1171 9.46182C24.9857 10.3304 25.4737 11.5085 25.4737 12.7368V17.3684C25.4737 18.5968 24.9857 19.7749 24.1171 20.6434C23.2485 21.512 22.0705 22 20.8421 22ZM4.63158 10.4211C4.01739 10.4211 3.42836 10.665 2.99407 11.0993C2.55977 11.5336 2.31579 12.1227 2.31579 12.7368V17.3684C2.31579 17.9826 2.55977 18.5716 2.99407 19.0059C3.42836 19.4402 4.01739 19.6842 4.63158 19.6842H20.8421C21.4563 19.6842 22.0453 19.4402 22.4796 19.0059C22.9139 18.5716 23.1579 17.9826 23.1579 17.3684V12.7368C23.1579 12.1227 22.9139 11.5336 22.4796 11.0993C22.0453 10.665 21.4563 10.4211 20.8421 10.4211H4.63158Z"
                fill="#013B8D"
              />
              <path
                d="M20.8421 10.4211H4.63158V8.10526C4.63158 5.95561 5.48552 3.89401 7.00555 2.37398C8.52558 0.853945 10.5872 0 12.7368 0C14.8865 0 16.9481 0.853945 18.4681 2.37398C19.9882 3.89401 20.8421 5.95561 20.8421 8.10526V10.4211ZM6.94737 8.10526H18.5263C18.5263 6.5698 17.9164 5.09722 16.8306 4.01149C15.7449 2.92575 14.2723 2.31579 12.7368 2.31579C11.2014 2.31579 9.7288 2.92575 8.64306 4.01149C7.55733 5.09722 6.94737 6.5698 6.94737 8.10526Z"
                fill="#013B8D"
              />
              <path
                d="M20.8421 9.26316H4.63158C3.7103 9.26316 2.82676 9.62913 2.17532 10.2806C1.52387 10.932 1.1579 11.8156 1.1579 12.7368V17.3684C1.1579 18.2897 1.52387 19.1732 2.17532 19.8247C2.82676 20.4761 3.7103 20.8421 4.63158 20.8421H20.8421C21.7634 20.8421 22.6469 20.4761 23.2984 19.8247C23.9498 19.1732 24.3158 18.2897 24.3158 17.3684V12.7368C24.3158 11.8156 23.9498 10.932 23.2984 10.2806C22.6469 9.62913 21.7634 9.26316 20.8421 9.26316ZM5.78948 16.2105C5.56047 16.2105 5.3366 16.1426 5.14619 16.0154C4.95577 15.8882 4.80736 15.7073 4.71972 15.4957C4.63208 15.2842 4.60915 15.0513 4.65383 14.8267C4.69851 14.6021 4.80879 14.3958 4.97072 14.2339C5.13266 14.0719 5.33897 13.9617 5.56358 13.917C5.78819 13.8723 6.02101 13.8952 6.23258 13.9829C6.44416 14.0705 6.625 14.2189 6.75223 14.4093C6.87946 14.5998 6.94737 14.8236 6.94737 15.0526C6.94737 15.3597 6.82538 15.6542 6.60823 15.8714C6.39108 16.0885 6.09657 16.2105 5.78948 16.2105ZM10.4211 16.2105C10.192 16.2105 9.96818 16.1426 9.77776 16.0154C9.58735 15.8882 9.43894 15.7073 9.3513 15.4957C9.26366 15.2842 9.24073 15.0513 9.28541 14.8267C9.33009 14.6021 9.44037 14.3958 9.6023 14.2339C9.76424 14.0719 9.97055 13.9617 10.1952 13.917C10.4198 13.8723 10.6526 13.8952 10.8642 13.9829C11.0757 14.0705 11.2566 14.2189 11.3838 14.4093C11.511 14.5998 11.579 14.8236 11.579 15.0526C11.579 15.3597 11.457 15.6542 11.2398 15.8714C11.0227 16.0885 10.7281 16.2105 10.4211 16.2105ZM15.0526 16.2105C14.8236 16.2105 14.5998 16.1426 14.4093 16.0154C14.2189 15.8882 14.0705 15.7073 13.9829 15.4957C13.8952 15.2842 13.8723 15.0513 13.917 14.8267C13.9617 14.6021 14.0719 14.3958 14.2339 14.2339C14.3958 14.0719 14.6021 13.9617 14.8267 13.917C15.0514 13.8723 15.2842 13.8952 15.4957 13.9829C15.7073 14.0705 15.8882 14.2189 16.0154 14.4093C16.1426 14.5998 16.2105 14.8236 16.2105 15.0526C16.2105 15.3597 16.0885 15.6542 15.8714 15.8714C15.6542 16.0885 15.3597 16.2105 15.0526 16.2105ZM19.6842 16.2105C19.4552 16.2105 19.2313 16.1426 19.0409 16.0154C18.8505 15.8882 18.7021 15.7073 18.6145 15.4957C18.5268 15.2842 18.5039 15.0513 18.5486 14.8267C18.5932 14.6021 18.7035 14.3958 18.8655 14.2339C19.0274 14.0719 19.2337 13.9617 19.4583 13.917C19.6829 13.8723 19.9157 13.8952 20.1273 13.9829C20.3389 14.0705 20.5197 14.2189 20.647 14.4093C20.7742 14.5998 20.8421 14.8236 20.8421 15.0526C20.8421 15.3597 20.7201 15.6542 20.503 15.8714C20.2858 16.0885 19.9913 16.2105 19.6842 16.2105Z"
                fill="#013B8D"
              />
            </svg>
            <svg
              className="object-contain h-4 absolute right-4 top-5"
              viewBox="0 0 25 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 0C6.81818 0 1.96591 3.732 0 9C1.96591 14.268 6.81818 18 12.5 18C18.1875 18 23.0341 14.268 25 9C23.0341 3.732 18.1875 0 12.5 0ZM12.5 15C9.36364 15 6.81818 12.312 6.81818 9C6.81818 5.688 9.36364 3 12.5 3C15.6364 3 18.1818 5.688 18.1818 9C18.1818 12.312 15.6364 15 12.5 15ZM12.5 5.4C10.6193 5.4 9.09091 7.014 9.09091 9C9.09091 10.986 10.6193 12.6 12.5 12.6C14.3807 12.6 15.9091 10.986 15.9091 9C15.9091 7.014 14.3807 5.4 12.5 5.4Z"
                fill="#013B8D"
                fillOpacity="0.45"
              />
            </svg>

            <input
              autocomplete="off"
              className={`w-full text-primary-500 text-base xl:text-lg text-opacity-60 bg-[#E6EBFF] border-2 border-[#E6EBFF] rounded-2xl outline-none ring-0 
              placeholder-primary-500 placeholder-opacity-40 placeholder:font-rublik placeholder:text-base xl:placeholder:text-lg
                focus:border-2 focus:border-primary-500 focus:border-opacity-40 caret-primary-500 shadow-xl
                py-3 px-12 transition-all duration-300`}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorMessage("");
              }}
            />
          </div>
          <div className="mx-4 xl:mx-16 flex flex-col items-center pt-6 xl:pt-8">
            <Button
              /* onClick={async () => {
                await signup(email, password);
                navigate("/login");
                addDoc(collection(db, "users"), { name });
                // signIn(email, password);
                // navigate("/dashboard/home");
              }} */
              fullWidth
              type={"submit"}
            >
              <p className="text-white text-[1em] xl:text-[1.2em]">Signup</p>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4">
            <p className="text-center text-[#717171] text-base xl:text-lg font-rubik">
              Already have an account?
            </p>
            <Link
              to={"/login"}
              className="text-center text-primary-500 text-base xl:text-lg font font-bold font-rubik cursor-pointer"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
