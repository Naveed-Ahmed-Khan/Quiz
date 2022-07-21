import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import event from "../assets/images/event.png";
import Button from "../components/UI/Button";
import DateTime from "../components/UI/DateTime";
import FormGroup from "../components/UI/FormGroup";
import Input from "../components/UI/Input";
import SelectGroup from "../components/UI/SelectGroup";
import TextArea from "../components/UI/TextArea";
import { useAuth } from "../contexts/AuthContext";
import { useStateContext } from "../contexts/ContextProvider";
import { db, storage } from "../firebase-config";

export default function AddItem() {
  const { currentUser } = useAuth();
  const { updateCheck } = useStateContext();

  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("event");
  const [imagePath, setImagePath] = useState("");
  const [image, setImage] = useState(null);

  const [name, setName] = useState("");
  const [dateValue, onDateValue] = useState(new Date());
  const [contact, setContact] = useState(null);
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  console.log(image);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (image !== null) {
      const imageRef = ref(storage, `${image.name}-${Date.now()}`);
      // console.log(imageRef);
      try {
        await uploadBytes(imageRef, image);
        const path = await getDownloadURL(imageRef);
        // setImagePath(path);

        await addDoc(collection(db, "places"), {
          businessId: currentUser.uid,
          name: name,
          description: description,
          image: path,
          type: selectedValue,
          date: Timestamp.fromDate(dateValue),
          contact: contact,
          address: address,
          city: city,
          country: country,
          ratings: 0,
          likedby: [],
        });
        updateCheck((prev) => !prev);
        navigate("/dashboard/items");
      } catch (error) {
        console.log(error);
      }
    }
  };
  console.log(dateValue.getTime());
  // console.log(imagePath);

  return (
    <form
      onSubmit={submitHandler}
      className="pt-[5vh] md:mt-[12vh] w-full mx-auto max-w-6xl pb-8 px-5 sm:px-10 lg:px-16"
    >
      <section className="flex flex-col xl:flex-row items-center xl:items-start gap-12 ">
        {image ? (
          <div>
            <div className="relative overflow-clip">
              <div className="w-80 h-72">
                <img
                  className="object-cover w-full h-full rounded-3xl"
                  src={URL.createObjectURL(image || {})}
                  alt=""
                />
              </div>
              <label>
                <span className="text-sm">
                  <div className="absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-primary-500 cursor-pointer" />
                  <div className="cursor-pointer">
                    <svg
                      className="absolute right-4 bottom-4 w-8 h-8 "
                      viewBox="0 0 33 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.5192 12.8243L11.1608 28.6909C10.2831 29.542 9.18333 30.1458 7.97914 30.4377L1.70315 31.9591C0.700009 32.2023 -0.208644 31.3212 0.0421425 30.3485L1.61114 24.2627C1.91219 23.095 2.53485 22.0285 3.41254 21.1774L19.771 5.31091L27.5192 12.8243ZM31.3953 1.55608C33.5349 3.63086 33.5349 6.99473 31.3953 9.0695L29.4563 10.946L21.7081 3.43256L23.6471 1.55608C25.7867 -0.518694 29.2557 -0.518694 31.3953 1.55608Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </span>
                <input
                  className="hidden"
                  type="file"
                  name="inputimage"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
              </label>
            </div>
            <p className="mt-2 pl-2 text-black text-opacity-80">
              {image ? image.name : "No file selected"}
            </p>
          </div>
        ) : (
          <div>
            <label
              className="w-80 h-72 border-2 border-primary-500 border-dashed rounded-3xl
          grid place-content-center cursor-pointer"
            >
              <span className="text-sm">
                <div className="text-xl text-primary-500">Upload Image</div>
              </span>
              <input
                className="hidden"
                type="file"
                name="inputimage"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
            <p className="mt-2 pl-2 text-black text-opacity-80">
              No file selected
            </p>
          </div>
        )}
        <div className="w-full max-w-lg flex flex-col gap-7">
          {/* <iframe
            title="googleMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26567.343054172172!2d72.8530944!3d33.659289600000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1sen!2s!4v1657751752176!5m2!1sen!2s"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <div
            className="flex w-fit text-primary-500 text-base xl:text-lg text-opacity-60 bg-[#E6EBFF] rounded-lg 
              shadow-xl  transition-all duration-300 overflow-clip"
          >
            <button
              type="button"
              className={`${
                selectedValue === "event"
                  ? "bg-primary-400 bg-opacity-90 text-white"
                  : "bg-[#E6EBFF] text-primary-500"
              } px-4 py-2 hover:bg-primary-500 hover:text-white transition-all duration-300`}
              onClick={() => setSelectedValue("event")}
            >
              Event
            </button>
            <button
              type="button"
              className={`${
                selectedValue === "place"
                  ? "bg-primary-400 bg-opacity-90 text-white"
                  : "bg-[#E6EBFF] text-primary-500"
              } px-4 py-2 hover:bg-primary-500 hover:text-white transition-all duration-300`}
              onClick={() => setSelectedValue("place")}
            >
              Place
            </button>
          </div>
          <Input
            required
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            required
            placeholder="Contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          {selectedValue === "event" && (
            <DateTime dateValue={dateValue} onDateValue={onDateValue} />
          )}
          <Input
            required
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <div className="flex gap-4">
            <Input
              required
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Input
              required
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <TextArea
            required
            rows={5}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button type={"submit"}>
            <p className="text-white text-xl">Add</p>
          </Button>
        </div>
      </section>
    </form>
  );
}
