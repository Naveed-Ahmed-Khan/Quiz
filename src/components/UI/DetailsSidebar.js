// import { onAuthStateChanged, signOut } from "firebase/auth";

// import { auth } from "../api/firebase-config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Backdrop from "./Backdrop";
import skardu from "../../assets/images/skardu.png";
import { useStateContext } from "../../contexts/ContextProvider";
import { useAuth } from "../../contexts/AuthContext";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-config";

const DetailsSidebar = (props) => {
  const location = useLocation();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { showDetails, updateShowDetails, updateSelectedPlace, updateCheck } =
    useStateContext();
  console.log(showDetails);

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`z-50 fixed right-0 flex flex-col w-full max-w-md bg-[#f6f6f6]
        overflow-y-auto 
        ${
          showDetails !== null
            ? "-translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        } transition ease-out duration-300`}
      >
        <div className="h-screen p-6 flex flex-col justify-between gap-6">
          <section>
            <div className="mb-0 sm:mb-5 flex justify-end">
              <svg
                onClick={() => {
                  updateShowDetails(null);
                }}
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-primary-500 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </div>
            <div>
              <div className="mb-0 xl:mb-6 sm:flex items-center justify-between w-full">
                <h2 className="text-2xl text-primary-500 font-semibold leading-tight">
                  {showDetails?.name}
                </h2>
                {/* <div className="">
                  {showDetails?.date && (
                    <p className="text-black">
                      {showDetails?.date.toDate().toDateString() || ""}
                    </p>
                  )}
                </div> */}
              </div>
              <div className=" mb-6 h-56 rounded-xl overflow-clip">
                <img
                  className="object-cover h-full w-full"
                  src={showDetails?.image}
                  alt=""
                />
              </div>
              <div className="-mt-3 mb-1 flex gap-1 text-black opacity-50">
                {showDetails?.date && (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-xs">
                      {showDetails?.date.toDate().toDateString() || ""}
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="h-[35vh] overflow-auto scrollbar-thin scrollbar-thumb-transparent">
              <p className="text-black opacity-50 text-sm">
                {showDetails?.description}
              </p>
            </div>
          </section>
          <section>
            <div className="flex gap-6 mb-10">
              <button
                onClick={() => {
                  updateSelectedPlace(showDetails);
                  if (currentUser.email === "admin@gmail.com") {
                    navigate(`/edit/${showDetails.id}`);
                    updateShowDetails(null);
                  } else {
                    navigate(`/dashboard/edit/${showDetails.id}`);
                    updateShowDetails(null);
                  }
                }}
                className="flex"
              >
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.1906 21.3516H0.809384C0.370968 21.3516 0 21.7294 0 22.1758C0 22.6222 0.370968 23 0.809384 23H22.1906C22.629 23 23 22.6222 23 22.1758C23 21.7294 22.629 21.3516 22.1906 21.3516ZM0.0337245 14.14L0 18.0205C0 18.2266 0.0674489 18.467 0.236071 18.6043C0.404692 18.7417 0.607038 18.8447 0.809384 18.8447L4.62023 18.8104C4.82258 18.8104 5.02493 18.7074 5.19355 18.57L18.2786 5.24561C18.5821 4.93654 18.5821 4.38708 18.2786 4.07801L14.5015 0.231803C14.1979 -0.0772676 13.6584 -0.0772676 13.3548 0.231803L10.7243 2.91041L0.269795 13.5562C0.101173 13.7279 0.0337245 13.9339 0.0337245 14.14V14.14ZM16.5587 4.66181L15.0748 6.17283L12.4443 3.49421L13.9282 1.9832L16.5587 4.66181V4.66181ZM1.65249 14.4834L11.2977 4.66181L13.9282 7.34043L4.28299 17.162H1.65249V14.4834Z"
                    fill="#013B8D"
                  />
                </svg>

                <p className="pl-2 text-primary-500 font medium">Edit</p>
              </button>
              <button
                onClick={async () => {
                  try {
                    await deleteDoc(
                      doc(collection(db, "places"), showDetails.id)
                    );
                    updateCheck((prev) => !prev);
                    updateShowDetails(null);
                  } catch (error) {
                    console.log(error);
                  }
                }}
                className="flex"
              >
                <svg
                  width="17"
                  height="21"
                  viewBox="0 0 17 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6667 0C12.311 0 12.8333 0.52234 12.8333 1.16667H15.1667C15.811 1.16667 16.3333 1.68901 16.3333 2.33333C16.3333 2.97767 15.811 3.5 15.1667 3.5H1.16667C0.52234 3.5 0 2.97766 0 2.33333C0 1.68901 0.52234 1.16667 1.16667 1.16667H3.5C3.5 0.52234 4.02234 0 4.66667 0H11.6667Z"
                    fill="#013B8D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.16699 4.66666H15.167V18.6667C15.167 19.9554 14.1224 21 12.8337 21H3.50033C2.21166 21 1.16699 19.9554 1.16699 18.6667V4.66666ZM5.25033 6.99999C4.92816 6.99999 4.66699 7.26116 4.66699 7.58332V18.0833C4.66699 18.4054 4.92816 18.6667 5.25033 18.6667C5.57249 18.6667 5.83366 18.4054 5.83366 18.0833V7.58332C5.83366 7.26116 5.57249 6.99999 5.25033 6.99999ZM11.0837 6.99999C10.7615 6.99999 10.5003 7.26116 10.5003 7.58332V18.0833C10.5003 18.4054 10.7615 18.6667 11.0837 18.6667C11.4058 18.6667 11.667 18.4054 11.667 18.0833V7.58332C11.667 7.26116 11.4058 6.99999 11.0837 6.99999Z"
                    fill="#013B8D"
                  />
                </svg>

                <p className="pl-2 text-primary-500 font medium">Delete</p>
              </button>
            </div>
            <div className="flex items-end gap-4 -m-6 p-8 bg-primary-500 rounded-t-3xl">
              <svg
                width="40"
                height="35"
                viewBox="0 0 40 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4279 0.0154601C7.61925 -0.134047 4.87137 0.799948 2.83314 2.85455C-1.24328 6.96408 -0.878201 13.9543 3.65369 18.5234L5.28246 20.1636L20.0031 35L34.7175 20.1636L36.3462 18.5234C40.8783 13.9543 41.2432 6.96408 37.1668 2.85455C33.0904 -1.25466 26.1639 -0.881591 21.6318 3.68727L20.0031 5.33349L18.3681 3.68727C16.1022 1.403 13.2365 0.165285 10.4279 0.0154601Z"
                  fill="#F05542"
                />
              </svg>
              <p className="text-white text-lg font font-semibold">
                {showDetails?.likedby?.length} Heart Reacts
              </p>
            </div>
          </section>
        </div>
      </div>
      {/* <Backdrop
        showBackdrop={props.showBackdrop}
        onClick={() => {
          props.setOpen(!props.open);
          props.setShowBackdrop(false);
        }}
      /> */}
      {/* Mobile Sidebar */}
    </>
  );
};

export default DetailsSidebar;
